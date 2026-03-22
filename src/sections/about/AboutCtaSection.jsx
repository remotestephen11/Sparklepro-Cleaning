import { CalloutBanner } from '../../components/ui'
import { siteImages } from '../../data/siteImages'

function AboutCtaSection() {
  return (
    <CalloutBanner
      eyebrow="Work with SparklePro"
      title="Looking for cleaning service you can rely on long-term?"
      description="Tell us what kind of space you need maintained, how often you need service, and the standard you want to keep. We will recommend the right next step."
      primaryAction={{ to: '/contact', label: 'Request a Quote' }}
      secondaryAction={{ to: '/services', label: 'Explore Services' }}
      tone="light"
      media={siteImages.teamAtWork}
      aside={
        <>
          <p className="section-kicker text-brand-green-700">Long-term fit</p>
          <p className="mt-3 text-base leading-7 text-surface-600">
            Built for households and workplaces that want a cleaning partner, not a one-off fix.
          </p>
        </>
      }
    />
  )
}

export default AboutCtaSection
