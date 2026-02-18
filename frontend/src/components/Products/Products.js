import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import styles from './Products.module.css'

const Products = ({ products, variant = 'catalog' }) => {
  if (!Array.isArray(products)) return null

  return (
    <div
      className={`${styles.productsGrid} ${
        variant === 'home' ? styles.productsGridHome : ''
      }`}
    >
      {products.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  )
}

export default Products
