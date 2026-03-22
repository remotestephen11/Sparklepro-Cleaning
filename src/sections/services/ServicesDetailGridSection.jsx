import { Card, SectionHeader } from '../../components/ui'

const services = [
  {
    title: 'Residential Cleaning',
    description:
      'Ongoing cleaning designed for busy households that want a space to stay tidy, fresh, and consistently presentable.',
    includes: [
      'Living areas, kitchens, bathrooms, and bedrooms',
      'High-touch surfaces and visible finishing details',
      'Flexible weekly, biweekly, or monthly scheduling',
    ],
  },
  {
    title: 'Office Cleaning',
    description:
      'Professional maintenance for workplaces that need a clean, welcoming environment for teams, clients, and daily operations.',
    includes: [
      'Reception areas, desks, meeting rooms, and kitchens',
      'Washrooms and shared surfaces maintained with care',
      'Recurring service timed around operational needs',
    ],
  },
  {
    title: 'Deep Cleaning',
    description:
      'A more detailed service for spaces that need a fuller reset beyond standard recurring upkeep.',
    includes: [
      'Extra attention to buildup-prone and neglected areas',
      'Suitable for seasonal refreshes or first-time clients',
      'Recommended before transitioning to recurring service',
    ],
  },
  {
    title: 'Move-In / Move-Out Cleaning',
    description:
      'Transition cleaning for homes and apartments that need to feel ready for handover, arrival, or listing presentation.',
    includes: [
      'Detailed cleaning across empty or partially cleared spaces',
      'Ideal for tenants, homeowners, and landlords',
      'Focused on readiness, presentation, and practical turnover',
    ],
  },
  {
    title: 'Post-Construction Cleaning',
    description:
      'Careful cleanup after renovation or building work to remove dust, residue, and surface debris.',
    includes: [
      'Dust and film removal from surfaces and fixtures',
      'Detailed wipe-downs and finishing cleanup',
      'Best suited for recently completed projects',
    ],
  },
]

function ServicesDetailGridSection() {
  return (
    <section className="bg-surface-0">
      <div className="container section-space">
        <SectionHeader
          eyebrow="Detailed Services"
          title="Every service is scoped for clarity, consistency, and a polished result."
          description="We keep each offering easy to understand so clients can choose the right level of service for the space, schedule, and standard they need to maintain."
          className="max-w-[42rem]"
          titleClassName="max-w-[13ch]"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <Card
              key={service.title}
              variant="muted"
              className="bg-surface-50"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-[1.75rem] leading-10">{service.title}</h3>
                  <p className="mt-4 max-w-[40rem]">{service.description}</p>
                </div>
                <div className="hidden h-14 w-14 rounded-2xl border border-brand-yellow-200 bg-brand-yellow-100 md:block"></div>
              </div>

              <div className="mt-8 border-t border-surface-200 pt-6">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-surface-500">
                  Typical scope
                </p>
                <div className="mt-4 grid gap-3">
                  {service.includes.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-green-500"></span>
                      <p className="text-sm leading-6 text-surface-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesDetailGridSection
