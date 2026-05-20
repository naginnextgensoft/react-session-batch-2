import { Link } from 'react-router-dom'
import { Zap, ArrowRight, ShieldCheck, BarChart2, Package } from 'lucide-react'

const FEATURES = [
  { icon: ShieldCheck, title: 'Secure by default', desc: 'Auth-protected routes keep your data safe.' },
  { icon: BarChart2, title: 'Real-time analytics', desc: 'Track revenue, users, and growth at a glance.' },
  { icon: Package, title: 'Product management', desc: 'Browse, filter, and manage your entire catalog.' },
]

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero__badge">
          <Zap size={14} />
          Production-ready React starter
        </div>
        <h1 className="hero__title">
          Build faster with <span className="hero__highlight">NexaApp</span>
        </h1>
        <p className="hero__subtitle">
          A modern React dashboard with authentication, protected routes, and real product data.
        </p>
        <div className="hero__actions">
          <Link to="/login" className="btn-primary btn-lg">
            Get Started <ArrowRight size={16} />
          </Link>
          <Link to="/dashboard" className="btn-outline btn-lg">
            View Dashboard
          </Link>
        </div>
      </section>

      <section className="features">
        {FEATURES.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="feature-card">
            <div className="feature-card__icon">
              <Icon size={22} />
            </div>
            <h3 className="feature-card__title">{title}</h3>
            <p className="feature-card__desc">{desc}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default HomePage
