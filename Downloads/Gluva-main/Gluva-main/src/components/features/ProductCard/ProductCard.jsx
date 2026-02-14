import { useState } from 'react'
import { useCart } from '../../../context/CartContext'

const ProductCard = ({ src, title, description, pricePerKg = 120, isVideo = false }) => {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(0.5)

  const detectMediaType = (src) => {
    if (!src) return false
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi']
    return videoExtensions.some((ext) => src.toLowerCase().includes(ext))
  }

  const shouldShowVideo = isVideo !== undefined ? isVideo : detectMediaType(src)

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 0.5)
  }

  const decreaseQuantity = () => {
    if (quantity > 0.5) {
      setQuantity((prev) => prev - 0.5)
    }
  }

  const totalPrice = (quantity * pricePerKg).toFixed(0)

  const handleOrder = () => {
    const product = { id: title, name: title, pricePerKg }
    addToCart(product, quantity)
    alert(`Додано в кошик: ${quantity} кг`)
  }

  return (
    <div className="relative size-full">
      {shouldShowVideo ? (
        <video
          src={src}
          loop
          muted
          autoPlay
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      ) : (
        <img
          src={src}
          alt={typeof title === 'string' ? title : 'Product image'}
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      )}

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base opacity-90">{description}</p>
          )}
        </div>

        <div className="space-y-4">
          <div className="text-right">
            <span className="text-sm opacity-75">{pricePerKg} ₴/кг</span>
          </div>

          <div className="flex items-center justify-between bg-black bg-opacity-50 rounded-lg p-3 backdrop-blur-sm">
            <button
              onClick={decreaseQuantity}
              className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center text-white font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={quantity <= 0.5}
            >
              −
            </button>

            <div className="text-center">
              <div className="text-lg font-bold">{quantity} кг</div>
              <div className="text-xs opacity-75">{quantity * 1000} г</div>
            </div>

            <button
              onClick={increaseQuantity}
              className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center text-white font-bold transition-colors"
            >
              +
            </button>
          </div>

          <div className="flex items-center justify-between bg-black bg-opacity-50 rounded-lg p-3 backdrop-blur-sm">
            <div>
              <div className="text-lg font-bold text-green-400">{totalPrice} ₴</div>
              <div className="text-xs opacity-75">до сплати</div>
            </div>

            <button
              onClick={handleOrder}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full text-white font-semibold transition-all transform hover:scale-105 active:scale-95"
            >
              Замовити
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
