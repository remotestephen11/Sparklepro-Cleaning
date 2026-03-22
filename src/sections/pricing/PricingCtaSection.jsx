import { CalloutBanner } from '../../components/ui'
import { siteImages } from '../../data/siteImages'

function PricingCtaSection() {
  return (
    <CalloutBanner
      eyebrow="Request a tailored quote"
      title="Want pricing matched to your exact space and schedule?"
      description="Share your property type, cleaning priorities, and preferred frequency, and we will recommend the right service level with a clear quote."
      primaryAction={{ to: '/contact', label: 'Get a Quote' }}
      secondaryAction={{ to: '/services', label: 'View Services' }}
      tone="dark"
      media={siteImages.officeWorkspace}
      aside={
        <>
          <p className="section-kicker text-surface-300">Premium planning</p>
          <p className="mt-3 text-base leading-7 text-surface-200">
            Transparent starting points, then a quote shaped around the way the property is used.
          </p>
        </>
      }
    />
  )
}

export default PricingCtaSection
