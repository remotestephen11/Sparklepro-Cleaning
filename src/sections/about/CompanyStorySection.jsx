import { Card, SectionHeader } from '../../components/ui'
import { siteImages } from '../../data/siteImages'

function CompanyStorySection() {
  return (
    <section className="bg-surface-0">
      <div className="container section-space">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center xl:gap-12">
          <div className="image-shell h-[24rem] rounded-[2rem] sm:h-[30rem] lg:h-[38rem]" data-reveal="image">
            <img src={siteImages.residentialDetail.src} alt={siteImages.residentialDetail.alt} className="image-cover" />
          </div>

          <div className="space-y-6">
            <SectionHeader
              eyebrow="Our Story"
              title="A cleaning company shaped by service standards."
              description="SparklePro was built to make dependable, polished cleaning feel structured from the first inquiry to every recurring visit."
              className="max-w-[34rem]"
              titleClassName="max-w-[11ch]"
            />
            <Card variant="muted" className="space-y-4 p-6 lg:p-7">
              <p>
                SparklePro began with a simple belief: cleaning should feel dependable,
                professional, and easy to trust.
              </p>
              <p>
                We built it around structured routines, careful finishing, and clear communication for homes, offices, and managed properties.
              </p>
              <p>
                Clients stay with us because the process feels organized, the standard stays consistent, and the space is always treated professionally.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyStorySection
