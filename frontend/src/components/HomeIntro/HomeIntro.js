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
import ArrowCircle from '../../assets/images/arrow-circle-down.png'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import Timeline from '../Timeline/Timeline'

const HomeIntro = () => {
  return (
    <section className={styles.homeHead} style={{ position: 'relative' }}>
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
      <div>
        <img src={ArrowCircle} alt='Опис зображення' id='scroll-start' />
      </div>
      <div style={{ position: 'relative' }}>
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
          <h3 className={styles.section_title}>
            What is <br />
            kombucha
          </h3>
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
        <svg
          className={styles.decorativeSvg}
          width='211'
          height='586'
          viewBox='0 0 211 586'
          fill='none'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M157.719 0.138012C156.631 30.5216 150.647 51.4704 141.848 66.4677C131.004 84.9518 115.823 94.4964 99.9824 101.509C94.3634 103.997 88.684 106.157 83.0789 108.289L83.0774 108.289C81.9605 108.714 80.8465 109.138 79.7365 109.563L78.817 111.63C80.3988 111.02 81.9953 110.413 83.6018 109.802L83.6052 109.801C89.2267 107.663 94.9699 105.478 100.63 102.972C116.63 95.8887 132.148 86.1637 143.228 67.2774C152.218 51.955 158.249 30.6694 159.325 0C158.767 0.0486077 158.232 0.0945896 157.719 0.138012ZM49.8361 208.405L49.1087 209.83C54.185 212.572 59.9414 214.73 66.1643 216.456C78.6902 219.929 93.1971 221.674 108.044 222.858C114.942 223.408 121.924 223.838 128.821 224.262L128.822 224.262L130.404 224.359C137.818 224.816 145.118 225.277 152.114 225.887C166.118 227.107 178.831 228.918 188.71 232.449C198.59 235.979 205.482 241.17 208.114 249.054C210.757 256.97 209.193 267.851 201.525 282.966C195.544 294.756 185.892 309.037 171.787 326.365L172.729 326.573C172.113 327.444 172.002 328.043 172.18 328.413C186.79 310.565 196.784 295.85 202.952 283.69C210.688 268.441 212.478 257.073 209.632 248.547C206.774 239.989 199.335 234.546 189.249 230.942C179.162 227.338 166.275 225.515 152.252 224.293C145.234 223.681 137.915 223.219 130.503 222.762L128.926 222.665C122.024 222.241 115.055 221.812 108.171 221.263C93.3474 220.081 78.9651 218.345 66.5918 214.914C60.4243 213.204 54.7786 211.078 49.8361 208.405ZM17.7716  '
            fill='#FE1468'
          />
        </svg>
        <svg
          className={styles.decorativeSvg2}
          width='233'
          height='280'
          viewBox='0 0 233 280'
          fill='none'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M230.047 6.60734C229.42 5.11267 228.132 3.29515 226.036 1.1067L227.192 0C229.346 2.24905 230.785 4.2323 231.522 5.98837C232.267 7.76329 232.318 9.37828 231.571 10.7706C230.843 12.1262 229.442 13.1079 227.642 13.8378C225.831 14.5722 223.514 15.0939 220.8 15.4632C212.033 16.6564 198.622 16.3144 183.404 15.9263C179.847 15.8356 176.191 15.7424 172.473 15.6657C152.784 15.2594 131.262 15.3094 112.989 18.5675C94.6732 21.8331 79.8824 28.2772 73.318 40.4335L71.9102 39.6732C78.8458 26.8295 94.305 20.2736 112.708 16.9923C131.154 13.7035 152.819 13.6598 172.506 14.066C176.263 14.1435 179.945 14.2372 183.518 14.3282C198.727 14.7151 211.958 15.0518 220.584 13.8778C223.238 13.5167 225.407 13.0179 227.041 12.3551C228.686 11.6878 229.688 10.8956 230.161 10.0138C230.615 9.16884 230.666 8.08315 230.047 6.60734ZM0.958768 189.586C3.06158 179.531 8.72562 166.666 18.9332 150.133L20.2946 150.974C10.1271 167.441 4.57243 180.123 2.52489 189.913C0.481341 199.685 1.94423 206.495 5.70729 211.352C9.49601 216.243 15.7295 219.305 23.5483 221.313C31.3577 223.317 40.6261 224.24 50.3591 224.943C52.9136 225.127 55.5006 225.297 58.0996 225.467C65.3767 225.944 72.7481 226.426 79.7626 227.264C89.2837 228.401 98.237 230.2 105.52 233.569C112.822 236.948 118.489 241.927 121.336 249.425C124.173 256.899 124.159 266.748 120.382 279.776L118.846 279.331C122.57 266.484 122.508 257.02 119.84 249.993C117.18 242.988 111.883 238.276 104.848 235.022C97.7958 231.759 89.0421 229.983 79.5729 228.853C72.6045 228.021 65.2973 227.542 58.0336 227.066C55.4255 226.895 52.823 226.725 50.2439 226.539C40.5082 225.836 31.1124 224.906 23.1504 222.862C15.1976 220.821 8.55221 217.637 4.44245 212.332C0.307058 206.994 -1.14805 199.66 0.958768 189.586Z'
            fill='#FE1468'
          />
        </svg>
      </div>
      <div style={{ position: 'relative' }}>
        <div className={styles.sectionFluent}>
          <h3 className={styles.section_title}>
            Feel charge <br />
            of health
          </h3>
          <img src={Bottle} alt='Bottle' className={styles.picBotton} />
          <h3 className={styles.section_titleSec}>
            That <br />
            kambucha <br />
            gives <br />
            to you
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
        <svg
          className={styles.decorativeSvg3}
          viewBox='0 0 236 1274'
          preserveAspectRatio='none'
          fill='none'
        >
          {/* Лінія 1 */}
          <path
            d='M60.5321 0.326538C-10.468 205.827 358.532 97.8265 190.032 314.827'
            stroke='url(#paint1_linear_0_1)'
            strokeWidth='2'
          />

          {/* Лінія 2 (з розривом) */}
          <path
            d='M57.032 391.327C-92.468 506.827 108.673 519.827 62.6731 594.827M179.764 1089.83C245.264 1165.33 64.7639 1097.83 98.7639 1273.33'
            stroke='url(#paint3_linear_0_1)'
            strokeWidth='1.6'
          />

          {/* Лінія 3 */}
          <path
            d='M23.8754 798.827C-26.6245 887.827 54.3755 838.327 72.3755 885.327'
            stroke='url(#paint5_linear_0_1)'
            strokeWidth='1.6'
          />

          <defs>
            <linearGradient
              id='paint1_linear_0_1'
              x1='342.901'
              y1='-96.4281'
              x2='191.812'
              y2='526.296'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FE1468' />
              <stop offset='1' stopColor='#F992B7' />
            </linearGradient>
            <linearGradient
              id='paint3_linear_0_1'
              x1='287.652'
              y1='83.9247'
              x2='-560.92'
              y2='1227.72'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FE1468' />
              <stop offset='1' stopColor='#F992B7' />
            </linearGradient>
            <linearGradient
              id='paint5_linear_0_1'
              x1='200.744'
              y1='763.073'
              x2='166.607'
              y2='999.308'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FE1468' />
              <stop offset='1' stopColor='#F992B7' />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}

export default HomeIntro
