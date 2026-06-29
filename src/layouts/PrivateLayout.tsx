import { useState } from 'react'
import { Outlet, NavLink, useNavigate, useLocation, Navigate } from 'react-router-dom'
import {
  LayoutDashboard,
  ShoppingBag,
  LogOut,
  Zap,
  Menu,
  X,
  Bell,
  Search,
  ChevronRight,
} from 'lucide-react'

const NAV_ITEMS = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/products', label: 'Products', icon: ShoppingBag },
]

function PrivateLayout() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [collapsed, setCollapsed] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    navigate('/login')
  }



  const pageTitle = NAV_ITEMS.find(item => pathname.startsWith(item.to))?.label ?? 'Page'




  const allowedPages = {
    admin: [""],
    user: []
  }


  const validateRole = () => {
    const roles: keyof typeof allowedPages = "admin"
    if (!roles && roles in allowedPages) return false;

    const currentRoute = window.location.pathname;


    return true;
    return allowedPages[roles].some((route: string) => route === currentRoute)
  }

  if (!validateRole())
    return <Navigate to="/login" />

  return (
    <div className={`app-shell ${collapsed ? 'app-shell--collapsed' : ''}`}>
      {/* ── Sidebar ── */}
      <aside className="sidebar">
        <div className="sidebar__header">
          <div className="sidebar__brand">
            <Zap size={20} className="brand-icon" />
            {!collapsed && <span className="sidebar__brand-name">NexaApp</span>}
          </div>
          <button className="sidebar__toggle" onClick={() => setCollapsed(c => !c)} aria-label="Toggle sidebar">
            {collapsed ? <ChevronRight size={16} /> : <X size={16} />}
          </button>
        </div>

        <nav className="sidebar__nav">
          {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => 'sidebar__link' + (isActive ? ' sidebar__link--active' : '')}
            >
              <Icon size={18} className="sidebar__link-icon" />
              {!collapsed && <span>{label}</span>}
            </NavLink>
          ))}
        </nav>

        <button className="sidebar__logout" onClick={handleLogout}>
          <LogOut size={18} className="sidebar__link-icon" />
          {!collapsed && <span>Logout</span>}
        </button>
      </aside>

      {/* ── Content area ── */}
      <div className="content-area">
        {/* Topbar */}
        <header className="topbar">
          <div className="topbar__left">
            <button className="topbar__menu-btn" onClick={() => setCollapsed(c => !c)}>
              <Menu size={20} />
            </button>
            <div className="topbar__breadcrumb">
              <span className="topbar__breadcrumb-root">App</span>
              <ChevronRight size={14} className="topbar__breadcrumb-sep" />
              <span className="topbar__breadcrumb-current">{pageTitle}</span>
            </div>
          </div>

          <div className="topbar__right">
            <button className="topbar__icon-btn" aria-label="Search">
              <Search size={18} />
            </button>
            <button className="topbar__icon-btn topbar__icon-btn--bell" aria-label="Notifications">
              <Bell size={18} />
              <span className="topbar__badge" />
            </button>
            <div className="topbar__avatar">A</div>
          </div>
        </header>

        {/* Page content */}
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default PrivateLayout
