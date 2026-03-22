import { Button, Card, SectionHeader } from '../components/ui'

function CtaBannerSection() {
  return (
    <section className="bg-surface-0">
      <div className="container py-18 lg:py-22">
        <Card variant="elevated" className="overflow-hidden rounded-[2rem] bg-surface-700 p-0">
          <div className="grid gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-14 lg:py-14">
            <SectionHeader
              eyebrow="Ready to get started?"
              title="Book a cleaner, steadier standard for your space."
              description="Tell us about your property, preferred schedule, and service goals. We will recommend the right plan and send a clear quote without the back-and-forth."
              invert
              className="max-w-[38rem]"
              titleClassName="max-w-[14ch] text-surface-0"
            />

            <div className="flex flex-col justify-between gap-8 rounded-[1.5rem] bg-surface-0/5 p-6">
              <div className="space-y-3">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-surface-300">
                  Fast next step
                </p>
                <p className="text-base leading-7 text-surface-200">
                  Most inquiries can be quoted after a short conversation about the
                  size of the space, frequency, and cleaning priorities.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
                <Button to="/contact" variant="accent">
                  Get Your Quote
                </Button>
                <Button to="/pricing" variant="inverse">
                  Review Pricing
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default CtaBannerSection
