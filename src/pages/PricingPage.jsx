import {
  PricingCtaSection,
  PricingFaqNoteSection,
  PricingHeroSection,
  PricingInclusionsSection,
  PricingTierSection,
} from '../sections/pricing'

function PricingPage() {
  return (
    <>
      <PricingHeroSection />
      <PricingTierSection />
      <PricingInclusionsSection />
      <PricingFaqNoteSection />
      <PricingCtaSection />
    </>
  )
}

export default PricingPage
