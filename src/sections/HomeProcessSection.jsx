import { Card, SectionHeader } from '../components/ui'

const steps = [
  {
    step: '01',
    title: 'Share your space',
    description: 'Tell us about the property, your priorities, and how often you want support.',
  },
  {
    step: '02',
    title: 'Receive a tailored plan',
    description: 'We recommend the right service scope, cadence, and practical starting point.',
  },
  {
    step: '03',
    title: 'Keep the standard consistent',
    description: 'Your visits stay organized, dependable, and aligned with the finish you expect.',
  },
]

function HomeProcessSection() {
  return (
    <section className="border-y border-surface-200/80 bg-surface-50">
      <div className="container section-space">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
          <SectionHeader
            eyebrow="How It Works"
            title="A premium process that stays straightforward."
            description="We keep inquiry, quoting, and recurring service easy to manage so the result feels dependable from the first conversation."
            className="max-w-[33rem]"
            titleClassName="max-w-[11ch]"
          />

          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <Card key={step.step} className="bg-surface-0 p-6 lg:p-7">
                <p className="font-premium text-4xl italic text-surface-400">{step.step}</p>
                <h3 className="mt-5 text-[1.45rem] leading-[1.1]">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-surface-500">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeProcessSection
