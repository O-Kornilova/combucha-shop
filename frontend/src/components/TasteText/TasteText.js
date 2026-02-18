import React from 'react'
import styles from './TasteText.module.css'

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}

const TasteText = ({ text = 'TASTE GOOD ' }) => {
  const repeatedText = `${text} `.repeat(10)

  return (
    <div className={styles.Taste}>
      <div className={styles.track}>
        <div className={styles.content}>{repeatedText}</div>
        <div className={styles.content}>{repeatedText}</div>
      </div>
    </div>
  )
}

export default TasteText
