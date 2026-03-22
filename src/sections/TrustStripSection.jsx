const trustItems = [
  'Background-checked professionals',
  'Insured and quality-controlled',
  'Flexible recurring plans',
  'Trusted by homes and offices',
]

function TrustStripSection() {
  return (
    <section className="border-y border-surface-200 bg-surface-700">
      <div className="container py-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[34rem]">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-yellow-200">
              Built on trust and consistency
            </p>
            <p className="mt-3 text-base leading-7 text-surface-200">
              Clients choose SparklePro when they want reliable service, careful presentation,
              and a team that treats the space professionally every time.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {trustItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-full border border-surface-600 bg-surface-700/60 px-4 py-3"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-brand-green-400"></span>
                <span className="text-sm font-medium text-surface-100">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustStripSection
