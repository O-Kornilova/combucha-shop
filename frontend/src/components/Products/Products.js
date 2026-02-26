import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'
import Button from '../Button/Button'
import styles from './Products.module.css'

const Products = ({ products, variant = 'catalog' }) => {
  const [visibleCount, setVisibleCount] = useState(4)

  if (!Array.isArray(products)) return null

  const isHomePage = variant === 'home'
  const displayedProducts = isHomePage
    ? products.slice(0, visibleCount)
    : products

  const hasMore = isHomePage && visibleCount < products.length

  const loadMore = () => {
    setVisibleCount(prev => prev + 4)
  }

  return (
    <div className={styles.main}>
      <section>
        <h3 className={styles.section_title}>
          Look, choose,
          <br />
          taste and
        </h3>
        <h3 className={styles.section_titleR}> enjoy!</h3>
      </section>
      <div
        className={`${styles.productsGrid} ${
          isHomePage ? styles.productsGridHome : ''
        }`}
      >
        {displayedProducts.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {isHomePage && (
        <div className={styles.buttonContainer}>
          <Link to='/catalog'>
            <Button className={styles.homeButtonW}>To Catalog</Button>
          </Link>

          {hasMore && (
            <Button onClick={loadMore} className={styles.homeButtonW}>
              Load more
            </Button>
          )}
        </div>
      )}
    </div>
  )
}

export default Products
