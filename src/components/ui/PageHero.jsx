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
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,rgba(255,212,94,0.18),transparent_40%),radial-gradient(circle_at_right,rgba(59,135,98,0.08),transparent_28%)]" />
      <div className="container relative py-14 sm:py-15 lg:py-18">
        <div
          className={
            aside || media
              ? 'grid gap-7 md:gap-8 lg:grid-cols-[minmax(0,0.98fr)_minmax(18rem,0.82fr)] lg:items-center'
              : ''
          }
        >
          <div className="space-y-8">
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              description={description}
              className="max-w-[48rem] space-y-4"
              titleClassName={`${titleMaxWidth} text-[2.45rem] leading-[0.95] sm:text-[3.15rem] lg:text-[3.7rem]`}
              descriptionClassName={`max-w-[30rem] text-[0.95rem] leading-7 ${descriptionClassName}`}
            />
            {aside ? (
              <Card variant="muted" className="relative max-w-[25rem] overflow-hidden bg-surface-0/80">
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand-yellow-200 to-transparent" />
                {aside}
              </Card>
            ) : null}
          </div>

          {media ? (
            <div className="relative" data-reveal>
              <div className="absolute -left-6 top-10 hidden h-40 w-40 rounded-full bg-brand-yellow-100 blur-3xl lg:block" />
              <div className="absolute -right-8 bottom-6 hidden h-40 w-40 rounded-full bg-brand-green-100 blur-3xl lg:block" />
              <div className="image-shell relative aspect-[0.72] overflow-hidden rounded-[2rem]">
                <img src={media.src} alt={media.alt} className="image-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-800/30 via-transparent to-transparent" />
              </div>
              {mediaCard ? (
                <div className="absolute inset-x-4 bottom-4 sm:bottom-5 sm:left-auto sm:right-4 sm:w-[14rem]">
                  <Card className="bg-surface-0/95 p-4 sm:p-5">
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
