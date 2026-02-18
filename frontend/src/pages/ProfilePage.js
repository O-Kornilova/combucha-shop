import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProfile } from '../api/authApi'
import styles from '../assets/styles/ProfilePage.module.css'
import avatar from '../assets/images/ava.webp'

export default function ProfilePage () {
  const [user, setUser] = useState(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProfile = async () => {
      if (!token) {
        navigate('/login')
        return
      }
      setIsLoading(true)
      try {
        const data = await getProfile(token)
        setUser(data)
        setError('')
      } catch (err) {
        console.error('Profile fetch error:', err)
        setError(err.response?.data?.message || 'Failed to load profile')
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }
    fetchProfile()
  }, [token, navigate])

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  if (isLoading) {
    return <p className={styles.loading}>Loading...</p>
  }

  if (error) {
    return (
      <div className={styles.container}>
        <p className={styles.error}>{error}</p>
        <button onClick={handleLogout} className={styles.button}>
          Sign Out
        </button>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.profileGrid}>
        <div className={styles.leftColumn}>
          <h2 className={styles.name}>{user.name}</h2>
          <img
            src={user.avatar || avatar}
            alt={`${user.name}'s avatar`}
            className={styles.avatar}
          />
        </div>
        <div className={styles.rightColumn}>
          <p className={styles.info}>Email: {user.email}</p>
          <p className={styles.info}>Admin: {user.isAdmin ? 'Yes' : 'No'}</p>
          <button onClick={handleLogout} className={styles.button}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}
