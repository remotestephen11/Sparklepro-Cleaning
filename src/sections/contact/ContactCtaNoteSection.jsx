import { CalloutBanner } from '../../components/ui'
import { siteImages } from '../../data/siteImages'

function ContactCtaNoteSection() {
  return (
    <CalloutBanner
      eyebrow="Support Note"
      title="Not sure which service fits your space?"
      description="We can help you choose the right service type, visit frequency, and scope."
      primaryAction={{ to: '/pricing', label: 'Review Pricing' }}
      secondaryAction={{ to: '/services', label: 'Review Services' }}
      tone="light"
      media={siteImages.heroLivingRoom}
      aside={
        <>
          <p className="section-kicker text-brand-green-700">Need direction?</p>
          <p className="mt-3 text-sm leading-6 text-surface-600">
            Start with your priorities and we will guide you to the most practical service level.
          </p>
        </>
      }
    />
  )
}

export default ContactCtaNoteSection
