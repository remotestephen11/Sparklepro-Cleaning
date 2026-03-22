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
      <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top_left,rgba(255,212,94,0.18),transparent_40%),radial-gradient(circle_at_right,rgba(59,135,98,0.08),transparent_28%)]" />
      <div className="container relative py-11 sm:py-12 lg:py-13">
        <div
          className={
            aside || media
              ? 'grid gap-6 md:gap-7 lg:grid-cols-[minmax(0,1.08fr)_minmax(12rem,0.42fr)] lg:items-center'
              : ''
          }
        >
          <div className="space-y-6">
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              description={description}
              className="max-w-[44rem] space-y-3"
              titleClassName={`${titleMaxWidth} text-[2.15rem] leading-[0.96] sm:text-[2.75rem] lg:text-[3.15rem]`}
              descriptionClassName={`max-w-[27rem] text-[0.92rem] leading-6 ${descriptionClassName}`}
            />
            {aside ? (
              <Card variant="muted" className="relative max-w-[22rem] overflow-hidden bg-surface-0/80">
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand-yellow-200 to-transparent" />
                {aside}
              </Card>
            ) : null}
          </div>

          {media ? (
            <div className="relative" data-reveal>
              <div className="absolute -left-5 top-8 hidden h-24 w-24 rounded-full bg-brand-yellow-100 blur-3xl lg:block" />
              <div className="absolute -right-6 bottom-5 hidden h-24 w-24 rounded-full bg-brand-green-100 blur-3xl lg:block" />
              <div className="image-shell relative aspect-[0.38] overflow-hidden rounded-[1.75rem]">
                <img src={media.src} alt={media.alt} className="image-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-800/30 via-transparent to-transparent" />
              </div>
              {mediaCard ? (
                <div className="absolute inset-x-4 bottom-4 sm:bottom-4 sm:left-auto sm:right-4 sm:w-[10rem]">
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
