import { Button, SectionHeader } from '../components/ui'
import { siteImages } from '../data/siteImages'

function FeaturedStorySection() {
  return (
    <section className="bg-surface-0">
      <div className="container section-space">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.94fr)] lg:items-center">
          <div className="relative">
            <div className="image-shell aspect-[0.94] rounded-[2.25rem]">
              <img
                src={siteImages.residentialDetail.src}
                alt={siteImages.residentialDetail.alt}
                className="image-cover"
              />
            </div>
            <div className="surface-panel absolute -bottom-5 left-4 right-4 rounded-[1.5rem] bg-surface-0/95 p-4 sm:left-auto sm:right-5 sm:w-[16rem]">
              <p className="section-kicker text-brand-green-700">Premium upkeep</p>
              <p className="mt-2 text-[1rem] font-semibold leading-6 tracking-[-0.03em] text-surface-700">
                Spaces cared for with the same attention clients expect elsewhere in their home or brand.
              </p>
            </div>
          </div>

          <div className="space-y-6 lg:pl-4">
            <SectionHeader
              eyebrow="A More Considered Standard"
              title={
                <>
                  Cleaning support that feels <span className="font-premium italic text-surface-600">calm, polished, and managed</span>.
                </>
              }
              description="SparklePro is built for clients who want their space professionally maintained without having to manage every detail."
              className="max-w-[36rem]"
              titleClassName="max-w-[12ch]"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="surface-panel-muted p-6">
                <p className="section-kicker text-brand-green-700">Residential</p>
                <p className="mt-3 text-sm leading-6 text-surface-600">
                  Weekly, biweekly, and deep-cleaning support for homes that need to stay guest-ready.
                </p>
              </div>
              <div className="surface-panel-muted p-6">
                <p className="section-kicker text-brand-green-700">Commercial</p>
                <p className="mt-3 text-sm leading-6 text-surface-600">
                  Office and managed-property cleaning with flexible timing and polished presentation.
                </p>
              </div>
            </div>

            <Button to="/about" variant="secondary">
              Learn About SparklePro
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedStorySection
