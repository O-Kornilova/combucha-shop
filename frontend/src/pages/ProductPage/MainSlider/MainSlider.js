import Slider from 'react-slick'
import styles from './MainSlider.module.css'
import API_BASE_URL from '../../../utils/config'

const MainSlider = ({ product }) => {
  const settings = {
    arrows: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0
  }

  // Якщо немає продукта, показуємо заглушку
  if (!product) {
    return (
      <div className={styles.mainSliderBack}>
        <div>
          <img src='/placeholder.png' alt='Loading...' />
        </div>
      </div>
    )
  }

  // Формуємо масив зображень - основне + галерея (якщо є)
  const images = []

  if (product.image) {
    images.push(product.image.replace(/\\/g, '/'))
  }

  if (product.gallery && Array.isArray(product.gallery)) {
    images.push(...product.gallery.map(img => img.replace(/\\/g, '/')))
  }

  // Якщо немає зображень, використовуємо placeholder
  if (images.length === 0) {
    images.push('/placeholder.png')
  }

  return (
    <div className={styles.mainSliderBack}>
      {product.sale && product.sale > 0 && (
        <div className={styles.sale}>
          Sale {Math.round(product.sale * 100)}%
        </div>
      )}

      <Slider {...settings}>
        {images.map((image, index) => {
          // Placeholder завжди з frontend, решта з бекенду
          const imageUrl =
            image === '/placeholder.png'
              ? '/placeholder.png'
              : image.startsWith('http')
              ? image
              : `${API_BASE_URL}${image}`

          return (
            <div key={index}>
              <img
                src={imageUrl}
                alt={`${product.name} - ${index + 1}`}
                onError={e => {
                  e.target.src = '/placeholder.png'
                }}
              />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default MainSlider
