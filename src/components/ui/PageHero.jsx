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
    <section className="relative overflow-hidden border-b border-surface-200/80 bg-surface-25">
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top_left,rgba(255,212,94,0.18),transparent_40%),radial-gradient(circle_at_right,rgba(59,135,98,0.08),transparent_28%)]" />
      <div className="container relative section-space">
        <div
          className={
            aside
              ? 'grid gap-8 md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.92fr)] lg:items-end lg:gap-12'
              : ''
          }
        >
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            description={description}
            className="max-w-[54rem] space-y-6"
            titleClassName={`${titleMaxWidth} text-[2.9rem] leading-[0.98] sm:text-[3.7rem] lg:text-[4.6rem]`}
            descriptionClassName={descriptionClassName}
          />
          {aside ? (
            <Card variant="muted" className="relative overflow-hidden">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand-yellow-200 to-transparent" />
              {aside}
            </Card>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default PageHero
