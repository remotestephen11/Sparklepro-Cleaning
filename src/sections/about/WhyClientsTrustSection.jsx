const trustReasons = [
  'Background-checked, professional team members',
  'Clear scheduling and responsive communication',
  'Insured service with quality-controlled routines',
  'Flexible support for homes, offices, and managed properties',
]

function WhyClientsTrustSection() {
  return (
    <section className="bg-surface-0">
      <div className="container py-18 lg:py-22">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-green-600">
              Why Clients Trust Us
            </p>
            <h2 className="max-w-[12ch]">Service that feels dependable from the first visit.</h2>
            <p className="max-w-reading">
              Trust is what turns a first-time clean into a long-term relationship. We earn
              that trust through reliability, communication, and consistently polished results.
            </p>
          </div>

          <div className="grid gap-4">
            {trustReasons.map((reason) => (
              <div
                key={reason}
                className="flex items-start gap-4 rounded-[1.5rem] border border-surface-200 bg-surface-50 p-6"
              >
                <span className="mt-1 h-3 w-3 rounded-full bg-brand-green-500"></span>
                <p className="text-lg leading-8 text-surface-600">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyClientsTrustSection
