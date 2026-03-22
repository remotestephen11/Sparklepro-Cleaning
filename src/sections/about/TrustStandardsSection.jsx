import { Card, SectionHeader } from '../../components/ui'

const standards = [
  { value: '250+', label: 'recurring monthly service visits supported' },
  { value: '4.9/5', label: 'average client satisfaction across active accounts' },
  { value: '6 days', label: 'a week of flexible service availability' },
  { value: '100%', label: 'focus on structured cleaning standards and follow-through' },
]

function TrustStandardsSection() {
  return (
    <section className="border-y border-surface-200/80 bg-surface-800">
      <div className="container section-space">
        <SectionHeader
          eyebrow="Service Standards"
          title="Built to deliver a premium result at a dependable pace."
          description="Our standards are designed around consistency, responsiveness, and the practical needs of clients who want service they can confidently schedule again."
          invert
          className="max-w-[42rem]"
          titleClassName="text-surface-0"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {standards.map((item) => (
            <Card
              key={item.label}
              variant="dark"
              className="p-7 lg:p-8"
            >
              <p className="text-3xl font-semibold text-surface-0">{item.value}</p>
              <p className="mt-3 text-sm leading-6 text-surface-300">{item.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustStandardsSection
