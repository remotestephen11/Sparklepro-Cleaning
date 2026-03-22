import { PageHero, SectionHeader } from '../../components/ui'
import { siteImages } from '../../data/siteImages'

function PricingHeroSection() {
  const aside = (
    <>
      <SectionHeader eyebrow="Pricing philosophy" className="space-y-0" />
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <p className="text-2xl font-semibold text-surface-700">Transparent</p>
          <p className="mt-2 text-sm leading-6 text-surface-500">
            Simple ranges and starting points instead of vague estimates.
          </p>
        </div>
        <div>
          <p className="text-2xl font-semibold text-surface-700">Flexible</p>
          <p className="mt-2 text-sm leading-6 text-surface-500">
            Final quotes reflect service frequency, scope, and property needs.
          </p>
        </div>
      </div>
    </>
  )

  return (
    <PageHero
      eyebrow="Pricing"
      title={
        <>
          Clear pricing guidance for spaces that expect a <span className="font-premium italic text-surface-600">dependable standard</span>.
        </>
      }
      description="SparklePro uses practical starting-from pricing so clients can compare service levels easily while still receiving a quote tailored to the size, condition, and frequency of the space."
      aside={aside}
      media={siteImages.kitchenDetail}
      mediaCard={
        <>
          <p className="section-kicker text-brand-green-700">Quote clarity</p>
          <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-surface-700">
            Practical starting points for premium service, then tailored to the property and cadence.
          </p>
        </>
      }
    />
  )
}

export default PricingHeroSection
