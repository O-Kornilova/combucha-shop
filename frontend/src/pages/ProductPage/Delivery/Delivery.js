import styles from './Delivery.module.css'
const Delivery = () => {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div>Delivery</div>
        <div>
          We will send it <br />
          <span>tomorrow at 11:00</span>
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.info__line}>
          <div className={styles.left}>
            <img src='/img/delivery.svg' alt='delivery' />
            Courier delivery
          </div>
          <div className={styles.right}>
            <p>$2 -$5</p>
            <p>According to the delivery service tariffs</p>
          </div>
        </div>
        <div className={styles.info__line}>
          <div className={styles.left}>
            <img src='/img/box.svg' alt='box' />
            Self-delivery from postal operator offices
          </div>
          <div className={styles.right}>
            <p>$1 -$3</p>
            <p>According to the delivery service tariffs</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Delivery
