import { PageHero, SectionHeader } from '../../components/ui'

function ServicesHeroSection() {
  const aside = (
    <>
      <SectionHeader eyebrow="What to expect" className="space-y-0" />
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <p className="text-2xl font-semibold text-surface-700">Flexible</p>
          <p className="mt-2 text-sm leading-6 text-surface-500">
            Weekly, biweekly, one-time, and custom service frequencies.
          </p>
        </div>
        <div>
          <p className="text-2xl font-semibold text-surface-700">Structured</p>
          <p className="mt-2 text-sm leading-6 text-surface-500">
            Clear scopes of work and consistent cleaning routines.
          </p>
        </div>
      </div>
    </>
  )

  return (
    <PageHero
      eyebrow="Services"
      title="Cleaning services tailored to how each space is used."
      description="SparklePro provides recurring residential cleaning, workplace upkeep, detailed deep cleaning, and transition-focused services with a premium, dependable standard from start to finish."
      aside={aside}
    />
  )
}

export default ServicesHeroSection
