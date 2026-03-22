import { Card, SectionHeader } from '../../components/ui'

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
    <section className="border-y border-surface-200/80 bg-surface-50">
      <div className="container section-space">
        <SectionHeader
          eyebrow="Mission and Values"
          title="To make professional cleaning feel seamless and reliable."
          description="Our mission is to give clients confidence in the spaces they live and work in through service that is structured, responsive, and consistently well executed."
          className="max-w-[42rem]"
          titleClassName="max-w-[13ch]"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <Card
              key={value.title}
              className="bg-surface-0"
            >
              <div className="h-12 w-12 rounded-2xl border border-brand-yellow-200 bg-brand-yellow-100"></div>
              <h3 className="mt-6 text-2xl">{value.title}</h3>
              <p className="mt-4">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MissionValuesSection
