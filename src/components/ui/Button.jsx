import { Link } from 'react-router-dom'

const variantClasses = {
  primary:
    'bg-brand-green-600 text-white shadow-soft hover:bg-brand-green-700 hover:shadow-card',
  secondary:
    'border border-surface-200 bg-surface-0 text-surface-700 shadow-inset hover:border-surface-300 hover:bg-surface-50',
  accent:
    'bg-brand-yellow-300 text-surface-800 shadow-soft hover:bg-brand-yellow-400 hover:shadow-card',
  inverse:
    'border border-surface-400/50 bg-surface-0/5 text-surface-0 hover:border-surface-300 hover:bg-surface-0/10',
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
    'inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold tracking-[0.01em] no-underline transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0 disabled:pointer-events-none disabled:opacity-60',
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
