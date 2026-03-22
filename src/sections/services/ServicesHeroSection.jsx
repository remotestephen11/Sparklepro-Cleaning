import { PageHero, SectionHeader } from '../../components/ui'
import { siteImages } from '../../data/siteImages'

function ServicesHeroSection() {
  const aside = (
    <>
      <SectionHeader eyebrow="What to expect" className="space-y-0" />
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-xl font-semibold text-surface-700">Flexible</p>
          <p className="mt-2 text-sm leading-6 text-surface-500">
            Weekly, biweekly, one-time, and custom scheduling.
          </p>
        </div>
        <div>
          <p className="text-xl font-semibold text-surface-700">Structured</p>
          <p className="mt-2 text-sm leading-6 text-surface-500">
            Clear scopes and consistent routines.
          </p>
        </div>
      </div>
    </>
  )

  return (
    <PageHero
      eyebrow="Services"
      title={
        <>
          Cleaning services tailored to how each <span className="font-premium italic text-surface-600">space is actually used</span>.
        </>
      }
      description="Recurring residential cleaning, workplace upkeep, deep cleaning, and move-focused service with a dependable premium standard."
      aside={aside}
      media={siteImages.officeWorkspace}
      mediaCard={
        <>
          <p className="section-kicker text-brand-green-700">Coverage</p>
          <p className="mt-2 text-base font-semibold leading-7 tracking-[-0.03em] text-surface-700">
            Homes, offices, deep cleans, and move-related service.
          </p>
        </>
      }
    />
  )
}

export default ServicesHeroSection
