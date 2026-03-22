import { Button, Card, SectionHeader } from '../components/ui'
import { siteImages } from '../data/siteImages'

function CtaBannerSection() {
  return (
    <section className="bg-surface-0">
      <div className="container section-space">
        <Card variant="dark" className="overflow-hidden rounded-[2rem] p-0">
          <div className="grid gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1.02fr_0.98fr] lg:px-14 lg:py-14">
            <SectionHeader
              eyebrow="Ready to get started?"
              title="Book a cleaner, steadier standard for your space."
              description="Tell us about your property, preferred schedule, and service goals. We will recommend the right plan and send a clear quote without the back-and-forth."
              invert
              className="max-w-[38rem]"
              titleClassName="max-w-[14ch] text-surface-0"
            />

            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,15rem)]">
              <div className="flex flex-col justify-between gap-8 rounded-[1.5rem] border border-surface-500/20 bg-surface-0/5 p-6">
                <div className="space-y-3">
                  <p className="eyebrow-label border-transparent bg-surface-0/5 text-surface-300 shadow-none">
                    Fast next step
                  </p>
                  <p className="text-base leading-7 text-surface-200">
                    Most inquiries can be quoted after a short conversation about the
                    size of the space, frequency, and cleaning priorities.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
                  <Button to="/contact" variant="accent">
                    Get Your Quote
                  </Button>
                  <Button to="/pricing" variant="inverse">
                    Review Pricing
                  </Button>
                </div>
              </div>
              <div className="image-shell aspect-[0.82] rounded-[1.5rem]">
                <img src={siteImages.kitchenDetail.src} alt={siteImages.kitchenDetail.alt} className="image-cover" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default CtaBannerSection
