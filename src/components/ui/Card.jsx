function Card({ children, className = '', variant = 'default' }) {
  const variantClasses = {
    default: 'border border-surface-200 bg-surface-0 shadow-soft',
    muted: 'border border-surface-200 bg-surface-50 shadow-soft',
    elevated: 'border border-surface-200 bg-surface-0 shadow-card',
    dark: 'border border-surface-600 bg-surface-700/60',
  }

  return (
    <div
      className={[
        'rounded-[1.75rem] p-6 sm:p-8',
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}

export default Card
