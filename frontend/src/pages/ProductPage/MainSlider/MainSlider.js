import Slider from 'react-slick'
import styles from './MainSlider.module.css'
import API_BASE_URL from '../../../utils/config'

const MainSlider = ({ product }) => {
  const settings = {
    // dots: true,
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
          <img src='./img/placeholder.png' alt='Loading...' />
        </div>
      </div>
    )
  }

  // Формуємо масив зображень - основне + галерея (якщо є)
  const images = []

  if (product.image) {
    images.push(product.image)
  }

  if (product.gallery && Array.isArray(product.gallery)) {
    images.push(...product.gallery)
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
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.startsWith('http') ? image : `${API_BASE_URL}${image}`}
              alt={`${product.name} - ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default MainSlider
