import { CalloutBanner } from '../../components/ui'

function ServicesCtaSection() {
  return (
    <CalloutBanner
      eyebrow="Request service"
      title="Need help choosing the right cleaning service?"
      description="Tell us about the space and the standard you want to maintain. We will recommend the right service and provide a clear quote for next steps."
      primaryAction={{ to: '/contact', label: 'Get a Quote' }}
      secondaryAction={{ to: '/pricing', label: 'Review Pricing' }}
      tone="dark"
    />
  )
}

export default ServicesCtaSection
