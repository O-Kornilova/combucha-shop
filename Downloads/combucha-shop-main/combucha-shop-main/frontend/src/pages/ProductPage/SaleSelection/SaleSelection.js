import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../../store/slices/cart/slice'
import styles from './SaleSelection.module.css'

const SaleSelection = ({ product }) => {
  const dispatch = useDispatch()
  const [selectedOption, setSelectedOption] = useState('How it tastes')
  const [size, setSize] = useState(
    product?.volumes?.[0] || product?.volume || '250g'
  )
  const [bottleType, setBottleType] = useState(
    product?.bottleTypes?.[0] || 'Glass'
  )
  const [count, setCount] = useState(1)

  const handleInputChange = e => {
    setSelectedOption(e.target.value)
  }

  const handleInputSizeChange = e => {
    setSize(e.target.value)
  }

  const handleInputBottleTypeChange = e => {
    setBottleType(e.target.value)
  }

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      selectedSize: size,
      selectedBottleType: bottleType,
      quantity: count
    }

    for (let i = 0; i < count; i++) {
      dispatch(addItem(cartItem))
    }
  }

  // Якщо немає продукта, показуємо заглушку
  if (!product) {
    return <div>Loading product details...</div>
  }

  // Розрахунок цін з урахуванням знижки
  const originalPrice =
    product.originalPrice || product.price / (1 - (product.sale || 0))
  const currentPrice = product.price
  const totalPrice = (currentPrice * count).toFixed(2)

  // Доступні розміри (якщо є в продукті, інакше дефолтні)
  const availableSizes = product.volumes ||
    product.sizes || ['250g', '500g', '750g']

  // Доступні типи пляшок (якщо є в продукті, інакше дефолтні)
  const availableBottleTypes = product.bottleTypes || [
    'Glass',
    'Plastic',
    'Metal'
  ]

  return (
    <div className={styles.section}>
      <h2>{product.name}</h2>

      <div className={styles.priceRating}>
        <div className={styles.priceRating_left}>
          <h4>{product.inStock ? 'In stock' : 'Out of stock'}</h4>
          <p>
            ${currentPrice} {product.currency || 'UAH'}
            {product.sale > 0 && <span>${originalPrice.toFixed(2)}</span>}
          </p>
        </div>
        <div className={styles.priceRating_right}>
          <div className={styles.priceRating_right__block}>
            <div className={styles.priceRating_right__info}>
              <h5>Rating</h5>
              <p>{product.rating || 'N/A'}</p>
              <p>claps</p>
            </div>
            <div className={styles.priceRating_right__button}>
              <button>
                <img src='./img/claps.svg' alt='Claps' />
              </button>
            </div>
          </div>
          <span>Support favorite kombucha</span>
        </div>
      </div>

      <div className={styles.toggle}>
        <div className={styles.toggle__head}>
          <div className={styles.toggle__head_title}>
            <label
              className={`${styles.radio_label} ${
                selectedOption === 'How it tastes' ? styles.active : ''
              }`}
            >
              <input
                type='radio'
                name='choes_info'
                value='How it tastes'
                checked={selectedOption === 'How it tastes'}
                onChange={handleInputChange}
              />
              How it tastes
            </label>
            <label
              className={`${styles.radio_label} ${
                selectedOption === 'Composition' ? styles.active : ''
              }`}
            >
              <input
                type='radio'
                name='choes_info'
                value='Composition'
                checked={selectedOption === 'Composition'}
                onChange={handleInputChange}
              />
              Composition
            </label>
          </div>
          <div
            className={`${styles.line_bottom_top} ${
              selectedOption === 'Composition' ? styles.transformed : ''
            }`}
          ></div>
          <div className={styles.line_bottom}></div>
        </div>
        <div className={styles.toggle__text}>
          {selectedOption === 'How it tastes'
            ? product.description ||
              product.taste ||
              'A flavorful blend of classic kombucha with exquisite herbs and plants.'
            : product.composition || 'Composition information not available'}
        </div>
      </div>

      <div className={styles.section_size}>
        <h4>Size</h4>
        <div className={styles.section_size__size}>
          {availableSizes.map(sizeOption => (
            <label
              key={sizeOption}
              className={`${styles.size} ${
                size === sizeOption ? styles.size_checked : ''
              }`}
            >
              <input
                type='radio'
                name='size'
                value={sizeOption}
                checked={size === sizeOption}
                onChange={handleInputSizeChange}
              />
              {sizeOption}
            </label>
          ))}
        </div>

        <h4>Bottle type</h4>
        <div className={styles.section_size__type}>
          {availableBottleTypes.map(typeOption => (
            <label
              key={typeOption}
              className={`${styles.type} ${
                bottleType === typeOption ? styles.bottleType_checked : ''
              }`}
            >
              <input
                type='radio'
                name='bottleType'
                value={typeOption}
                checked={bottleType === typeOption}
                onChange={handleInputBottleTypeChange}
              />
              {typeOption}
            </label>
          ))}
        </div>

        <div className={styles.section_size__count}>
          <div className={styles.section_size__count__count}>
            <button
              className={`${styles.button} ${count < 2 ? styles.dissable : ''}`}
              onClick={() => setCount(prev => Math.max(1, prev - 1))}
              disabled={count < 2}
            >
              -
            </button>
            <span>{count}</span>
            <button
              className={styles.button}
              onClick={() => setCount(prev => prev + 1)}
            >
              +
            </button>
          </div>
          <div className={styles.section_size__count__button}>
            <button onClick={handleAddToCart} disabled={!product.inStock}>
              <img src='./img/shopping_cart_one.svg' alt='Shopping cart' />
              Add to cart - ${totalPrice}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SaleSelection
