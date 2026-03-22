import { CalloutBanner } from '../../components/ui'

function PricingCtaSection() {
  return (
    <CalloutBanner
      eyebrow="Request a tailored quote"
      title="Want pricing matched to your exact space and schedule?"
      description="Share your property type, cleaning priorities, and preferred frequency, and we will recommend the right service level with a clear quote."
      primaryAction={{ to: '/contact', label: 'Get a Quote' }}
      secondaryAction={{ to: '/services', label: 'View Services' }}
      tone="dark"
    />
  )
}

export default PricingCtaSection
