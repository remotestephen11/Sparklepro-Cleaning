function Card({ children, className = '', variant = 'default', revealOrder }) {
  const variantClasses = {
    default: 'border border-surface-200/80 bg-surface-0 shadow-soft',
    muted: 'border border-surface-200/70 bg-surface-50 shadow-soft',
    elevated: 'border border-surface-200/80 bg-surface-0 shadow-card',
    dark: 'border border-surface-600/70 bg-surface-700 shadow-card',
  }

  return (
    <div
      data-reveal
      className={[
        'rounded-[1.75rem] p-6 sm:p-7 lg:p-8',
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={typeof revealOrder === 'number' ? { '--reveal-order': revealOrder } : undefined}
    >
      {children}
    </div>
  )
}

export default Card
