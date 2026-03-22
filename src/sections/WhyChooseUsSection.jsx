import { Card, SectionHeader } from '../components/ui'

const reasons = [
  {
    title: 'Consistent standards',
    description:
      'Detailed service checklists help every visit meet the same polished standard.',
  },
  {
    title: 'Professional team experience',
    description:
      'Punctual, respectful cleaners who work carefully in occupied spaces.',
  },
  {
    title: 'Easy scheduling and support',
    description:
      'Straightforward booking, responsive communication, and flexible recurring plans.',
  },
  {
    title: 'Service that feels premium',
    description:
      'Thoughtful execution, strong finishing detail, and a reliable experience.',
  },
]

function WhyChooseUsSection() {
  return (
    <section className="bg-surface-0">
      <div className="container section-space">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
          <div className="surface-panel-muted rounded-[2rem] p-6 sm:p-7 lg:p-8">
            <SectionHeader
              eyebrow="Why Choose Us"
              title={
                <>
                  A more <span className="font-premium italic text-surface-600">considered</span> standard of clean.
                </>
              }
              description="SparklePro is built for clients who want structure, consistency, and clear communication."
              className="max-w-[36rem]"
              titleClassName="max-w-[11ch]"
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-surface-0 p-5 shadow-inset">
                <p className="section-kicker text-brand-green-700">Average client satisfaction</p>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-surface-700">4.9/5</p>
              </div>
              <div className="rounded-[1.5rem] bg-surface-0 p-5 shadow-inset">
                <p className="section-kicker text-brand-green-700">Recurring accounts supported</p>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-surface-700">250+</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <Card
                key={reason.title}
                revealOrder={index}
                className="bg-surface-0"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-green-100 bg-brand-green-50 text-sm font-semibold text-brand-green-700">
                  0{index + 1}
                </div>
                <h3 className="mt-5 text-[1.35rem] leading-[1.1]">{reason.title}</h3>
                <p className="mt-3 text-sm leading-6 text-surface-500">{reason.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
