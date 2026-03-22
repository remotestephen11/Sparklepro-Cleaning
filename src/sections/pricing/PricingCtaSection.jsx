import { CalloutBanner } from '../../components/ui'
import { siteImages } from '../../data/siteImages'

function PricingCtaSection() {
  return (
    <CalloutBanner
      eyebrow="Request a tailored quote"
      title="Need pricing matched to your space and schedule?"
      description="Share the property and preferred frequency, and we will recommend the right service level."
      primaryAction={{ to: '/contact', label: 'Get a Quote' }}
      secondaryAction={{ to: '/services', label: 'View Services' }}
      tone="dark"
      media={siteImages.officeWorkspace}
      aside={
        <>
          <p className="section-kicker text-surface-300">Premium planning</p>
          <p className="mt-3 text-sm leading-6 text-surface-200">
            Transparent starting points, then a quote shaped around the property.
          </p>
        </>
      }
    />
  )
}

export default PricingCtaSection
