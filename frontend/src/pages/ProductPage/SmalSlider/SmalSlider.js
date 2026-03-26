import Slider from 'react-slick'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItem } from '../../../store/slices/cart/slice'
import styles from './SmalSlider.module.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MiniCard = ({ product }) => {
  const dispatch = useDispatch()
  const { _id, name, images = [], price, currency = 'UAH' } = product
  const mainImage = images.find(img => img.isMain)?.url || images[0]?.url || '/placeholder.png'

  return (
    <Link to={`/card/${_id}`} className={styles.card}>
      <img src={mainImage} alt={name} className={styles.cardImg} />
      <p className={styles.cardName}>{name}</p>
      <div className={styles.cardBottom}>
        <span className={styles.cardPrice}>
          {price} {currency}
        </span>
        <button
          className={styles.cardBtn}
          onClick={e => {
            e.preventDefault()
            e.stopPropagation()
            dispatch(addItem(product))
          }}
        >
          + Cart
        </button>
      </div>
    </Link>
  )
}

const SmalSlider = ({ products }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 480, settings: { slidesToShow: 1 } }]
  }

  if (!products || products.length === 0) return null

  return (
    <div className={styles.sliderWrapper}>
      <h2 className={styles.title}>Popular</h2>
      <Slider {...settings}>
        {products.map(product => (
          <div key={product._id} className={styles.slideItem}>
            <MiniCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SmalSlider
