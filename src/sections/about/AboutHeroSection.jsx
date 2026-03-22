import { PageHero } from '../../components/ui'
import { siteImages } from '../../data/siteImages'

function AboutHeroSection() {
  return (
    <PageHero
      eyebrow="About SparklePro"
      title={
        <>
          Professional cleaning built on <span className="font-premium italic text-surface-600">trust, detail, and consistency</span>.
        </>
      }
      description="Reliable residential and commercial cleaning with thoughtful service and a polished standard."
      media={siteImages.teamAtWork}
      mediaCard={
        <>
          <p className="section-kicker text-brand-green-700">Built around service</p>
          <p className="mt-2 text-base font-semibold leading-7 tracking-[-0.03em] text-surface-700">
            Reliable teams, careful finishing, and organized communication.
          </p>
        </>
      }
    />
  )
}

export default AboutHeroSection
