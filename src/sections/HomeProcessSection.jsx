import { Card, SectionHeader } from '../components/ui'

const steps = [
  {
    step: '01',
    title: 'Share your space',
    description: 'Tell us about the property, priorities, and preferred cadence.',
  },
  {
    step: '02',
    title: 'Receive a tailored plan',
    description: 'We recommend the right scope and practical starting point.',
  },
  {
    step: '03',
    title: 'Keep the standard consistent',
    description: 'Your visits stay organized, dependable, and aligned with your standard.',
  },
]

function HomeProcessSection() {
  return (
    <section className="border-y border-surface-200/80 bg-surface-50">
      <div className="container section-space">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
          <SectionHeader
            eyebrow="How It Works"
            title="A premium process that stays straightforward."
            description="Inquiry, quoting, and recurring service kept simple."
            className="max-w-[33rem]"
            titleClassName="max-w-[11ch]"
          />

          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <Card key={step.step} revealOrder={index} className="group bg-surface-0 p-5 lg:p-6">
                <p className="font-premium text-[2rem] italic text-surface-400">{step.step}</p>
                <h3 className="mt-4 text-[1.25rem] leading-[1.1]">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-surface-500 transition-colors duration-300 group-hover:text-surface-600">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeProcessSection
