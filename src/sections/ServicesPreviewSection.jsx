import { Link } from 'react-router-dom'
import { Card, SectionHeader } from '../components/ui'

const services = [
  {
    title: 'Residential Cleaning',
    description:
      'Routine cleaning for living spaces with a polished, guest-ready finish.',
    detail: 'Weekly, biweekly, or monthly plans',
    accent: 'bg-brand-yellow-100',
    tag: 'Homes',
  },
  {
    title: 'Office Cleaning',
    description:
      'Reliable upkeep for workspaces, meeting rooms, kitchens, and shared touchpoints.',
    detail: 'Before-hours and recurring scheduling',
    accent: 'bg-brand-green-100',
    tag: 'Workspaces',
  },
  {
    title: 'Deep Cleaning',
    description:
      'A more thorough reset for spaces that need attention beyond standard maintenance.',
    detail: 'Ideal for seasonal or first-time service',
    accent: 'bg-brand-yellow-50',
    tag: 'Reset',
  },
  {
    title: 'Move-In / Move-Out Cleaning',
    description:
      'Detailed cleaning for property transitions, handovers, and move days.',
    detail: 'For tenants, homeowners, and landlords',
    accent: 'bg-surface-100',
    tag: 'Transitions',
  },
  {
    title: 'Post-Construction Cleaning',
    description:
      'Careful dust removal and finishing cleanup after renovations or building work.',
    detail: 'Designed for recently completed projects',
    accent: 'bg-brand-red-50',
    tag: 'Specialty',
  },
]

function ServicesPreviewSection() {
  return (
    <section className="bg-surface-25">
      <div className="container section-space">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Services Preview"
            title="Professional cleaning for spaces that need to stay well kept."
            description="Recurring care, deeper resets, and property-focused service."
            className="max-w-[42rem]"
            titleClassName="max-w-[12ch]"
          />
          <Link
            to="/services"
            className="text-sm font-semibold text-surface-700 no-underline transition hover:text-brand-green-700"
          >
            View all services
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={service.title}
              revealOrder={index}
              className="group flex h-full flex-col bg-surface-0 transition hover:-translate-y-1 hover:border-surface-300"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="section-kicker text-surface-400">{service.tag}</span>
                <span className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-surface-200/70 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 ${service.accent}`}>
                  <div className="h-6 w-6 rounded-full border-2 border-surface-700/20 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"></div>
                </span>
              </div>

              <div className="flex-1">
                <h3 className="max-w-[12ch] text-[1.45rem] leading-[1.08]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6">{service.description}</p>
              </div>

              <div className="mt-6 flex flex-col items-start gap-3 border-t border-surface-200/80 pt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <p className="text-sm font-medium text-surface-500">{service.detail}</p>
                <span className="text-sm font-semibold text-brand-green-700 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5">
                  Learn more
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesPreviewSection
