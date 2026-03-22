import { Card, SectionHeader } from '../../components/ui'

const trustReasons = [
  'Background-checked, professional team members',
  'Clear scheduling and responsive communication',
  'Insured service with quality-controlled routines',
  'Flexible support for homes, offices, and managed properties',
]

function WhyClientsTrustSection() {
  return (
    <section className="bg-surface-0">
      <div className="container section-space">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <SectionHeader
            eyebrow="Why Clients Trust Us"
            title="Service that feels dependable from the first visit."
            description="Trust is what turns a first-time clean into a long-term relationship. We earn that trust through reliability, communication, and consistently polished results."
            className="max-w-[36rem]"
            titleClassName="max-w-[12ch]"
          />

          <div className="grid gap-4">
            {trustReasons.map((reason) => (
              <Card
                key={reason}
                variant="muted"
                className="flex items-start gap-4 p-6 lg:p-7"
              >
                <span className="mt-1 h-3 w-3 rounded-full bg-brand-green-500"></span>
                <p className="text-lg leading-8 text-surface-600">{reason}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyClientsTrustSection
