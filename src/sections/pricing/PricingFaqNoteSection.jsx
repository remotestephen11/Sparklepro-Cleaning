import { Card, SectionHeader } from '../../components/ui'

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
      <div className="container section-space">
        <SectionHeader
          eyebrow="Pricing Notes"
          title="Final pricing is confirmed once we understand the space and service needs."
          description="We use starting-from pricing to keep comparisons easy, but every final quote is adjusted to reflect the actual scope of work."
          className="max-w-[42rem]"
          titleClassName="max-w-[14ch]"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {notes.map((note) => (
            <Card
              key={note.question}
              variant="muted"
              className="bg-surface-50"
            >
              <h3 className="text-2xl leading-9">{note.question}</h3>
              <p className="mt-4 text-base leading-7 text-surface-500">{note.answer}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingFaqNoteSection
