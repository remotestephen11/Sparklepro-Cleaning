import { CalloutBanner } from '../../components/ui'

function ContactCtaNoteSection() {
  return (
    <CalloutBanner
      eyebrow="Support Note"
      title="Not sure which service fits your space?"
      description="We can help you choose the right service type, visit frequency, and scope before you book. If you are unsure, start with a quote request and we will guide you from there."
      primaryAction={{ to: '/pricing', label: 'Review Pricing' }}
      secondaryAction={{ to: '/services', label: 'Review Services' }}
      tone="light"
    />
  )
}

export default ContactCtaNoteSection
