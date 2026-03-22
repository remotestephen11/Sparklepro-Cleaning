import {
  ServicesCategoriesSection,
  ServicesCtaSection,
  ServicesDetailGridSection,
  ServicesHeroSection,
  ServicesProcessSection,
} from '../sections/services'

function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesCategoriesSection />
      <ServicesDetailGridSection />
      <ServicesProcessSection />
      <ServicesCtaSection />
    </>
  )
}

export default ServicesPage
