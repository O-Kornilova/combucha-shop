import Slider from 'react-slick'
import ProductCard from '../../../components/ProductCard/ProductCard'
import styles from './SmalSlider.module.css'

const SmalSlider = ({ products }) => {
  const settings = {
    dots: true,
    arrows: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  if (!products || products.length === 0) return null

  return (
    <div className={styles.sliderWrapper}>
      <h2 className={styles.title}>Popular</h2>
      <Slider {...settings}>
        {products.map(product => (
          <div key={product._id} className={styles.cardWrapper}>
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SmalSlider
