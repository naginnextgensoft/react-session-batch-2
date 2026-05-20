import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Lock, User, Eye, EyeOff, Zap, AlertCircle } from 'lucide-react'

function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    await new Promise(r => setTimeout(r, 600))

    if (username === 'admin' && password === '1234') {
      localStorage.setItem('isLoggedIn', 'true')
      navigate('/dashboard')
    } else {
      setError('Invalid credentials. Try admin / 1234')
    }
    setLoading(false)
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-card__header">
          <div className="login-card__logo">
            <Zap size={28} />
          </div>
          <h1 className="login-card__title">Welcome back</h1>
          <p className="login-card__subtitle">Sign in to your NexaApp account</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          {error && (
            <div className="login-form__error">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}

          <div className="form-field">
            <label className="form-field__label">Username</label>
            <div className="form-field__input-wrap">
              <User size={16} className="form-field__icon" />
              <input
                className="form-field__input"
                placeholder="Enter username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                autoComplete="username"
              />
            </div>
          </div>

          <div className="form-field">
            <label className="form-field__label">Password</label>
            <div className="form-field__input-wrap">
              <Lock size={16} className="form-field__icon" />
              <input
                className="form-field__input"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <button
                type="button"
                className="form-field__eye"
                onClick={() => setShowPassword(s => !s)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button type="submit" className="btn-primary btn-full" disabled={loading}>
            {loading ? <span className="btn-spinner" /> : null}
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>

        <p className="login-card__footer">
          Don't have an account?{' '}
          <Link to="/" className="login-card__link">Go home</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
