import { Outlet, NavLink } from 'react-router-dom'
import { Zap } from 'lucide-react'

function PublicLayout() {
  return (
    <div className="public-shell">
      <nav className="public-nav">
        <div className="public-nav__brand">
          <Zap size={20} className="brand-icon" />
          <span>NexaApp</span>
        </div>
        <div className="public-nav__links">
          <NavLink to="/" className={({ isActive }) => 'nav-link' + (isActive ? ' nav-link--active' : '')}>
            Home
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => 'nav-btn' + (isActive ? ' nav-btn--active' : '')}>
            Sign In
          </NavLink>
        </div>
      </nav>

      <main className="public-main">
        <Outlet />
      </main>
    </div>
  )
}

export default PublicLayout
