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
      description="Tell us what you need cleaned, how often you need support, and the standard you want to maintain."
      media={siteImages.residentialDetail}
      mediaCard={
        <>
          <p className="section-kicker text-brand-green-700">Quick response</p>
          <p className="mt-2 text-base font-semibold leading-7 tracking-[-0.03em] text-surface-700">
            Most quote requests can be reviewed after a short conversation.
          </p>
        </>
      }
    />
  )
}

export default ContactHeroSection
