import { CalloutBanner } from '../../components/ui'

function AboutCtaSection() {
  return (
    <CalloutBanner
      eyebrow="Work with SparklePro"
      title="Looking for cleaning service you can rely on long-term?"
      description="Tell us what kind of space you need maintained, how often you need service, and the standard you want to keep. We will recommend the right next step."
      primaryAction={{ to: '/contact', label: 'Request a Quote' }}
      secondaryAction={{ to: '/services', label: 'Explore Services' }}
      tone="light"
    />
  )
}

export default AboutCtaSection
