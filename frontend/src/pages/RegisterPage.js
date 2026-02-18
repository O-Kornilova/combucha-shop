import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../api/authApi'
import styles from '../assets/styles/RegisterPage.module.css'

export default function RegisterPage () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/profile')
    }
  }, [navigate])

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    setIsLoading(true)
    try {
      // const userData = await register(name, email, password)
      const userData = await register({ name, email, password })

      if (!userData?.token) {
        throw new Error('Token not received')
      }
      localStorage.setItem('token', userData.token)
      setName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      navigate('/profile')
    } catch (err) {
      console.error('Registration error:', err)
      setError(err.response?.data?.message || 'Registration failed')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
        aria-labelledby='register-title'
      >
        <h2 id='register-title' className={styles.title}>
          Welcome in Kombucha World!
        </h2>
        <label htmlFor='name-input'>Name</label>
        <input
          id='name-input'
          type='text'
          placeholder='Name'
          value={name}
          onChange={e => {
            setName(e.target.value)
            setError('')
          }}
          required
          className={styles.input}
        />
        <label htmlFor='email-input'>Email</label>
        <input
          id='email-input'
          type='email'
          placeholder='Email'
          value={email}
          onChange={e => {
            setEmail(e.target.value)
            setError('')
          }}
          required
          className={styles.input}
        />
        <label htmlFor='password-input'>Password</label>
        <input
          id='password-input'
          type='password'
          placeholder='Password'
          value={password}
          onChange={e => {
            setPassword(e.target.value)
            setError('')
          }}
          required
          className={styles.input}
        />
        <label htmlFor='confirm-password-input'>Confirm Password</label>
        <input
          id='confirm-password-input'
          type='password'
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={e => {
            setConfirmPassword(e.target.value)
            setError('')
          }}
          required
          className={styles.input}
        />
        <button type='submit' disabled={isLoading} className={styles.button}>
          {isLoading ? 'Loading...' : 'Sign Up'}
        </button>
        {error && <p className={styles.error}>{error}</p>}
        <p>
          Already have an account? <Link to='/login'>Sign In</Link>
        </p>
      </form>
    </div>
  )
}
