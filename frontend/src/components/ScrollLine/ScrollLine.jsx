import { useEffect, useRef } from 'react'
import styles from './ScrollLine.module.css'

const ScrollLine = () => {
  const pathRef = useRef(null)

  useEffect(() => {
    const path = pathRef.current
    if (!path) return

    // Отримуємо довжину path
    const pathLength = path.getTotalLength()

    // Встановлюємо початкові значення
    path.style.strokeDasharray = pathLength
    path.style.strokeDashoffset = pathLength

    const handleScroll = () => {
      const scrollPercentage =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)

      // Малюємо лінію при скролі вниз
      const drawLength = pathLength * (1 - scrollPercentage)
      path.style.strokeDashoffset = drawLength
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <svg
      className={styles.scrollLine}
      width='322'
      height='1778'
      viewBox='0 0 322 1778'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        ref={pathRef}
        d='M-2 1777C59 1759.5 224.235 1716.68 91.5 1690.5C-41.2351 1664.32 343.289 1371.35 192 1286C150.626 1262.66 149.445 1183.82 117.5 1130.5C93.2379 1090 30.5594 1025.28 39 987.5C55.4447 913.901 118.967 948.964 139.5 917.5C202.405 821.102 225.943 718.629 78.0002 674.5C-38.9122 639.627 326.827 492.132 139.5 459C-47.8268 425.867 27.6939 156.943 210 169.5C392.306 182.057 297.138 79.8854 287 0.5'
        stroke='#72777B'
        strokeWidth='2'
        fill='none'
      />
    </svg>
  )
}

export default ScrollLine
