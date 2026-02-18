import React from 'react'
import styles from '../../assets/styles/HomePage.module.css'
import mainImg from '../../assets/images/bottle_fly.gif'
import Group_1 from '../../assets/images/Group_1.png'
import Group_2 from '../../assets/images/Group_2.png'
import Rectangle from '../../assets/images/Rectangle.png'
import KOMBUCHA from '../../assets/images/KOMBUCHA.png'
import pngwing from '../../assets/images/pngwing.png'
import Bottle from '../../assets/images/bottle.png'
import Flowers from '../../assets/images/Flowers.png'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import Timeline from '../Timeline/Timeline'
import Section from '../Section/Section'

const HomeIntro = () => {
  return (
    <Section>
      <div className={styles.homeHead}>
        <h4 className={styles.homeTitle4}>BaraShop</h4>
        <h1 className={styles.homeTitle1}>KOMBUCHA</h1>
        <h5 className={styles.homeTitle5}>
          Enjoy the many different <br /> flavors with health benefits
        </h5>
        <Link to={`/catalog`}>
          <Button className={styles.homeButton}>Catalog</Button>
        </Link>

        <div>
          <img src={mainImg} alt='main_theme' className={styles.mainImg} />
        </div>

        <h6 className={styles.homeTitle6}>
          Learn more about the properties of <br /> fruit-flavored probiotics
        </h6>
        <div className={styles.pics}>
          <img
            src={Group_1}
            alt='Опис зображення'
            className={styles.section_imgHalf}
          />
          <img
            src={Group_2}
            alt='Опис зображення'
            className={styles.section_imgHalf}
          />
        </div>
        <div className={styles.section}>
          <h3 className={styles.section_title}>What is kombucha</h3>
          <p className={styles.section_text}>
            Kombucha is a naturally fermented beverage made from tea and sugar.
            Fermentation results in a special culture of probiotics and enzymes.
          </p>
          <div className={styles.position_img}>
            <img
              src={Rectangle}
              alt='Rectangle'
              className={styles.section_Rectangle}
            />
          </div>
          <p className={styles.section_textt}>
            Contains antioxidants that your body will benefit from helps to keep
            you energized and{' '}
            <span className={styles.pink}>fresh after a busy day.</span>
          </p>
        </div>
        <div className={styles.pics2}>
          <img
            src={KOMBUCHA}
            alt='Опис зображення'
            className={styles.picBotton1}
          />
          <img
            src={pngwing}
            alt='Опис зображення'
            className={styles.picBotton2}
          />
        </div>
        <div className={styles.sectionFluent}>
          <h3 className={styles.section_title}>Feel charge of health</h3>
          <img src={Bottle} alt='Bottle' className={styles.picBotton} />
          <h3 className={styles.section_titleSec}>
            That kambucha gives to you
          </h3>
          <Timeline />
          <div>
            <img
              src={Flowers}
              alt='Flowers'
              className={styles.section_imgLeft}
            />

            <p className={styles.imgLeft_title}>Kambucha makes your holiday</p>
            <p className={styles.imgLeft_text}>
              Embrace the Vibrant Holiday Experience with Kambucha's Unmatched
              Taste, Energy, and Healthy Lifestyle Benefits!
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default HomeIntro
