import {
  CtaBannerSection,
  FeaturedStorySection,
  HeroSection,
  HomeProcessSection,
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
      <FeaturedStorySection />
      <WhyChooseUsSection />
      <HomeProcessSection />
      <PricingPreviewSection />
      <TestimonialsPreviewSection />
      <CtaBannerSection />
    </>
  )
}

export default HomePage
