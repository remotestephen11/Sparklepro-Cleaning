const values = [
  {
    title: 'Consistency',
    description:
      'Every visit follows a structured standard so clients know what to expect each time service is scheduled.',
  },
  {
    title: 'Respect',
    description:
      'We work carefully in homes and professional environments, treating every space with discretion and care.',
  },
  {
    title: 'Detail',
    description:
      'A premium clean comes from thoughtful finishing, not just speed. We focus on the details clients notice.',
  },
]

function MissionValuesSection() {
  return (
    <section className="border-y border-surface-200 bg-surface-50">
      <div className="container py-18 lg:py-22">
        <div className="space-y-5">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-green-600">
            Mission and Values
          </p>
          <h2 className="max-w-[14ch]">To make professional cleaning feel seamless and reliable.</h2>
          <p className="max-w-reading">
            Our mission is to give clients confidence in the spaces they live and work in
            through service that is structured, responsive, and consistently well executed.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-[1.75rem] border border-surface-200 bg-surface-0 p-8 shadow-soft"
            >
              <div className="h-12 w-12 rounded-2xl bg-brand-yellow-100"></div>
              <h3 className="mt-6 text-2xl">{value.title}</h3>
              <p className="mt-4">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MissionValuesSection
