import API_BASE_URL from '../utils/config.js'
import { useEffect, useState } from 'react'
import Header from '../components/Header/Header.js'
import Products from '../components/Products/Products'
import axios from 'axios'
import FAQ from '../components/FAQ/FAQ.js'
import Feedback from '../components/Feedback/Feedback.js'
import HomeIntro from '../components/HomeIntro/HomeIntro.js'
import InfoSection from '../components/InfoSection/InfoSection.js'
import BlueSection from '../components/BlueSection/BlueSection.js'
import TasteText from '../components/TasteText/TasteText.js'
import Footer from '../components/Footer/Footer.js'

function HomePage () {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${API_BASE_URL}/api/products`)
        setProducts(data)
        setLoading(false)
      } catch (error) {
        console.error('Помилка при отриманні продуктів:', error)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading)
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '50vh',
          gap: '20px'
        }}
      >
        <div className='spinner'></div>
        <p>Loading products...</p>
        <p style={{ fontSize: '14px', color: '#666' }}>
          ⏳ Backend is warming up (free tier) — usually takes 30-60 seconds on
          first load
        </p>
      </div>
    )

  return (
    <div>
      <Header />
      <HomeIntro />
      <TasteText text='TASTE GOOD' />

      <InfoSection />

      <BlueSection />

      <section>
        <Products products={products} variant='home' />
      </section>
      <FAQ />
      <Feedback />
      <Footer />
    </div>
  )
}

export default HomePage
