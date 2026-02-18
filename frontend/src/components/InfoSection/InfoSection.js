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

const InfoSection = () => {
  return (
    <Section>
      <div>
        <div className={styles.section}>
          <h3 className={styles.section_title}>
            Why you should try OUR KOMBUCHA
          </h3>
          <img src={Tbottle} alt='3bottle' className={styles.section_Center} />
          <p className={styles.imgLeft_title}>A modern taste from childhood</p>
          <p className={styles.imgLeft_text}>
            Kombucha is a delicious drink with a unique flavor unlike anything
            else on the beverage aisle. Try out different varieties to find your
            sweet spot. With hundreds of craft brewers, there’s a kombucha for
            everyone.
          </p>
          <div className={styles.pics}>
            <img
              src={Triple_bottle}
              alt='Triple_bottle-removebg-preview'
              className={styles.picBotton}
            />
          </div>
          <div className={styles.pics}>
            <img
              src={littleBottle}
              alt='littleBottle'
              className={styles.picLittleLeft}
            />
            <TimelineItem
              className={styles.LittleRight}
              title='Unleash the Benefits'
              text='Our Kambucha promotes enhanced digestion, antibacterial protection, and Iimmune system support.'
              bubble={KOMBUCHA_about_bg_2}
              align='right'
              titleClassName={timelineStyles.style1Title}
              textClassName={timelineStyles.style1Text}
            />
          </div>
        </div>
        <img
          src={bottleFruits}
          alt='bottleFruits'
          className={styles.picBotton}
        />{' '}
      </div>
    </Section>
  )
}

export default InfoSection
