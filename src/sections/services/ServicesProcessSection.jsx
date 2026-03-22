import { Card, SectionHeader } from '../../components/ui'

const steps = [
  {
    step: '01',
    title: 'Tell us about the space',
    description:
      'Share the type of property, size, cleaning priorities, and whether you need recurring or one-time service.',
  },
  {
    step: '02',
    title: 'We recommend the right scope',
    description:
      'Based on your needs, we suggest the appropriate service type, visit frequency, and practical starting point.',
  },
  {
    step: '03',
    title: 'Schedule and maintain the standard',
    description:
      'Once booked, we deliver structured service with clear communication and a consistent cleaning routine.',
  },
]

function ServicesProcessSection() {
  return (
    <section className="border-y border-surface-200/80 bg-surface-50">
      <div className="container section-space">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <SectionHeader
            eyebrow="How It Works"
            title="A simple process that keeps service easy to manage."
            description="We keep onboarding straightforward so clients can move from inquiry to scheduled service without confusion or unnecessary back-and-forth."
            className="max-w-[34rem]"
            titleClassName="max-w-[11ch]"
          />

          <div className="grid gap-5">
            {steps.map((step) => (
              <Card
                key={step.step}
                className="bg-surface-0 p-7 lg:p-8"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand-green-100 bg-brand-green-50 text-sm font-semibold text-brand-green-700">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-2xl">{step.title}</h3>
                    <p className="mt-3 text-base leading-7 text-surface-500">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesProcessSection
