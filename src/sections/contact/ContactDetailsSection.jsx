import { ContactQuoteForm } from '../../components/ui'

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
      <div className="container py-18 lg:py-22">
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-surface-200 bg-surface-50 p-8 shadow-soft">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-green-600">
                Contact Details
              </p>
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
            </div>

            <div className="rounded-[1.75rem] border border-surface-200 bg-surface-0 p-8 shadow-soft">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-green-600">
                Business Hours
              </p>
              <div className="mt-6 grid gap-3">
                {hours.map((item) => (
                  <p key={item} className="text-base leading-7 text-surface-600">
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-surface-200 bg-surface-700 p-8 shadow-soft">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-yellow-200">
                Service Area
              </p>
              <p className="mt-4 text-base leading-7 text-surface-200">
                We serve select residential neighborhoods, offices, and managed properties
                within our active coverage area. Share your location and we will confirm
                availability with your quote.
              </p>
            </div>
          </div>

          <ContactQuoteForm />
        </div>
      </div>
    </section>
  )
}

export default ContactDetailsSection
