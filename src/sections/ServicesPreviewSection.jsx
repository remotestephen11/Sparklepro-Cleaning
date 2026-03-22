import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Residential Cleaning',
    description:
      'Routine cleaning for living spaces, kitchens, bathrooms, and bedrooms with a polished, guest-ready finish.',
    detail: 'Weekly, biweekly, or monthly plans',
    accent: 'bg-brand-yellow-100',
  },
  {
    title: 'Office Cleaning',
    description:
      'Reliable upkeep for workspaces, reception areas, meeting rooms, kitchens, and shared touchpoints.',
    detail: 'Before-hours and recurring scheduling',
    accent: 'bg-brand-green-100',
  },
  {
    title: 'Deep Cleaning',
    description:
      'A more thorough reset for homes or workplaces that need detailed attention beyond standard maintenance.',
    detail: 'Ideal for seasonal or first-time service',
    accent: 'bg-brand-yellow-50',
  },
  {
    title: 'Move-In / Move-Out Cleaning',
    description:
      'Detailed cleaning for property transitions so spaces feel ready for handover, arrival, or listing photos.',
    detail: 'For tenants, homeowners, and landlords',
    accent: 'bg-surface-100',
  },
  {
    title: 'Post-Construction Cleaning',
    description:
      'Careful dust removal, surface wipe-downs, and finishing cleanup after renovations or building work.',
    detail: 'Designed for recently completed projects',
    accent: 'bg-brand-red-50',
  },
]

function ServicesPreviewSection() {
  return (
    <section className="bg-surface-0">
      <div className="container py-18 lg:py-22">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-reading space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-green-600">
              Services Preview
            </p>
            <h2>Professional cleaning for the spaces people notice most.</h2>
            <p>
              From recurring home care to detailed post-project cleanup, our
              services are structured to keep spaces clean, presentable, and easy
              to maintain over time.
            </p>
          </div>
          <Link
            to="/services"
            className="text-sm font-semibold text-surface-700 no-underline transition hover:text-brand-green-700"
          >
            View all services
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex h-full flex-col rounded-[1.75rem] border border-surface-200 bg-surface-50 p-8 shadow-soft transition hover:border-surface-300 hover:bg-surface-0"
            >
              <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${service.accent}`}>
                <div className="h-6 w-6 rounded-full border-2 border-surface-700/20"></div>
              </div>

              <div className="flex-1">
                <h3 className="text-[1.65rem] leading-9">{service.title}</h3>
                <p className="mt-4">{service.description}</p>
              </div>

              <div className="mt-8 flex flex-col items-start gap-3 border-t border-surface-200 pt-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <p className="text-sm font-medium text-surface-600">{service.detail}</p>
                <span className="text-sm font-semibold text-brand-green-700">
                  Learn more
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesPreviewSection
