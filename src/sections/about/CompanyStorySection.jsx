import { Card, SectionHeader } from '../../components/ui'
import { siteImages } from '../../data/siteImages'

function CompanyStorySection() {
  return (
    <section className="bg-surface-0">
      <div className="container section-space">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Our Story"
              title="A cleaning company shaped by service standards."
              className="max-w-[32rem]"
              titleClassName="max-w-[11ch]"
            />
            <div className="image-shell aspect-[0.84] rounded-[2rem]">
              <img src={siteImages.residentialDetail.src} alt={siteImages.residentialDetail.alt} className="image-cover" />
            </div>
          </div>

          <Card variant="muted" className="space-y-5">
            <p>
              SparklePro began with a simple belief: cleaning should feel dependable,
              professional, and easy to trust.
            </p>
            <p>
              We built it to offer structured routines, careful finishing, and a client
              experience that feels organized from first inquiry to every scheduled visit.
            </p>
            <p>
              Today, we support homes, offices, and property managers who want spaces to stay polished without the stress of managing the process.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default CompanyStorySection
