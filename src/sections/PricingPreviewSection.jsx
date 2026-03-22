import { Link } from 'react-router-dom'
import { Card, SectionHeader } from '../components/ui'

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
    <section className="border-y border-surface-200/80 bg-surface-50">
      <div className="container section-space">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Pricing Preview"
            title="Clear pricing guidance before you request a quote."
            description="Practical starting points before a tailored quote."
            className="max-w-[42rem]"
            titleClassName="max-w-[13ch]"
          />
          <Link
            to="/pricing"
            className="text-sm font-semibold text-surface-700 no-underline transition hover:text-brand-green-700"
          >
            See pricing details
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <Card
              key={tier.name}
              revealOrder={index}
              className={[
                'md:last:col-span-2 xl:last:col-span-1',
                tier.featured
                  ? 'border-brand-yellow-300 bg-brand-yellow-50'
                  : 'bg-surface-0',
              ].join(' ')}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-surface-500">
                    {tier.name}
                  </p>
                  <p className="mt-4 text-[1.9rem] font-semibold tracking-[-0.04em] text-surface-700">{tier.price}</p>
                </div>
                {tier.featured ? (
                  <span className="rounded-full bg-surface-700 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-surface-0">
                    Popular
                  </span>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6">{tier.summary}</p>
              <div className="mt-6 border-t border-surface-200 pt-4">
                <p className="text-sm font-medium text-surface-600">{tier.detail}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingPreviewSection
