import { Card, SectionHeader } from '../components/ui'

const reasons = [
  {
    title: 'Consistent standards',
    description:
      'Detailed service checklists help every visit meet the same polished standard, whether it is a home, office, or managed property.',
  },
  {
    title: 'Professional team experience',
    description:
      'Punctual, respectful cleaners who understand presentation, discretion, and how to work carefully in occupied spaces.',
  },
  {
    title: 'Easy scheduling and support',
    description:
      'Straightforward booking, responsive communication, and flexible recurring plans that fit real client routines.',
  },
  {
    title: 'Service that feels premium',
    description:
      'Thoughtful execution, strong finishing detail, and a reliable experience without unnecessary complexity or upselling.',
  },
]

function WhyChooseUsSection() {
  return (
    <section className="bg-surface-50">
      <div className="container section-space">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="A more reliable standard of clean."
            description="SparklePro is designed for clients who do not want to manage the cleaning process themselves. We bring structure, consistency, and clear communication so the service feels as dependable as the result."
            className="max-w-[36rem]"
            titleClassName="max-w-[11ch]"
          />

          <div className="grid gap-5 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <Card
                key={reason.title}
                className="bg-surface-0"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-green-100 bg-brand-green-50 text-sm font-semibold text-brand-green-700">
                  0{index + 1}
                </div>
                <h3 className="mt-6 text-2xl">{reason.title}</h3>
                <p className="mt-4 text-base leading-7 text-surface-500">{reason.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
