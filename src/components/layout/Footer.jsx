import { Link } from 'react-router-dom'

const quickLinks = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
]

function Footer() {
  return (
    <footer className="border-t border-surface-200 bg-surface-700 text-surface-100">
      <div className="container py-12 sm:py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.4fr_0.8fr_1fr]">
          <div className="max-w-reading">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-yellow-300 text-sm font-bold text-surface-700">
                SP
              </div>
              <div>
                <p className="text-base font-semibold leading-5 text-surface-0">
                  SparklePro
                </p>
                <p className="text-sm leading-5 text-surface-300">
                  Cleaning Services
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-7 text-surface-300">
              Reliable residential and commercial cleaning with a polished,
              detail-driven standard and flexible scheduling for busy homes and teams.
            </p>
          </div>

          <div className="md:col-span-2 xl:col-span-1">
            <h2 className="text-base font-semibold text-surface-0">Quick Links</h2>
            <div className="mt-5 flex flex-col gap-3">
              {quickLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm text-surface-300 no-underline transition hover:text-surface-0"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-base font-semibold text-surface-0">Contact</h2>
            <div className="mt-5 space-y-3">
              <p className="text-sm leading-7 text-surface-300">
                Service hours: Monday to Saturday, 8:00 AM to 6:00 PM
              </p>
              <a
                href="tel:+1234567890"
                className="block text-sm text-surface-0 no-underline transition hover:text-brand-yellow-200"
              >
                (123) 456-7890
              </a>
              <a
                href="mailto:hello@sparkleprocleaning.com"
                className="block text-sm text-surface-0 no-underline transition hover:text-brand-yellow-200"
              >
                hello@sparkleprocleaning.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-surface-600 pt-6 text-sm text-surface-400 md:mt-12 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 SparklePro Cleaning Services. All rights reserved.</p>
          <p>Professional cleaning for homes, offices, and recurring upkeep.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
