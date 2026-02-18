import { useSelector, useDispatch } from 'react-redux'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CartEmpty from '../../components/CartEmpty'
import {
  removeItem,
  incrementCount,
  decrementCount,
  clearCart
} from '../../store/slices/cart/slice'
import CartItem from '../../components/Cart/CartItem'
import styles from './CartPage.module.css'
import Button from '../../components/Button/Button'

export default function CartPage () {
  const dispatch = useDispatch()
  const { products, totalPrice } = useSelector(state => state.cart)

  const handleIncrement = id => dispatch(incrementCount(id))
  const handleDecrement = id => dispatch(decrementCount(id))
  const handleRemove = id => dispatch(removeItem(id))
  const handleClear = () => dispatch(clearCart())

  return (
    <div>
      <Header />

      <div className={styles.cartContainer}>
        {products.length === 0 ? (
          <CartEmpty />
        ) : (
          <>
            <div className={styles.cartTop}>
              <h2 className={styles.cartTitle}>🛒 Кошик</h2>
              <button className={styles.iconBtn} onClick={handleClear}>
                Clear кошик
              </button>
            </div>

            {products.map(product => (
              <CartItem
                key={product._id}
                product={product}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onRemove={handleRemove}
              />
            ))}

            <div className={styles.total}>
              <h3 className={styles.totalText}>
                Total price:{' '}
                <span className={styles.highlight}>{totalPrice} UAH</span>
              </h3>
              <Button className={styles.homeButton}>Pay</Button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  )
}
