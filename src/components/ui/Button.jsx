import { Link } from 'react-router-dom'

const variantClasses = {
  primary:
    'bg-brand-green-600 text-white shadow-soft hover:-translate-y-0.5 hover:bg-brand-green-700 hover:shadow-card',
  secondary:
    'border border-surface-200 bg-surface-0 text-surface-700 shadow-inset hover:-translate-y-0.5 hover:border-surface-300 hover:bg-surface-50 hover:shadow-soft',
  accent:
    'bg-brand-yellow-300 text-surface-800 shadow-soft hover:-translate-y-0.5 hover:bg-brand-yellow-400 hover:shadow-card',
  inverse:
    'border border-surface-400/50 bg-surface-0/5 text-surface-0 hover:-translate-y-0.5 hover:border-surface-300 hover:bg-surface-0/10 hover:shadow-soft',
}

function Button({
  children,
  className = '',
  href,
  to,
  type = 'button',
  variant = 'primary',
  ...props
}) {
  const classes = [
    'inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-[0.82rem] font-semibold uppercase tracking-[0.16em] no-underline transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0 disabled:pointer-events-none disabled:opacity-60',
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
