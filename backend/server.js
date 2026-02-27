import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import connectDB from './src/config/db.js'
import authRoutes from './src/routes/authRoutes.js'
import productRoutes from './src/routes/productRoutes.js'
import uploadRoutes from './src/routes/uploadRoutes.js'
import feedbackRoutes from './src/routes/feedbackRoutes.js'

dotenv.config()
console.log('CLOUDINARY_CLOUD_NAME:', process.env.CLOUDINARY_CLOUD_NAME)
console.log('CLOUDINARY_API_KEY:', process.env.CLOUDINARY_API_KEY)

// ✅ Подключение к MongoDB
connectDB()

const app = express()

app.use(cors()) // для локальной разработки

// app.use(
//   cors({
//     origin: "https://combucha.eunewsblog.com",
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// ); // PRod

app.use(express.json())

// ✅ Тестовый маршрут
app.get('/', (req, res) => res.send('API is running'))

// ✅ Роуты пользователей
app.use('/api/users', authRoutes)

// ✅ Роуты продуктов
app.use('/api/products', productRoutes)

// ✅ Роут загрузки файлов
app.use('/api/upload', uploadRoutes)

// ✅ Роут фидбэка
app.use('/api/feedback', feedbackRoutes)

// ✅ Раздача папки uploads как статики
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

// ✅ Обработка ошибок
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  })
})

const PORT = process.env.PORT || 5002
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
)
