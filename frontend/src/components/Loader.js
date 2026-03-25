import { useEffect, useState } from 'react'

const Loader = ({ message = 'Loading...' }) => {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const progress = Math.min((seconds / 60) * 100, 95)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        gap: '20px',
        padding: '20px',
        fontFamily: 'Nunito, sans-serif'
      }}
    >
      <div
        style={{
          width: '60px',
          height: '60px',
          border: '5px solid #ffb6d0',
          borderTop: '5px solid #fe1468',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}
      />

      <p style={{ fontSize: '18px', fontWeight: '700', color: '#343a40' }}>{message}</p>

      {seconds >= 3 && (
        <>
          <p style={{ fontSize: '14px', color: '#868e96', textAlign: 'center', maxWidth: '280px' }}>
            ⏳ Бекенд на безкоштовному хостингу — перший запуск займає до 60 секунд
            <br />
            <span style={{ color: '#adb5bd' }}>
              ⏳ Backend is on a free tier — first load may take up to 60 seconds
            </span>
          </p>
          <div
            style={{
              width: '260px',
              height: '8px',
              backgroundColor: '#ffb6d0',
              borderRadius: '4px',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${progress}%`,
                backgroundColor: '#fe1468',
                borderRadius: '4px',
                transition: 'width 1s ease'
              }}
            />
          </div>
          <p style={{ fontSize: '13px', color: '#adb5bd' }}>{seconds}s...</p>
        </>
      )}
    </div>
  )
}

export default Loader
