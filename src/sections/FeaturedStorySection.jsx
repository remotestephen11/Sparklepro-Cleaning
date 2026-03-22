import { Button, SectionHeader } from '../components/ui'
import { siteImages } from '../data/siteImages'

function FeaturedStorySection() {
  return (
    <section className="bg-surface-0">
      <div className="container section-space">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-center">
          <div className="relative">
            <div className="image-shell aspect-[1.02] rounded-[2.5rem]">
              <img
                src={siteImages.residentialDetail.src}
                alt={siteImages.residentialDetail.alt}
                className="image-cover"
              />
            </div>
            <div className="surface-panel absolute -bottom-6 left-4 right-4 rounded-[1.5rem] bg-surface-0/95 p-5 sm:left-auto sm:right-6 sm:w-[18rem]">
              <p className="section-kicker text-brand-green-700">Premium upkeep</p>
              <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-surface-700">
                Spaces cared for with the same attention clients expect from the rest of their home or brand.
              </p>
            </div>
          </div>

          <div className="space-y-8 lg:pl-6">
            <SectionHeader
              eyebrow="A More Considered Standard"
              title={
                <>
                  Cleaning support that feels <span className="font-premium italic text-surface-600">calm, polished, and managed</span>.
                </>
              }
              description="SparklePro is built for clients who want their space to feel professionally maintained without having to coordinate every detail themselves. The experience is structured, discreet, and easy to rely on."
              className="max-w-[36rem]"
              titleClassName="max-w-[12ch]"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="surface-panel-muted p-6">
                <p className="section-kicker text-brand-green-700">Residential</p>
                <p className="mt-3 text-base leading-7 text-surface-600">
                  Weekly, biweekly, and deep-cleaning support for homes that need to stay guest-ready.
                </p>
              </div>
              <div className="surface-panel-muted p-6">
                <p className="section-kicker text-brand-green-700">Commercial</p>
                <p className="mt-3 text-base leading-7 text-surface-600">
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
