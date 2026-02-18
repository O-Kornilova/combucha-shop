import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../api/authApi'
import styles from '../assets/styles/LoginPage.module.css'

export default function LoginPage () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // const userData = await login(email, password)
  //     const userData = await login({ email, password });
  //     localStorage.setItem("token", userData.token);
  //     navigate("/profile");
  //   } catch (err) {
  //     setError("Invalid email or password");
  //   }
  // };

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const userData = await login({ email, password })

      // Сохраняем токен и пользователя
      localStorage.setItem('token', userData.token)
      localStorage.setItem('user', JSON.stringify(userData))

      // Редирект по роли
      if (userData.isAdmin) {
        navigate('/admin/')
      } else {
        navigate('/profile')
      }
    } catch (err) {
      setError('Invalid email or password')
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Enter Your Kombucha World: Sign In</h2>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className={styles.input}
        />
        <button type='submit' className={styles.button}>
          Login
        </button>
        {error && <p className={styles.error}>{error}</p>}

        <p>
          Don't have an account yet? <Link to='/register'>Register</Link>
        </p>
      </form>
    </div>
  )
}
