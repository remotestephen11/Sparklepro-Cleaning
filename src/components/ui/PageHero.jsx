import Card from './Card'
import SectionHeader from './SectionHeader'

function PageHero({
  eyebrow,
  title,
  description,
  aside,
  media,
  mediaCard,
  titleMaxWidth = 'max-w-[12ch]',
  descriptionClassName = 'max-w-reading text-base leading-8 sm:text-lg',
}) {
  return (
    <section className="relative overflow-hidden border-b border-surface-200/80 bg-surface-25">
      <div className="absolute inset-x-0 top-0 h-60 bg-[radial-gradient(circle_at_top_left,rgba(255,212,94,0.18),transparent_40%),radial-gradient(circle_at_right,rgba(59,135,98,0.08),transparent_28%)]" />
      <div className="container relative py-12 sm:py-13 lg:py-14">
        <div
          className={
            aside || media
              ? 'grid gap-6 md:gap-7 lg:grid-cols-[minmax(0,0.98fr)_minmax(20rem,0.86fr)] lg:items-center'
              : ''
          }
        >
          <div className="space-y-6" data-reveal="soft">
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              description={description}
              className="max-w-[46rem] space-y-3.5"
              titleClassName={`${titleMaxWidth} text-[2.35rem] leading-[0.96] sm:text-[2.95rem] lg:text-[3.35rem]`}
              descriptionClassName={`max-w-[29rem] text-[0.93rem] leading-6 ${descriptionClassName}`}
            />
            {aside ? (
              <Card variant="muted" className="relative max-w-[24rem] overflow-hidden bg-surface-0/80">
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand-yellow-200 to-transparent" />
                {aside}
              </Card>
            ) : null}
          </div>

          {media ? (
            <div className="relative" data-reveal="image">
              <div className="absolute -left-6 top-8 hidden h-32 w-32 rounded-full bg-brand-yellow-100 blur-3xl lg:block" />
              <div className="absolute -right-6 bottom-5 hidden h-32 w-32 rounded-full bg-brand-green-100 blur-3xl lg:block" />
              <div className="image-shell relative h-[15.5rem] overflow-hidden rounded-[2rem] sm:h-[18rem] lg:h-[13.5rem] xl:h-[14.5rem]">
                <img src={media.src} alt={media.alt} className="image-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-800/30 via-transparent to-transparent" />
              </div>
              {mediaCard ? (
                <div className="absolute inset-x-4 bottom-4 sm:bottom-4 sm:left-auto sm:right-4 sm:w-[12.5rem]">
                  <Card className="bg-surface-0/95 p-3.5 sm:p-4">
                    {mediaCard}
                  </Card>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default PageHero
