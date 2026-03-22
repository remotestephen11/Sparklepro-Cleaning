import { Button } from '../components/ui'

function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-surface-200/80 bg-surface-25">
      <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(255,212,94,0.22),transparent_42%),radial-gradient(circle_at_right,rgba(59,135,98,0.09),transparent_30%)]" />
      <div className="container relative section-space">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] lg:items-center">
          <div className="max-w-content">
            <div className="eyebrow-label border-brand-yellow-200/70 bg-brand-yellow-50 text-surface-700">
              Trusted recurring cleaning for homes, offices, and managed properties
            </div>

            <div className="mt-8 space-y-6">
              <h1 className="max-w-[10.5ch] text-[3.1rem] leading-[0.96] sm:text-[4rem] lg:text-[5.2rem]">
                Cleaning for spaces that need to feel quietly impressive.
              </h1>
              <p className="max-w-[38rem] text-base leading-8 text-surface-500 sm:text-lg">
                SparklePro delivers dependable residential and workplace cleaning with
                detail-focused teams, organized scheduling, and a presentation standard
                clients can confidently maintain week after week.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button to="/contact">
                Get a Free Estimate
              </Button>
              <Button to="/services" variant="secondary">
                View Services
              </Button>
            </div>

            <div className="mt-12 grid gap-4 border-t border-surface-200/80 pt-8 md:grid-cols-3">
              <div>
                <p className="text-[2rem] font-semibold tracking-[-0.04em] text-surface-700">250+</p>
                <p className="mt-2 text-sm leading-6 text-surface-500">
                  recurring residential and commercial visits completed monthly
                </p>
              </div>
              <div>
                <p className="text-[2rem] font-semibold tracking-[-0.04em] text-surface-700">4.9/5</p>
                <p className="mt-2 text-sm leading-6 text-surface-500">
                  average rating from clients who value consistency and detail
                </p>
              </div>
              <div>
                <p className="text-[2rem] font-semibold tracking-[-0.04em] text-surface-700">Insured</p>
                <p className="mt-2 text-sm leading-6 text-surface-500">
                  professional team with clear communication and quality control
                </p>
              </div>
            </div>
          </div>

          <div className="surface-panel relative overflow-hidden rounded-[2rem] bg-surface-0 p-6 lg:p-8">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand-yellow-200 to-transparent" />
            <div className="rounded-[1.5rem] border border-surface-200/70 bg-surface-50 p-6">
              <p className="eyebrow-label border-transparent bg-surface-0/70 text-brand-green-700 shadow-none">
                Why clients book with confidence
              </p>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-brand-yellow-300"></div>
                  <div>
                    <p className="font-semibold text-surface-700">Consistent recurring care</p>
                    <p className="mt-1 text-sm leading-6 text-surface-500">
                      Weekly, biweekly, and custom service plans that stay on schedule.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-brand-green-500"></div>
                  <div>
                    <p className="font-semibold text-surface-700">Detail-driven finishing</p>
                    <p className="mt-1 text-sm leading-6 text-surface-500">
                      Kitchens, bathrooms, floors, and high-touch areas handled with care.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-brand-red-400"></div>
                  <div>
                    <p className="font-semibold text-surface-700">Responsive account support</p>
                    <p className="mt-1 text-sm leading-6 text-surface-500">
                      Clear scheduling, fast follow-up, and straightforward communication.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.5rem] bg-surface-700 p-6 text-surface-100 shadow-card">
                <p className="eyebrow-label border-transparent bg-surface-0/5 text-brand-yellow-200 shadow-none">
                  Service coverage
                </p>
                <p className="mt-5 text-xl font-semibold leading-8 text-surface-0">
                  Residential cleaning, office upkeep, deep cleans, and move-in or move-out service.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-surface-200/80 bg-surface-0 p-6 shadow-inset">
                <p className="eyebrow-label border-transparent bg-surface-50 text-surface-500 shadow-none">
                  Booking process
                </p>
                <div className="mt-5 space-y-3">
                  <p className="text-sm leading-6 text-surface-600">
                    1. Share your space and cleaning needs
                  </p>
                  <p className="text-sm leading-6 text-surface-600">
                    2. Receive a clear service recommendation
                  </p>
                  <p className="text-sm leading-6 text-surface-600">
                    3. Choose a plan and schedule your first visit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
