import { Card, SectionHeader } from '../../components/ui'

const inclusions = [
  'Cleaning scope matched to the type and condition of the space',
  'Flexible service frequency for recurring or one-time visits',
  'Structured routines for visible surfaces and high-touch areas',
  'Clear communication before scheduling and during service planning',
]

function PricingInclusionsSection() {
  return (
    <section className="border-y border-surface-200/80 bg-surface-50">
      <div className="container section-space">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <SectionHeader
            eyebrow="What Is Included"
            title="Every quote is built around service clarity."
            description="Rather than hiding the variables, we explain what shapes the quote and how the service scope is determined for each type of property."
            className="max-w-[36rem]"
            titleClassName="max-w-[12ch]"
          />

          <div className="grid gap-4">
            {inclusions.map((item) => (
              <Card
                key={item}
                className="flex items-start gap-4 p-6 lg:p-7"
              >
                <span className="mt-1 h-3 w-3 rounded-full bg-brand-yellow-300"></span>
                <p className="text-lg leading-8 text-surface-600">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingInclusionsSection
