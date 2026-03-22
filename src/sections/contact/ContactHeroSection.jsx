import { PageHero } from '../../components/ui'
import { siteImages } from '../../data/siteImages'

function ContactHeroSection() {
  return (
    <PageHero
      eyebrow="Contact"
      title={
        <>
          Request reliable cleaning support for your <span className="font-premium italic text-surface-600">home or workplace</span>.
        </>
      }
      description="Tell us what kind of space you need maintained, how often you need service, and the standard you want to keep. We will guide you to the right next step."
      media={siteImages.residentialDetail}
      mediaCard={
        <>
          <p className="section-kicker text-brand-green-700">Quick response</p>
          <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-surface-700">
            Most quote requests can be reviewed after a short conversation about the space.
          </p>
        </>
      }
    />
  )
}

export default ContactHeroSection
