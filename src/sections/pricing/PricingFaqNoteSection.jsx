const notes = [
  {
    question: 'Why does final pricing vary?',
    answer:
      'The size of the space, its condition, the cleaning frequency, and the level of detail requested all affect the final quote.',
  },
  {
    question: 'Can recurring service reduce the rate over time?',
    answer:
      'In many cases, regularly maintained spaces are faster to service consistently, which can improve long-term pricing efficiency.',
  },
  {
    question: 'Do you quote offices and specialty work separately?',
    answer:
      'Yes. Commercial spaces, move-related work, deep cleaning, and post-construction cleanup are typically quoted to scope.',
  },
]

function PricingFaqNoteSection() {
  return (
    <section className="bg-surface-0">
      <div className="container py-18 lg:py-22">
        <div className="max-w-reading space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-green-600">
            Pricing Notes
          </p>
          <h2>Final pricing is confirmed once we understand the space and service needs.</h2>
          <p>
            We use starting-from pricing to keep comparisons easy, but every final quote is
            adjusted to reflect the actual scope of work.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {notes.map((note) => (
            <article
              key={note.question}
              className="rounded-[1.75rem] border border-surface-200 bg-surface-50 p-8 shadow-soft"
            >
              <h3 className="text-2xl leading-9">{note.question}</h3>
              <p className="mt-4 text-base leading-7 text-surface-500">{note.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingFaqNoteSection
