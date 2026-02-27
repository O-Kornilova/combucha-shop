import API_BASE_URL from '../../utils/config'
import styles from './CartItem.module.css'
import DeleteIcon from '../../assets/icons/delete-icon.png'

export default function CartItem ({
  product,
  onIncrement,
  onDecrement,
  onRemove
}) {
  return (
    <div className={styles.cartItem}>
      <img
        src={
          product.images && product.images.length > 0
            ? product.images.find(img => img.isMain)?.url ||
              product.images[0].url
            : '/placeholder.png'
        }
        alt={product.name}
        className={styles.cartImage}
      />
      <div className={styles.cartDetails}>
        <h3 className={styles.productName}>{product.name}</h3>
        <div className={styles.quantity}>
          <button
            onClick={() => onDecrement(product._id)}
            className={styles.incBtn}
            disabled={product.count === 1}
          >
            <svg
              width='10'
              height='10'
              viewBox='0 0 10 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              {' '}
              <path
                d='M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z'
                fill='#fe1468'
              ></path>{' '}
              <path
                d='M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z'
                fill='#fe1468'
              ></path>{' '}
            </svg>
          </button>

          <span>{product.count}</span>

          <button
            onClick={() => onIncrement(product._id)}
            className={styles.decBtn}
          >
            <svg
              width='10'
              height='10'
              viewBox='0 0 10 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              {' '}
              <path
                d='M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z'
                fill='#fe1468'
              ></path>{' '}
              <path
                d='M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z'
                fill='#fe1468'
              ></path>{' '}
            </svg>
          </button>
        </div>
        <p className={styles.totalText}>
          Total: {product.price * product.count} UAH
        </p>
      </div>
      <button
        className={styles.removeBtn}
        onClick={() => onRemove(product._id)}
      >
        <img src={DeleteIcon} alt='Delete' />
      </button>
    </div>
  )
}
