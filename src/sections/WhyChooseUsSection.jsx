const reasons = [
  {
    title: 'Consistent standards',
    description:
      'Detailed service checklists help every visit meet the same polished standard, whether it is a home, office, or managed property.',
  },
  {
    title: 'Professional team experience',
    description:
      'Punctual, respectful cleaners who understand presentation, discretion, and how to work carefully in occupied spaces.',
  },
  {
    title: 'Easy scheduling and support',
    description:
      'Straightforward booking, responsive communication, and flexible recurring plans that fit real client routines.',
  },
  {
    title: 'Service that feels premium',
    description:
      'Thoughtful execution, strong finishing detail, and a reliable experience without unnecessary complexity or upselling.',
  },
]

function WhyChooseUsSection() {
  return (
    <section className="bg-surface-50">
      <div className="container py-18 lg:py-22">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-green-600">
              Why Choose Us
            </p>
            <h2 className="max-w-[12ch]">A more reliable standard of clean.</h2>
            <p className="max-w-reading">
              SparklePro is designed for clients who do not want to manage the cleaning
              process themselves. We bring structure, consistency, and clear communication
              so the service feels as dependable as the result.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <article
                key={reason.title}
                className="rounded-[1.75rem] border border-surface-200 bg-surface-0 p-7 shadow-soft"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green-50 text-sm font-semibold text-brand-green-700">
                  0{index + 1}
                </div>
                <h3 className="mt-6 text-2xl">{reason.title}</h3>
                <p className="mt-4 text-base leading-7 text-surface-500">{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
