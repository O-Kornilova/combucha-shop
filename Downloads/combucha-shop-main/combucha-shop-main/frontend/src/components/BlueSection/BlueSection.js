import React from 'react'
import styles from '../../assets/styles/HomePage.module.css'
import KOMBUCHArIGHT from '../../assets/images/KOMBUCHArIGHT.png'
import Arrow from '../../assets/images/vector/Arrow.png'
import Orange from '../../assets/images/orange.png'
import Gratefruit from '../../assets/images/grapefruit.png'

const BlueSection = () => {
  return (
    <section className={styles.sectionBlue}>
      <img src={Orange} alt='Orange' className={styles.imgBlue_little} />
      <img src={Gratefruit} alt='Gratefruit' className={styles.imgBlue_big} />

      <p className={styles.sectionBlue_p1}>Revitalize</p>
      <p className={styles.sectionBlue_p2}>
        Your
        <br /> Body
      </p>
      <p className={styles.sectionBlue_p1}>
        with <br />
        Kombucha
      </p>
      <p className={styles.sectionBlue_p3}>
        AND <br />
        Choose
      </p>
      <div style={{ position: 'relative' }}>
        <img src={KOMBUCHArIGHT} alt='KOMBUCHArIGHT' className={styles.spot} />

        <p className={styles.spot_p}>
          Future
          <br />
          Favorite
          <br />
          Drink
        </p>
        <img className={styles.spot_arrow} src={Arrow} alt='' />
      </div>
    </section>
  )
}

export default BlueSection
