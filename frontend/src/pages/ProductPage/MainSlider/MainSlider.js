import Slider from 'react-slick'
import styles from './MainSlider.module.css'

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

  if (!product) {
    return (
      <div className={styles.mainSliderBack}>
        <div>
          <img src='/placeholder.png' alt='Loading...' />
        </div>
      </div>
    )
  }

  const images =
    product.images && product.images.length > 0
      ? product.images.map(img => img.url)
      : ['/placeholder.png']

  return (
    <div className={styles.mainSliderBack}>
      {product.sale > 0 && (
        <div className={styles.sale}>
          Sale {Math.round(product.sale * 100)}%
        </div>
      )}

      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`${product.name} - ${index + 1}`}
              onError={e => {
                e.target.src = '/placeholder.png'
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default MainSlider
