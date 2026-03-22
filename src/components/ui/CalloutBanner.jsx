import Button from './Button'
import Card from './Card'
import SectionHeader from './SectionHeader'

function CalloutBanner({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  tone = 'light',
  aside,
  media,
}) {
  const isDark = tone === 'dark'

  return (
    <section className={isDark ? 'bg-surface-25' : 'bg-surface-50'}>
      <div className="container section-space">
        <Card
          variant={isDark ? 'elevated' : 'muted'}
          className={
            isDark
              ? 'relative overflow-hidden rounded-[2rem] border-surface-600/70 bg-surface-700 p-8 lg:p-12'
              : 'relative overflow-hidden rounded-[2rem] bg-surface-50 p-8 lg:p-12'
          }
        >
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-brand-yellow-200/80 to-transparent" />
          <div className="relative flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-center lg:justify-between">
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              description={description}
              invert={isDark}
              className="max-w-[38rem]"
              titleClassName="max-w-[13ch]"
            />

            {media ? (
              <div className="grid gap-5 lg:grid-cols-[minmax(0,17rem)_minmax(0,16rem)] lg:items-end">
                <div className="image-shell aspect-[0.88] rounded-[1.75rem]">
                  <img src={media.src} alt={media.alt} className="image-cover" />
                </div>
                <div className="rounded-[1.5rem] border border-surface-500/20 bg-surface-0/5 p-6 lg:p-7">
                  {aside}
                </div>
              </div>
            ) : aside ? (
              <div className="rounded-[1.5rem] border border-surface-500/20 bg-surface-0/5 p-6 lg:p-7">
                {aside}
              </div>
            ) : (
              <div className="flex flex-col gap-4 sm:flex-row">
                {primaryAction ? (
                  <Button to={primaryAction.to} variant={isDark ? 'accent' : 'primary'} className="w-full sm:w-auto">
                    {primaryAction.label}
                  </Button>
                ) : null}
                {secondaryAction ? (
                  <Button to={secondaryAction.to} variant={isDark ? 'inverse' : 'secondary'} className="w-full sm:w-auto">
                    {secondaryAction.label}
                  </Button>
                ) : null}
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  )
}

export default CalloutBanner
