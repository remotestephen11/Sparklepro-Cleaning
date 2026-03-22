import { CalloutBanner } from '../../components/ui'
import { siteImages } from '../../data/siteImages'

function ServicesCtaSection() {
  return (
    <CalloutBanner
      eyebrow="Request service"
      title="Need help choosing the right cleaning service?"
      description="Tell us about the space and the standard you want to maintain. We will recommend the right service and provide a clear quote for next steps."
      primaryAction={{ to: '/contact', label: 'Get a Quote' }}
      secondaryAction={{ to: '/pricing', label: 'Review Pricing' }}
      tone="dark"
      media={siteImages.residentialDetail}
      aside={
        <>
          <p className="section-kicker text-surface-300">Service guidance</p>
          <p className="mt-3 text-base leading-7 text-surface-200">
            We help you choose the right cadence, scope, and finish for the space you need maintained.
          </p>
        </>
      }
    />
  )
}

export default ServicesCtaSection
