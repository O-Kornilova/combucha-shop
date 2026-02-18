import React from 'react'
import styles from './Timeline.module.css'
import TimelineItem from './TimelineItem'
import KOMBUCHA_about_bg_1 from '../../assets/images/KOMBUCHA_about_bg_1.png'
import KOMBUCHA_about_bg_2 from '../../assets/images/KOMBUCHA_about_bg_2.png'
import KOMBUCHA_about_bg_3 from '../../assets/images/KOMBUCHA_about_bg_3.png'

const Timeline = () => {
  return (
    <div className={styles.timeline}>
      <TimelineItem
        title='Tasty alternative to alcohol'
        text='Kombucha can be a great alternative to alcoholic beverages. Due to its natural fermentation, kombucha has a light natural fizzy effect, giving you the opportunity to enjoy great flavors without the alcohol content.'
        bubble={KOMBUCHA_about_bg_1}
        align='right'
        titleClassName={styles.style2Title}
        textClassName={styles.style2Text}
      />
      <TimelineItem
        title='Energy boost for the whole day'
        text='Kombucha allows you to wake up feeling refreshed and more alert throughout the day without causing the unpleasant side effects associated with consuming large doses of caffeine.'
        bubble={KOMBUCHA_about_bg_2}
        align='left'
        titleClassName={styles.style2Title}
        textClassName={styles.style2Text}
      />
      <TimelineItem
        title='Maintaining a healthy weight'
        text='IIt contains less sugar and calories than many other popular drinks such as sodas or sugary juices. Replacing these high-calorie drinks with kambucha can help reduce your overall calorie intake and promote weight loss.'
        bubble={KOMBUCHA_about_bg_3}
        align='right'
        titleClassName={styles.style2Title}
        textClassName={styles.style2Text}
      />
    </div>
  )
}

export default Timeline
