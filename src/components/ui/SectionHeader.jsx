function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  invert = false,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
  reveal = true,
}) {
  const alignmentClass = align === 'center' ? 'text-center' : ''
  const eyebrowColor = invert
    ? 'border-surface-500/70 bg-surface-0/5 text-brand-yellow-200'
    : 'border-surface-200/80 bg-surface-0 text-brand-green-700'
  const titleColor = invert ? 'text-surface-0' : 'text-surface-700'
  const descriptionColor = invert ? 'text-surface-200' : 'text-surface-500'

  return (
    <div data-reveal={reveal ? true : undefined} className={['space-y-4', alignmentClass, className].filter(Boolean).join(' ')}>
      {eyebrow ? (
        <p
          className={[
            'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] shadow-inset',
            eyebrowColor,
          ].join(' ')}
        >
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2 className={['max-w-[14ch]', titleColor, titleClassName].filter(Boolean).join(' ')}>
          {title}
        </h2>
      ) : null}
      {description ? (
        <p
          className={[
            align === 'center' ? 'mx-auto' : '',
            'max-w-reading text-[0.98rem] leading-7 sm:text-base sm:leading-8',
            descriptionColor,
            descriptionClassName,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeader
