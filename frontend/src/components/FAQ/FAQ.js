import React, { useState } from 'react'
import styles from './FAQ.module.css'

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.faqItem}>
      <div className={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <span className={`${styles.faqIcon} ${isOpen ? styles.open : ''}`}>
          +
        </span>
      </div>
      <div className={`${styles.faqAnswer} ${isOpen ? styles.show : ''}`}>
        {answer}
      </div>
    </div>
  )
}

const FAQ = () => {
  const data = [
    {
      q: 'What is Kombucha?',
      a: 'Kombucha is a naturally fermented tea beverage that contains probiotics, organic acids, and antioxidants. It has a tangy, refreshing taste and is valued for its potential health benefits.'
    },
    {
      q: 'Is your kombucha organic?',
      a: 'Yes! We brew our kombucha only with certified organic teas, herbs, fruits, and natural sweeteners—no artificial flavors, preservatives, or additives.'
    },
    {
      q: 'How should I store kombucha?',
      a: 'Kombucha should always be stored in the refrigerator. Keeping it cold slows down the fermentation process and preserves its fresh, crisp flavor.'
    },
    {
      q: 'What’s so special about raw kombucha?',
      a: 'Raw kombucha is unpasteurized, which means it still contains live probiotics, enzymes, and beneficial bacteria. These living cultures support gut health and digestion.'
    },
    {
      q: 'Is there caffeine in kombucha?',
      a: 'Yes, but only in small amounts. Since kombucha is brewed from tea, it contains trace levels of caffeine—usually much less than a cup of green or black tea.'
    },
    {
      q: 'Is your kombucha raw (unpasteurized)?',
      a: 'Yes, our kombucha is completely raw and never pasteurized, so you get the maximum benefits from live probiotics and natural fermentation.'
    },
    {
      q: 'What’s the deal with sugar and kombucha?',
      a: 'Sugar is necessary for the fermentation process—yeast and bacteria consume most of it during brewing. The final drink has only a small, natural sweetness left.'
    },
    {
      q: 'Is kombucha organic? How about non-GMO? Gluten-free?',
      a: 'Our kombucha is 100% organic, made with non-GMO ingredients, and naturally gluten-free. It’s a clean, wholesome beverage for almost any lifestyle.'
    },
    {
      q: 'Does kombucha contain alcohol?',
      a: 'Kombucha naturally produces trace amounts of alcohol during fermentation—typically less than 0.5%, similar to a ripe banana or fresh juice.'
    },
    {
      q: 'Should I keep my kombucha cold?',
      a: 'Yes, always! Refrigeration keeps the flavor balanced and prevents over-fermentation. Kombucha left warm may become too fizzy or sour.'
    }
  ]

  return (
    <section className={styles.faqSection}>
      <h3 className={styles.section_title}>Find Your Answers Here</h3>
      <p className={styles.section_text}>
        Everything you’d ever want to know about our organic raw kombucha
      </p>

      <div className={styles.faqList}>
        {data.map((item, idx) => (
          <FAQItem key={idx} question={item.q} answer={item.a} />
        ))}
      </div>
    </section>
  )
}

export default FAQ
