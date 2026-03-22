import { Card, SectionHeader } from '../../components/ui'

function CompanyStorySection() {
  return (
    <section className="bg-surface-0">
      <div className="container section-space">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeader
            eyebrow="Our Story"
            title="A cleaning company shaped by service standards."
            className="max-w-[32rem]"
            titleClassName="max-w-[11ch]"
          />

          <Card variant="muted" className="space-y-6">
            <p>
              SparklePro began with a simple belief: cleaning should feel dependable,
              professional, and easy to trust. Too many clients were choosing between
              inconsistent service or impersonal providers that treated cleaning as a
              quick transaction.
            </p>
            <p>
              We built SparklePro to offer something more considered. Our approach combines
              structured service routines, careful attention to detail, and a client
              experience that feels organized from the first inquiry to every scheduled visit.
            </p>
            <p>
              Today, we support busy households, offices, and property managers who want
              spaces that stay polished without the stress of managing the process themselves.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default CompanyStorySection
