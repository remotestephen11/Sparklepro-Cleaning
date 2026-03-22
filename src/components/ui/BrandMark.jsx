import { Link } from 'react-router-dom'

function BrandMark({ as = 'link', className = '', compact = false, tone = 'light' }) {
  const textColor = tone === 'dark' ? 'text-surface-0' : 'text-surface-700'
  const subColor = tone === 'dark' ? 'text-surface-300' : 'text-surface-400'

  const content = (
    <div className={['flex items-center', compact ? 'gap-3' : 'gap-3.5', className].filter(Boolean).join(' ')}>
      <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[1.2rem] border border-brand-yellow-200/80 bg-[linear-gradient(160deg,#ffe79a_0%,#ffd45e_48%,#ecbf2c_100%)] text-surface-800 shadow-soft sm:h-12 sm:w-12">
        <span className="absolute inset-[1px] rounded-[1.05rem] border border-white/35" />
        <span className="absolute right-[9px] top-[8px] h-1.5 w-1.5 rounded-full bg-white/80" />
        <span className="font-premium text-[1.2rem] not-italic tracking-[-0.08em]">SP</span>
      </div>
      <div className="min-w-0">
        <p className={['truncate text-[0.98rem] font-semibold leading-5 tracking-[-0.04em]', textColor].join(' ')}>
          SparklePro
        </p>
        <p className={['truncate text-[0.68rem] font-semibold uppercase tracking-[0.24em]', subColor].join(' ')}>
          Cleaning Services
        </p>
      </div>
    </div>
  )

  if (as === 'static') {
    return content
  }

  return (
    <Link to="/" className={['min-w-0 no-underline', textColor].join(' ')} aria-label="SparklePro Cleaning Services home">
      {content}
    </Link>
  )
}

export default BrandMark
