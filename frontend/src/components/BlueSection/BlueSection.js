import React from 'react'
import styles from '../../assets/styles/HomePage.module.css'
import Section from '../Section/Section'
import Tbottle from '../../assets/images/tbottle.png'
import KOMBUCHA_about_bg_2 from '../../assets/images/KOMBUCHA_about_bg_2.png'
import littleBottle from '../../assets/images/01.png'
import Triple_bottle from '../../assets/images/Triple_bottle-removebg-preview.png'
import bottleFruits from '../../assets/images/bottleFruits.png'
import TimelineItem from '../Timeline/TimelineItem.js'
import timelineStyles from '../Timeline/Timeline.module.css'
import KOMBUCHArIGHT from '../../assets/images/KOMBUCHArIGHT.png'
import Arrow from '../../assets/images/vector/Arrow.png'
import Orange from '../../assets/images/orange.png'
import Gratefruit from '../../assets/images/grapefruit.png'

const BlueSection = () => {
  return (
    <Section>
      <div className={styles.sectionBlue}>
        <img src={Orange} alt='Orange' className={styles.imgBlue_little} />
        <img src={Gratefruit} alt='Gratefruit' className={styles.imgBlue_big} />

        <p className={styles.sectionBlue_p1}>Revitalize</p>
        <p className={styles.sectionBlue_p2}>
          Your
          <br /> Body
        </p>
        <p className={styles.sectionBlue_p1}>with Kombucha</p>
        <p className={styles.sectionBlue_p3}>AND Choose</p>
        <div>
          <img
            src={KOMBUCHArIGHT}
            alt='KOMBUCHArIGHT'
            className={styles.spot}
          />

          <div className={styles.spot_sec}>
            <p className={styles.spot_p}>
              Future
              <br /> Favorite
              <br /> Drink
            </p>
            <img className={styles.spot_arrow} src={Arrow} alt='' />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default BlueSection
