import { Link } from 'react-router-dom'
import {
  ShoppingBag,
  TrendingUp,
  Users,
  DollarSign,
  ArrowUpRight,
  ArrowRight,
} from 'lucide-react'

const STATS = [
  { label: 'Total Revenue', value: '$48,295', change: '+12.5%', up: true, icon: DollarSign, color: 'stat-card--green' },
  { label: 'Total Products', value: '194', change: '+3 this week', up: true, icon: ShoppingBag, color: 'stat-card--blue' },
  { label: 'Active Users', value: '3,421', change: '+8.1%', up: true, icon: Users, color: 'stat-card--purple' },
  { label: 'Growth Rate', value: '24.8%', change: '+2.3% vs last mo.', up: true, icon: TrendingUp, color: 'stat-card--orange' },
]

function DashboardPage() {
  return (
    <div className="dash-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">Welcome back, Admin! Here's what's happening.</p>
        </div>
        <Link to="/products" className="btn-primary">
          <ShoppingBag size={16} />
          Browse Products
        </Link>
      </div>

      {/* Stats grid */}
      <div className="stats-grid">
        {STATS.map(({ label, value, change, up, icon: Icon, color }) => (
          <div key={label} className={`stat-card ${color}`}>
            <div className="stat-card__icon-wrap">
              <Icon size={20} />
            </div>
            <div className="stat-card__body">
              <p className="stat-card__label">{label}</p>
              <p className="stat-card__value">{value}</p>
              <p className={`stat-card__change ${up ? 'stat-card__change--up' : 'stat-card__change--down'}`}>
                <ArrowUpRight size={13} />
                {change}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="quick-actions">
        <h2 className="section-title">Quick Actions</h2>
        <div className="quick-actions__grid">
          <Link to="/products" className="quick-action-card">
            <ShoppingBag size={22} className="quick-action-card__icon" />
            <div>
              <p className="quick-action-card__title">View Products</p>
              <p className="quick-action-card__desc">Browse and manage your product catalog</p>
            </div>
            <ArrowRight size={16} className="quick-action-card__arrow" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
