const categories = [
  'Residential cleaning',
  'Office and workspace cleaning',
  'Deep cleaning',
  'Move-in / move-out cleaning',
  'Post-construction cleaning',
]

function ServicesCategoriesSection() {
  return (
    <section className="border-b border-surface-200 bg-surface-700">
      <div className="container py-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[34rem]">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-yellow-200">
              Service Categories
            </p>
            <p className="mt-3 text-base leading-7 text-surface-200">
              Practical cleaning support for homes, offices, and properties that need
              a polished presentation and reliable ongoing care.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {categories.map((category) => (
              <div
                key={category}
                className="rounded-full border border-surface-600 bg-surface-700/60 px-4 py-3 text-sm font-medium text-surface-100"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesCategoriesSection
