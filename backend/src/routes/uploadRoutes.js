import express from 'express'
import multer from 'multer'
import { v2 as cloudinary } from 'cloudinary'
import { CloudinaryStorage } from 'multer-storage-cloudinary'

const router = express.Router()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'kombucha-shop',
    allowed_formats: ['jpg', 'jpeg', 'png']
  }
})

const upload = multer({ storage })

router.post('/multiple', upload.array('images', 10), (req, res) => {
  const files = req.files.map(file => file.path) // це вже повний https:// URL
  res.send(files)
})

export default router
