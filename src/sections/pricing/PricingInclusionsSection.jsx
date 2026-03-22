const inclusions = [
  'Cleaning scope matched to the type and condition of the space',
  'Flexible service frequency for recurring or one-time visits',
  'Structured routines for visible surfaces and high-touch areas',
  'Clear communication before scheduling and during service planning',
]

function PricingInclusionsSection() {
  return (
    <section className="border-y border-surface-200 bg-surface-50">
      <div className="container py-18 lg:py-22">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-green-600">
              What Is Included
            </p>
            <h2 className="max-w-[12ch]">Every quote is built around service clarity.</h2>
            <p className="max-w-reading">
              Rather than hiding the variables, we explain what shapes the quote and how the
              service scope is determined for each type of property.
            </p>
          </div>

          <div className="grid gap-4">
            {inclusions.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-[1.5rem] border border-surface-200 bg-surface-0 p-6 shadow-soft"
              >
                <span className="mt-1 h-3 w-3 rounded-full bg-brand-yellow-300"></span>
                <p className="text-lg leading-8 text-surface-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingInclusionsSection
