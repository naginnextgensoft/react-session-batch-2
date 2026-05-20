import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn-primary" style={{ marginTop: '0.5rem' }}>
        <Home size={16} /> Go Home
      </Link>
    </div>
  )
}

export default NotFoundPage
