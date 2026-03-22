import Card from './Card'
import SectionHeader from './SectionHeader'

function PageHero({
  eyebrow,
  title,
  description,
  aside,
  titleMaxWidth = 'max-w-[12ch]',
  descriptionClassName = 'max-w-reading text-base leading-8 sm:text-lg',
}) {
  return (
    <section className="border-b border-surface-200 bg-gradient-to-b from-surface-50 to-surface-0">
      <div className="container py-16 sm:py-20 lg:py-24">
        <div className={aside ? 'grid gap-8 md:gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-end lg:gap-12' : ''}>
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            description={description}
            className="max-w-[52rem] space-y-6"
            titleClassName={`${titleMaxWidth} text-4xl leading-[1.02] sm:text-5xl lg:text-6xl`}
            descriptionClassName={descriptionClassName}
          />
          {aside ? <Card>{aside}</Card> : null}
        </div>
      </div>
    </section>
  )
}

export default PageHero
