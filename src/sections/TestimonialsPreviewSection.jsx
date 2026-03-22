import { Card, SectionHeader } from '../components/ui'

const testimonials = [
  {
    quote:
      'They are organized, consistent, and noticeably more detailed than other cleaning services we have used. Our home feels cared for, not just cleaned.',
    name: 'Maya R.',
    role: 'Recurring residential client',
  },
  {
    quote:
      'Our office always feels presentation-ready after each visit, and communication has been easy from day one. The team is reliable and professional.',
    name: 'Daniel K.',
    role: 'Operations manager',
  },
]

function TestimonialsPreviewSection() {
  return (
    <section className="bg-surface-50">
      <div className="container section-space">
        <div className="grid gap-10 xl:grid-cols-[0.82fr_1.18fr] xl:items-start">
          <SectionHeader
            eyebrow="Testimonials Preview"
            title="Trusted by clients who notice the difference in the details."
            description="The strongest signal for a cleaning business is repeat trust. These comments reflect the kind of reliability, polish, and consistency we aim to provide on every visit."
            className="max-w-[36rem]"
            titleClassName="max-w-[12ch]"
          />

          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="bg-surface-0"
              >
                <div className="text-4xl leading-none text-brand-yellow-400">"</div>
                <p className="mt-4 text-lg leading-8 text-surface-600">{testimonial.quote}</p>
                <div className="mt-8 border-t border-surface-200 pt-5">
                  <p className="font-semibold text-surface-700">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-surface-500">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsPreviewSection
