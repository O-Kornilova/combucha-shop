import express from 'express'
import multer from 'multer'
import { v2 as cloudinary } from 'cloudinary'

const router = express.Router()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const upload = multer({ storage: multer.memoryStorage() })

router.post('/multiple', upload.array('images', 10), async (req, res) => {
  try {
    const uploadPromises = req.files.map(file => {
      return new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: 'kombucha-shop' }, (error, result) => {
            if (error) reject(error)
            else resolve(result.secure_url)
          })
          .end(file.buffer)
      })
    })

    const urls = await Promise.all(uploadPromises)
    res.send(urls)
  } catch (error) {
    console.error('Cloudinary upload error:', error)
    res.status(500).json({ message: error.message })
  }
})

export default router
