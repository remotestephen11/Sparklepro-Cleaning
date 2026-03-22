import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BrandMark, Button } from '../ui'

const navigationItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinkClassName = ({ isActive }) =>
    [
      'relative py-2 text-[0.82rem] font-semibold uppercase tracking-[0.18em] transition-all duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand-yellow-400 after:transition-transform after:duration-300',
      isActive
        ? 'text-surface-700 after:scale-x-100'
        : 'text-surface-400 hover:text-surface-700 hover:after:scale-x-100',
    ].join(' ')

  return (
    <header
      className={[
        'sticky top-0 z-30 transition-all duration-300',
        isScrolled
          ? 'border-b border-surface-200/80 bg-surface-0/82 shadow-soft backdrop-blur-2xl'
          : 'bg-surface-0/72 backdrop-blur-xl',
      ].join(' ')}
    >
      <div className="container">
        <div className={['flex items-center justify-between gap-4 sm:gap-6', isScrolled ? 'min-h-16 sm:min-h-[4.5rem]' : 'min-h-[4.6rem] sm:min-h-[5.15rem]'].join(' ')}>
          <BrandMark />

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
              variant="primary"
            >
              Book a Cleaning
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-surface-200/90 bg-surface-0/90 text-surface-700 shadow-inset transition duration-300 hover:border-surface-300 hover:bg-surface-0 lg:hidden"
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
            <nav className="flex flex-col gap-3 rounded-[1.5rem] bg-surface-50 p-4 shadow-soft" aria-label="Mobile primary">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      'rounded-xl px-4 py-3 text-[0.82rem] font-semibold uppercase tracking-[0.18em] no-underline transition',
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
