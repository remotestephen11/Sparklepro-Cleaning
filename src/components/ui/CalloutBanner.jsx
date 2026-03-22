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
}) {
  const isDark = tone === 'dark'

  return (
    <section className={isDark ? 'bg-surface-0' : 'bg-surface-50'}>
      <div className="container py-16 sm:py-20 lg:py-24">
        <Card
          variant={isDark ? 'elevated' : 'muted'}
          className={
            isDark
              ? 'rounded-[2rem] bg-surface-700 p-8 lg:p-12'
              : 'rounded-[2rem] bg-surface-50 p-8 lg:p-12'
          }
        >
          <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-center lg:justify-between">
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              description={description}
              invert={isDark}
              className="max-w-[38rem]"
              titleClassName="max-w-[14ch]"
            />

            {aside ? (
              <div className="rounded-[1.5rem] bg-surface-0/5 p-6 lg:p-7">{aside}</div>
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
