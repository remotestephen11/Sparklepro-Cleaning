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
      <div className="container relative py-9 sm:py-10 lg:py-11">
        <div
          className={
            aside || media
              ? 'grid gap-7 lg:grid-cols-[minmax(0,0.78fr)_minmax(32rem,1.02fr)] lg:items-center xl:grid-cols-[minmax(0,0.76fr)_minmax(36rem,1.06fr)]'
              : ''
          }
        >
          <div className="max-w-[34rem] space-y-5" data-reveal="soft">
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              description={description}
              className="max-w-[36rem] space-y-3"
              titleClassName={`${titleMaxWidth} text-[2.15rem] leading-[0.96] sm:text-[2.65rem] lg:text-[3rem]`}
              descriptionClassName={`max-w-[27rem] text-[0.93rem] leading-6 ${descriptionClassName}`}
            />
            {aside ? (
              <Card variant="muted" className="relative max-w-[22rem] overflow-hidden bg-surface-0/88">
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand-yellow-200 to-transparent" />
                {aside}
              </Card>
            ) : null}
          </div>

          {media ? (
            <div className="relative lg:justify-self-end" data-reveal="image">
              <div className="absolute -left-8 top-8 hidden h-32 w-32 rounded-full bg-brand-yellow-100 blur-3xl lg:block" />
              <div className="absolute -right-6 bottom-5 hidden h-32 w-32 rounded-full bg-brand-green-100 blur-3xl lg:block" />
              <div className="image-shell relative h-[16rem] overflow-hidden rounded-[2rem] sm:h-[18rem] lg:w-[34rem] lg:h-[15rem] xl:w-[38rem] xl:h-[16.5rem]">
                <img src={media.src} alt={media.alt} className="image-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-800/30 via-transparent to-transparent" />
              </div>
              {mediaCard ? (
                <div className="absolute inset-x-4 bottom-4 sm:left-auto sm:right-4 sm:w-[13rem]">
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
