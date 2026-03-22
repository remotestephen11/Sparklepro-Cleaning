import { Link } from 'react-router-dom'
import { BrandMark, Button } from '../ui'

const quickLinks = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
]

function Footer() {
  return (
    <footer className="border-t border-surface-600/80 bg-surface-800 text-surface-100">
      <div className="container py-14 sm:py-16 lg:py-20">
        <div className="grid gap-8 rounded-[2rem] border border-surface-600/70 bg-surface-700 px-6 py-8 shadow-card sm:px-8 sm:py-10 xl:grid-cols-[1.25fr_0.8fr_0.8fr_1fr] xl:items-start">
          <div className="max-w-reading">
            <BrandMark as="static" tone="dark" />
            <p className="mt-6 text-sm leading-7 text-surface-300">
              Reliable residential and commercial cleaning with a polished,
              detail-driven standard and flexible scheduling for busy homes and teams.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact" variant="accent" className="w-full sm:w-auto">
                Request a Quote
              </Button>
              <Button href="tel:+1234567890" variant="inverse" className="w-full sm:w-auto">
                Call Us
              </Button>
            </div>
          </div>

          <div>
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
            <h2 className="text-base font-semibold text-surface-0">Service Highlights</h2>
            <div className="mt-5 space-y-3">
              <p className="text-sm leading-7 text-surface-300">Recurring home cleaning</p>
              <p className="text-sm leading-7 text-surface-300">Office and workspace upkeep</p>
              <p className="text-sm leading-7 text-surface-300">Deep cleaning and move support</p>
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

        <div className="mt-8 flex flex-col gap-4 px-2 text-sm text-surface-400 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 SparklePro Cleaning Services. All rights reserved.</p>
          <p>Professional cleaning for homes, offices, and recurring upkeep.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
