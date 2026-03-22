const standards = [
  { value: '250+', label: 'recurring monthly service visits supported' },
  { value: '4.9/5', label: 'average client satisfaction across active accounts' },
  { value: '6 days', label: 'a week of flexible service availability' },
  { value: '100%', label: 'focus on structured cleaning standards and follow-through' },
]

function TrustStandardsSection() {
  return (
    <section className="border-y border-surface-200 bg-surface-700">
      <div className="container py-18 lg:py-22">
        <div className="max-w-[42rem] space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-yellow-200">
            Service Standards
          </p>
          <h2 className="text-surface-0">Built to deliver a premium result at a dependable pace.</h2>
          <p className="text-surface-300">
            Our standards are designed around consistency, responsiveness, and the practical
            needs of clients who want service they can confidently schedule again.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {standards.map((item) => (
            <article
              key={item.label}
              className="rounded-[1.75rem] border border-surface-600 bg-surface-700/60 p-7"
            >
              <p className="text-3xl font-semibold text-surface-0">{item.value}</p>
              <p className="mt-3 text-sm leading-6 text-surface-300">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustStandardsSection
