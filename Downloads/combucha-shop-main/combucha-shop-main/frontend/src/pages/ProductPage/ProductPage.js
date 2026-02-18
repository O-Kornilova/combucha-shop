import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import MainSlider from './MainSlider/MainSlider'
import SaleSelection from './SaleSelection/SaleSelection'
import Delivery from './Delivery/Delivery'
import SmalSlider from './SmalSlider/SmalSlider'
import API_BASE_URL from '../../utils/config'
import styles from './ProductPage.module.css'

function ProductPage () {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const res = await fetch(`${API_BASE_URL}/api/products/${id}`)
        if (!res.ok) throw new Error('Продукт не знайдений')
        const data = await res.json()
        setProduct(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (id) fetchProduct()
  }, [id])

  if (loading)
    return (
      <div className={styles.Card_big}>
        <Header />
        <div style={{ padding: '50px', textAlign: 'center' }}>Loading...</div>
      </div>
    )

  if (error)
    return (
      <div className={styles.Card_big}>
        <Header />
        <div style={{ padding: '50px', textAlign: 'center' }}>
          Error: {error}
        </div>
      </div>
    )

  if (!product)
    return (
      <div className={styles.Card_big}>
        <Header />
        <div style={{ padding: '50px', textAlign: 'center' }}>
          Продукт не знайдений
        </div>
      </div>
    )

  return (
    <div className={styles.Card_big}>
      <Header />
      <MainSlider product={product} />
      <SaleSelection product={product} />
      <Delivery />
      <SmalSlider product={product} />
    </div>
  )
}

export default ProductPage
