import API_BASE_URL from '../../utils/config'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../../store/slices/cart/slice'
import vector from '../../assets/images/vector/Vector.png'
import styles from './Product.module.css'
import Button from '../Button/Button'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const {
    _id,
    name,
    images = [],
    volume,
    taste,
    price,
    sale = 0,
    currency = 'UAH',
    color
  } = product

  const handleAddToCart = e => {
    e.preventDefault()
    dispatch(addItem(product))
  }

  const mainImage =
    images.find(img => img.isMain)?.url || images[0]?.url || '/placeholder.png'

  return (
    <Link to={`/card/${_id}`} className={styles.product}>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          {color && (
            <div className={styles.color} style={{ backgroundColor: color }}>
              {sale > 0 && (
                <div className={styles.sale}>
                  SALE -{Math.round(sale * 100)}%
                </div>
              )}
            </div>
          )}
          <img className={styles.image} src={mainImage} alt={name} />
          <div className={styles.applauseMain}>
            <div className={styles.filter}>Rating:</div>
            <div className={styles.applause}>
              <div className={styles.rating}>N/A</div>
              <img src={vector} alt='applause' className={styles.svg} />
            </div>
          </div>
        </div>
        <h3 className={styles.title}>{name}</h3>
        <div className={styles.attribute}>
          <div className={styles.filter}>Size:</div>
          <div className={styles.filterAtt}>{volume || 'N/A'} l</div>
        </div>
        <div className={`${styles.attribute} ${styles.addattribute}`}>
          <div className={styles.filter}>Taste:</div>
          <div className={styles.filterAtt}>
            {Array.isArray(taste) ? taste.join(', ') : 'N/A'}
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.prices}>
            <div className={styles.price}>
              {price} {currency}
            </div>
            {sale > 0 && (
              <div className={styles.oldPrice}>
                {(price / (1 - sale)).toFixed(2)} {currency}
              </div>
            )}
          </div>
          <Button onClick={handleAddToCart}>Add to cart</Button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
