import API_BASE_URL from '../utils/config'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header/Header'
import Products from '../components/Products/Products'
import styles from '../assets/styles/Catalog.module.css'

const Catalog = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${API_BASE_URL}/api/products`)
        setProducts(data)
        setLoading(false)
      } catch (error) {
        console.error('Ошибка при получении продуктов:', error)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) return <p>Загрузка продуктів...</p>

  return (
    <div className={styles.catalogContainer}>
      <Header />
      <Products products={products} />
    </div>
  )
}

export default Catalog
