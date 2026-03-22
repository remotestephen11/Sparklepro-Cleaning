import { Card, SectionHeader } from '../../components/ui'

const pricingTiers = [
  {
    name: 'Essential',
    price: 'Starting from $120',
    summary: 'A practical starting point for smaller homes or lighter-maintenance spaces.',
    details: [
      'Best suited for recurring residential upkeep',
      'Flexible weekly, biweekly, or monthly cadence',
      'Ideal when the space is already maintained regularly',
    ],
  },
  {
    name: 'Signature',
    price: 'Starting from $180',
    summary: 'A more detailed recurring service for larger homes, busier households, or spaces with higher daily use.',
    details: [
      'Designed for clients who want a stronger maintenance standard',
      'Often the best fit for families, shared spaces, and premium finishes',
      'Most requested plan for long-term recurring service',
    ],
    featured: true,
  },
  {
    name: 'Custom Scope',
    price: 'Quoted to scope',
    summary: 'Tailored pricing for offices, deep cleaning, move-related work, and post-construction cleanup.',
    details: [
      'Built around the size, condition, and complexity of the property',
      'Suitable for one-time resets and commercial environments',
      'Recommended for specialized or multi-room service needs',
    ],
  },
]

function PricingTierSection() {
  return (
    <section className="bg-surface-0">
      <div className="container section-space">
        <SectionHeader
          eyebrow="Pricing Tiers"
          title="Choose a starting point based on the level of care your space needs."
          description="These tiers are designed to make service comparison easy while still leaving room for a realistic quote that reflects the property and service scope."
          className="max-w-[42rem]"
          titleClassName="max-w-[13ch]"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <Card
              key={tier.name}
              className={[
                index === pricingTiers.length - 1 ? 'md:col-span-2 xl:col-span-1' : '',
                tier.featured
                  ? 'border-brand-yellow-300 bg-brand-yellow-50'
                  : 'bg-surface-50',
              ].join(' ')}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-surface-500">
                    {tier.name}
                  </p>
                  <p className="mt-5 text-3xl font-semibold leading-tight text-surface-700">
                    {tier.price}
                  </p>
                </div>
                {tier.featured ? (
                  <span className="rounded-full bg-surface-700 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-surface-0">
                    Popular
                  </span>
                ) : null}
              </div>

              <p className="mt-5">{tier.summary}</p>

              <div className="mt-8 border-t border-surface-200 pt-6">
                <div className="grid gap-3">
                  {tier.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-green-500"></span>
                      <p className="text-sm leading-6 text-surface-600">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingTierSection
