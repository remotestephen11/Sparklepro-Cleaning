function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  invert = false,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
}) {
  const alignmentClass = align === 'center' ? 'text-center' : ''
  const eyebrowColor = invert ? 'text-brand-yellow-200' : 'text-brand-green-600'
  const titleColor = invert ? 'text-surface-0' : 'text-surface-700'
  const descriptionColor = invert ? 'text-surface-300' : 'text-surface-500'

  return (
    <div className={['space-y-5', alignmentClass, className].filter(Boolean).join(' ')}>
      {eyebrow ? (
        <p className={['text-sm font-medium uppercase tracking-[0.16em]', eyebrowColor].join(' ')}>
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2 className={[titleColor, titleClassName].filter(Boolean).join(' ')}>
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className={['max-w-reading', descriptionColor, descriptionClassName].filter(Boolean).join(' ')}>
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeader
