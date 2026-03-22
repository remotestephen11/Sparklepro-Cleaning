const trustItems = [
  'Vetted professionals',
  'Flexible scheduling',
  'Tailored cleaning plans',
  'Premium finishing standard',
]

function TrustStripSection() {
  return (
    <section className="border-y border-surface-200/80 bg-surface-800">
      <div className="container section-space-tight">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[34rem]" data-reveal="soft">
            <p className="eyebrow-label border-surface-500/70 bg-surface-0/5 text-brand-yellow-200 shadow-none">
              Built on trust and consistency
            </p>
            <p className="mt-3 text-base leading-7 text-surface-200">
              Clients choose SparklePro when they want reliable service, careful presentation,
              and a team that treats the space professionally every time.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {trustItems.map((item, index) => (
              <div
                key={item}
                data-reveal="soft"
                className="flex items-center gap-3 rounded-full border border-surface-600/70 bg-surface-700/80 px-4 py-3 shadow-inset transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-surface-500/70 hover:bg-surface-700"
                style={{ '--reveal-order': index }}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-0/10 text-brand-yellow-200">
                  +
                </span>
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
