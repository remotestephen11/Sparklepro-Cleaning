import { Card, SectionHeader, ContactQuoteForm } from '../../components/ui'

const contactMethods = [
  {
    title: 'Phone',
    value: '(123) 456-7890',
    note: 'For direct service questions and scheduling support.',
  },
  {
    title: 'Email',
    value: 'hello@sparkleprocleaning.com',
    note: 'Best for quote requests and property details.',
  },
]

const hours = [
  'Monday to Friday: 8:00 AM to 6:00 PM',
  'Saturday: 9:00 AM to 4:00 PM',
  'Sunday: Closed',
]

function ContactDetailsSection() {
  return (
    <section className="bg-surface-0">
      <div className="container section-space">
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          <div className="space-y-6">
            <Card variant="muted" className="bg-surface-50">
              <SectionHeader
                eyebrow="Contact Details"
                title="Reach us directly."
                description="Use the method that fits your question best, or send a detailed quote request through the form."
                titleClassName="max-w-[12ch] text-[2rem] sm:text-[2.25rem]"
              />
              <div className="mt-6 grid gap-6">
                {contactMethods.map((item) => (
                  <div key={item.title}>
                    <p className="text-sm font-medium uppercase tracking-[0.12em] text-surface-500">
                      {item.title}
                    </p>
                    <p className="mt-2 text-xl font-semibold text-surface-700">{item.value}</p>
                    <p className="mt-2 text-sm leading-6 text-surface-500">{item.note}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-surface-0">
              <p className="eyebrow-label">
                Business Hours
              </p>
              <div className="mt-6 grid gap-3">
                {hours.map((item) => (
                  <p key={item} className="text-base leading-7 text-surface-600">
                    {item}
                  </p>
                ))}
              </div>
            </Card>

            <Card variant="dark" className="bg-surface-700">
              <p className="eyebrow-label border-transparent bg-surface-0/5 text-brand-yellow-200 shadow-none">
                Service Area
              </p>
              <p className="mt-4 text-base leading-7 text-surface-200">
                We serve select residential neighborhoods, offices, and managed properties
                within our active coverage area. Share your location and we will confirm
                availability with your quote.
              </p>
            </Card>
          </div>

          <ContactQuoteForm />
        </div>
      </div>
    </section>
  )
}

export default ContactDetailsSection
