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
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top_left,rgba(255,212,94,0.18),transparent_40%),radial-gradient(circle_at_right,rgba(59,135,98,0.08),transparent_28%)]" />
      <div className="container relative section-space">
        <div
          className={
            aside || media
              ? 'grid gap-10 md:gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,1.05fr)] lg:items-center'
              : ''
          }
        >
          <div className="space-y-8">
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              description={description}
              className="max-w-[54rem] space-y-6"
              titleClassName={`${titleMaxWidth} text-[3rem] leading-[0.94] sm:text-[4rem] lg:text-[4.85rem]`}
              descriptionClassName={descriptionClassName}
            />
            {aside ? (
              <Card variant="muted" className="relative max-w-[32rem] overflow-hidden bg-surface-0/80">
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand-yellow-200 to-transparent" />
                {aside}
              </Card>
            ) : null}
          </div>

          {media ? (
            <div className="relative">
              <div className="absolute -left-6 top-10 hidden h-40 w-40 rounded-full bg-brand-yellow-100 blur-3xl lg:block" />
              <div className="absolute -right-8 bottom-6 hidden h-40 w-40 rounded-full bg-brand-green-100 blur-3xl lg:block" />
              <div className="image-shell relative aspect-[0.94] overflow-hidden rounded-[2.5rem]">
                <img src={media.src} alt={media.alt} className="image-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-800/30 via-transparent to-transparent" />
              </div>
              {mediaCard ? (
                <div className="absolute inset-x-4 bottom-4 sm:bottom-6 sm:left-auto sm:right-6 sm:w-[18rem]">
                  <Card className="bg-surface-0/95 p-5 sm:p-6">
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
