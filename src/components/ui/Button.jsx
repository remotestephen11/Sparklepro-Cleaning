import { Link } from 'react-router-dom'

const variantClasses = {
  primary:
    'bg-brand-green-600 text-white shadow-soft hover:bg-brand-green-700',
  secondary:
    'border border-surface-300 bg-surface-0 text-surface-700 hover:border-surface-400 hover:bg-surface-50',
  accent:
    'bg-brand-yellow-300 text-surface-700 hover:bg-brand-yellow-400',
  inverse:
    'border border-surface-500 text-surface-0 hover:border-surface-300 hover:bg-surface-600',
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
    'inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold no-underline transition',
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
