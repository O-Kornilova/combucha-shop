import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Search } from 'lucide-react'
import avatar from '../../assets/images/ava.webp'
import cartIcon from '../../assets/images/shopping-cart-one-pink.png'
import styles from './Header.module.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { products } = useSelector(state => state.cart)
  const cartCount = products.reduce((sum, p) => sum + p.count, 0)
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <header className={styles.header}>
      <div className={styles.menuContainer}>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={styles.menuButton}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        {menuOpen && (
          <nav className={styles.nav}>
            <a href='#benefits' className={styles.navLink}>
              Benefits
            </a>
            <a href='#catalog' className={styles.navLink}>
              Catalog
            </a>
            <a href='#answers' className={styles.navLink}>
              Answers
            </a>
          </nav>
        )}
      </div>

      {user ? (
        <Link to='/profile'>
          <img
            src={user.avatar || avatar}
            alt={`${user.name || 'User'}'s avatar`}
            className={styles.avatar}
          />
        </Link>
      ) : (
        <img src={avatar} alt="User's avatar" className={styles.avatar} />
      )}

      <div className={styles.rightIcons}>
        <Search size={24} className={styles.searchIcon} />
        <Link to='/cart' className={styles.cartWrapper}>
          <img src={cartIcon} alt='Cart' className={styles.cartIcon} />
          {cartCount > 0 && (
            <span className={styles.cartBadge}>{cartCount}</span>
          )}
        </Link>
      </div>
    </header>
  )
}

export default Header
