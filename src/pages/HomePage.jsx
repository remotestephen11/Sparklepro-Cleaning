import {
  CtaBannerSection,
  HeroSection,
  PricingPreviewSection,
  ServicesPreviewSection,
  TestimonialsPreviewSection,
  TrustStripSection,
  WhyChooseUsSection,
} from '../sections'

function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStripSection />
      <ServicesPreviewSection />
      <WhyChooseUsSection />
      <PricingPreviewSection />
      <TestimonialsPreviewSection />
      <CtaBannerSection />
    </>
  )
}

export default HomePage
