import { useRef, useState } from 'react'
import { TiLocationArrow } from 'react-icons/ti'

import ProductCard from '../../features/ProductCard/ProductCard'

const BentoTilt = ({ children, className = '' }) => {
  const [transformStyle, setTransformStyle] = useState('')
  const itemRef = useRef()

  const handleMouseMove = _e => {
    if (!itemRef.current) return

    const { left, top, width, height } = itemRef.current.getBoundingClientRect()

    const relativeX = (_e.clientX - left) / width
    const relativeY = (_e.clientX - top) / height

    const tiltX = (relativeY - 0.5) * 5
    const tiltY = (relativeX - 0.5) * -5

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`
    setTransformStyle(newTransform)
  }

  const handleMouseLeave = e => {
    setTransformStyle('')
  }

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  )
}

const BentoCard = ({ src, title, description, isVideo = true }) => {
  const detectMediaType = src => {
    if (!src) return false
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi']
    return videoExtensions.some(ext => src.toLowerCase().includes(ext))
  }

  const shouldShowVideo = isVideo !== undefined ? isVideo : detectMediaType(src)

  return (
    <div className='relative size-full'>
      {shouldShowVideo ? (
        <video
          src={src}
          loop
          muted
          autoPlay
          className='absolute left-0 top-0 size-full object-cover object-center'
        />
      ) : (
        <img
          src={src}
          alt={title || 'Bento card image'}
          className='absolute left-0 top-0 size-full object-cover object-center'
        />
      )}

      <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
        <div>
          <h1 className='bento-title special-font'>{title}</h1>
          {description && <div className='mt-3 w-full text-xs md:text-base'>{description}</div>}
        </div>
      </div>
    </div>
  )
}

const Features = () => {
  const handleOrder = orderData => {
    console.log('Замовлення:', orderData)
    // Тут додам логіку відправки замовлення на сервер
    alert(
      `Дякуємо за замовлення!\n\nТовар: ${orderData.title}\nКількість: ${orderData.quantity} кг\nСума: ${orderData.totalPrice} ₴\n\nМи зв'яжемося з вами найближчим часом!`
    )
  }

  return (
    <section className='bg-black pb-52'>
      <div className='container mx-auto px-3 md:px-10'>
        <div className='px-5 py-32'>
          <p className='font-circular-web text-lg text-blue-50'>смачно і корисно</p>
          <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>
            Смачний акцент для ваших страв
          </p>
        </div>

        <BentoTilt className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
          <BentoCard
            src='img/fff.webp'
            isVideo={false}
            title={<>Фермерські гливи</>}
            description='Ніжні фермерські гливи для смачних і корисних страв. 
      Відкрий нові рецепти супів, закусок і гарнірів прямо на своїй кухні!'
          />
        </BentoTilt>

        <div className='grid min-h-screen grid-cols-1 md:grid-cols-2 auto-rows-auto gap-5'>
          <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
            <BentoCard
              title={<>Гливи — більше ніж просто гриб</>}
              description={
                <div className='grid md:grid-cols-1 gap-4 text-m'>
                  {/* Білок */}
                  <div className='flex flex-col items-center bg-gray-900 rounded-xl p-3'>
                    <div className='text-3xl mb-1'>🥩</div>
                    <h3 className='font-semibold'>Багато білку</h3>
                    <p className='text-gray-400 text-xs text-center'>
                      Альтернатива м’ясу для вегетаріанців.
                    </p>
                  </div>

                  {/* Вітаміни */}
                  <div className='flex flex-col items-center bg-gray-900 rounded-xl p-3'>
                    <div className='text-3xl mb-1'>💊</div>
                    <h3 className='font-semibold'>Вітаміни B</h3>
                    <p className='text-gray-400 text-xs text-center'>
                      Підтримка нервової системи та енергія.
                    </p>
                  </div>

                  {/* Імунітет */}
                  <div className='flex flex-col items-center bg-gray-900 rounded-xl p-3'>
                    <div className='text-3xl mb-1'>🛡️</div>
                    <h3 className='font-semibold'>Сильний імунітет</h3>
                    <p className='text-gray-400 text-xs text-center'>
                      Залізо та мікроелементи для захисту організму.
                    </p>
                  </div>
                </div>
              }
            />
          </BentoTilt>

          <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:ms-0'>
            <ProductCard
              src='img/mushroom-recipe.jpg'
              isVideo={false}
              pricePerKg={120}
              onOrder={handleOrder}
              title={<>Свіжі гливи</>}
              description='Найсвіжіші фермерські гливи прямо до вашого столу'
            />
          </BentoTilt>

          <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
            <ProductCard
              src='img/mushroom2.jpg'
              isVideo={false}
              pricePerKg={60}
              onOrder={handleOrder}
              title={<>Сушені гливи</>}
              description='Рішення для будь-яких несподіваних ситуацій'
            />
          </BentoTilt>

          <BentoTilt className='bento-tilt_2'>
            <div className='flex size-full flex-col justify-center bg-violet-300 p-5'>
              <h1 className='bento-title special-font w-full text-black'>
                Незабаром відкриття нашої кулінарної сторінки
              </h1>
              <TiLocationArrow className='m-5 scale-[5] self-end' />
            </div>
          </BentoTilt>

          <BentoTilt className='bento-tilt_2'>
            <BentoCard src='img/cooking-process.jpg' isVideo={false} />
          </BentoTilt>
        </div>
      </div>
    </section>
  )
}

export default Features
