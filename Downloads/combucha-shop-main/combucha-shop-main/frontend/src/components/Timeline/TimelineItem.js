import styles from './Timeline.module.css'

const TimelineItem = ({
  title,
  text,
  bubble,
  align = 'left',
  className,
  titleClassName,
  textClassName
}) => {
  return (
    <div className={`${styles.item} ${styles[align]} ${className || ''}`}>
      <div className={styles.content}>
        <div
          className={styles.bubble}
          style={{ backgroundImage: `url(${bubble})` }}
        >
          <h4 className={titleClassName ? titleClassName : ''}>{title}</h4>
        </div>
        <p className={textClassName ? textClassName : ''}>{text}</p>
      </div>
    </div>
  )
}
export default TimelineItem
