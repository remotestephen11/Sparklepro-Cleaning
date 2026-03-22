import { PageHero, SectionHeader } from '../../components/ui'

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
      title="Clear pricing guidance for spaces that need a dependable standard."
      description="SparklePro uses practical starting-from pricing so clients can compare service levels easily while still receiving a quote tailored to the size, condition, and frequency of the space."
      aside={aside}
    />
  )
}

export default PricingHeroSection
