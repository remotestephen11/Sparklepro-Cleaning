import { Link } from 'react-router-dom'

const pricingTiers = [
  {
    name: 'Essential',
    summary: 'Routine cleaning for smaller homes or lighter-maintenance spaces.',
    price: 'From $120',
    detail: 'Best for regular upkeep',
  },
  {
    name: 'Signature',
    summary: 'A more detailed recurring plan for larger homes, busier families, or higher-use spaces.',
    price: 'From $180',
    detail: 'Most requested recurring option',
    featured: true,
  },
  {
    name: 'Custom',
    summary: 'Tailored quoting for offices, deep cleaning, move-related work, and specialty requests.',
    price: 'Custom quote',
    detail: 'Built around your property and scope',
  },
]

function PricingPreviewSection() {
  return (
    <section className="border-y border-surface-200 bg-surface-0">
      <div className="container py-18 lg:py-22">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-reading space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-green-600">
              Pricing Preview
            </p>
            <h2>Clear pricing guidance before you request a quote.</h2>
            <p>
              We keep pricing practical and transparent. Final quotes depend on the
              size of the space, service frequency, and level of detail, but these
              tiers give a credible starting point.
            </p>
          </div>
          <Link
            to="/pricing"
            className="text-sm font-semibold text-surface-700 no-underline transition hover:text-brand-green-700"
          >
            See pricing details
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              className={[
                'rounded-[1.75rem] border p-8',
                'md:last:col-span-2 xl:last:col-span-1',
                tier.featured
                  ? 'border-brand-yellow-300 bg-brand-yellow-50 shadow-card'
                  : 'border-surface-200 bg-surface-50 shadow-soft',
              ].join(' ')}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-surface-500">
                    {tier.name}
                  </p>
                  <p className="mt-5 text-3xl font-semibold text-surface-700">{tier.price}</p>
                </div>
                {tier.featured ? (
                  <span className="rounded-full bg-surface-700 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-surface-0">
                    Popular
                  </span>
                ) : null}
              </div>
              <p className="mt-5">{tier.summary}</p>
              <div className="mt-8 border-t border-surface-200 pt-5">
                <p className="text-sm font-medium text-surface-600">{tier.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingPreviewSection
