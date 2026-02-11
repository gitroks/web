import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { type LayoutProps } from '../types'
import { useTheme } from '../hooks/useTheme'

function Layout({ children }: LayoutProps): React.JSX.Element {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const now = new Date()
  const todayLabel = now.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  const timeLabel = now.toLocaleTimeString(undefined, {
    hour12: false,
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
  })

  const isActive = (path: string): boolean => location.pathname === path

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            {'< Rohith Sajja />'}
          </Link>
          <button
            className="nav-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" aria-hidden="true" className="nav-toggle-icon">
                <path d="M6 15l6-6 6 6" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true" className="nav-toggle-icon">
                <path d="M6 9l6 6 6-6" />
              </svg>
            )}
          </button>
          <ul className={menuOpen ? 'nav-menu nav-menu-open' : 'nav-menu'}>
            <li>
              <Link
                to="/"
                className={isActive('/') ? 'nav-link active' : 'nav-link'}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/education"
                className={isActive('/education') ? 'nav-link active' : 'nav-link'}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                className={isActive('/experience') ? 'nav-link active' : 'nav-link'}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={isActive('/projects') ? 'nav-link active' : 'nav-link'}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className={isActive('/skills') ? 'nav-link active' : 'nav-link'}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={isActive('/contact') ? 'nav-link active' : 'nav-link'}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className="main-content">{children}</main>
      <button
        className="theme-toggle floating-theme"
        type="button"
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? (
          <svg viewBox="0 0 24 24" aria-hidden="true" className="theme-icon">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="23" />
            <line x1="4.2" y1="4.2" x2="6.4" y2="6.4" />
            <line x1="17.6" y1="17.6" x2="19.8" y2="19.8" />
            <line x1="1" y1="12" x2="4" y2="12" />
            <line x1="20" y1="12" x2="23" y2="12" />
            <line x1="4.2" y1="19.8" x2="6.4" y2="17.6" />
            <line x1="17.6" y1="6.4" x2="19.8" y2="4.2" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true" className="theme-icon">
            <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3a9.5 9.5 0 1 0 11.5 11.5Z" />
          </svg>
        )}
      </button>
      <footer className="footer">
        <p>
          <span>&copy; {now.getFullYear()} Rohith Sajja</span>
          <span className="footer-sep">|</span>
          <span>{todayLabel}</span>
          <span className="footer-sep">|</span>
          <span>{timeLabel}</span>
        </p>
      </footer>
    </div>
  )
}

export default Layout
