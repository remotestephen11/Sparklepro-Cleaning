import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '../ui'

const navigationItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinkClassName = ({ isActive }) =>
    [
      'relative text-sm font-medium tracking-[0.01em] transition-colors duration-200 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand-yellow-400 after:transition-transform after:duration-200',
      isActive
        ? 'text-surface-700 after:scale-x-100'
        : 'text-surface-500 hover:text-surface-700 hover:after:scale-x-100',
    ].join(' ')

  return (
    <header className="sticky top-0 z-30 border-b border-surface-200/80 bg-surface-0/90 backdrop-blur-xl">
      <div className="container">
        <div className="flex min-h-18 items-center justify-between gap-4 sm:min-h-20 sm:gap-6">
          <Link
            to="/"
            className="min-w-0 no-underline"
            aria-label="SparklePro Cleaning Services home"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[1.1rem] border border-brand-yellow-200 bg-brand-yellow-300 text-sm font-bold text-surface-800 shadow-soft sm:h-12 sm:w-12">
                <span className="font-premium text-lg not-italic tracking-[-0.06em]">SP</span>
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold leading-5 tracking-[-0.03em] text-surface-700 sm:text-base">
                  SparklePro
                </p>
                <p className="truncate text-[0.72rem] font-medium uppercase tracking-[0.18em] text-surface-400 sm:text-xs">
                  Cleaning Services
                </p>
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navigationItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClassName} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              href="tel:+1234567890"
              className="px-5 py-3"
            >
              Book a Cleaning
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-surface-200 bg-surface-0 text-surface-700 shadow-inset lg:hidden"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-current"></span>
              <span className="block h-0.5 w-5 bg-current"></span>
              <span className="block h-0.5 w-5 bg-current"></span>
            </div>
          </button>
        </div>

        {isMenuOpen ? (
          <div className="border-t border-surface-200 py-4 lg:hidden">
            <nav className="flex flex-col gap-3 rounded-[1.5rem] bg-surface-50 p-4" aria-label="Mobile primary">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      'rounded-xl px-4 py-3 text-sm font-medium no-underline transition',
                      isActive
                        ? 'bg-surface-0 text-surface-700 shadow-inset'
                        : 'text-surface-500 hover:bg-surface-0 hover:text-surface-700',
                    ].join(' ')
                  }
                  end={item.to === '/'}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <Button
                href="tel:+1234567890"
                className="mt-2 px-5 py-3"
              >
                Book a Cleaning
              </Button>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  )
}

export default Navbar
