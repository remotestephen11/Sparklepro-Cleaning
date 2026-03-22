const steps = [
  {
    step: '01',
    title: 'Tell us about the space',
    description:
      'Share the type of property, size, cleaning priorities, and whether you need recurring or one-time service.',
  },
  {
    step: '02',
    title: 'We recommend the right scope',
    description:
      'Based on your needs, we suggest the appropriate service type, visit frequency, and practical starting point.',
  },
  {
    step: '03',
    title: 'Schedule and maintain the standard',
    description:
      'Once booked, we deliver structured service with clear communication and a consistent cleaning routine.',
  },
]

function ServicesProcessSection() {
  return (
    <section className="border-y border-surface-200 bg-surface-50">
      <div className="container py-18 lg:py-22">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-green-600">
              How It Works
            </p>
            <h2 className="max-w-[12ch]">A simple process that keeps service easy to manage.</h2>
            <p className="max-w-reading">
              We keep onboarding straightforward so clients can move from inquiry to
              scheduled service without confusion or unnecessary back-and-forth.
            </p>
          </div>

          <div className="grid gap-5">
            {steps.map((step) => (
              <article
                key={step.step}
                className="rounded-[1.75rem] border border-surface-200 bg-surface-0 p-7 shadow-soft"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-green-50 text-sm font-semibold text-brand-green-700">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-2xl">{step.title}</h3>
                    <p className="mt-3 text-base leading-7 text-surface-500">{step.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesProcessSection
