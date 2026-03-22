import { Button } from '../components/ui'

function HeroSection() {
  return (
    <section className="border-b border-surface-200 bg-gradient-to-b from-surface-50 to-surface-0">
      <div className="container py-16 sm:py-18 lg:py-22">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] lg:items-center">
          <div className="max-w-content">
            <div className="inline-flex rounded-full border border-brand-yellow-300 bg-brand-yellow-50 px-4 py-2 text-sm font-medium text-surface-700">
              Trusted recurring cleaning for homes, offices, and managed properties
            </div>

            <div className="mt-8 space-y-6">
              <h1 className="max-w-[11ch] text-5xl leading-[1.02] sm:text-6xl">
                Premium cleaning that keeps every space presentation-ready.
              </h1>
              <p className="max-w-[38rem] text-lg leading-8 text-surface-500">
                SparklePro Cleaning Services delivers polished, dependable care for
                busy households and professional workplaces with flexible scheduling,
                detail-focused teams, and a standard clients can rely on.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button to="/contact">
                Get a Free Estimate
              </Button>
              <Button to="/services" variant="secondary">
                View Services
              </Button>
            </div>

            <div className="mt-10 grid gap-5 border-t border-surface-200 pt-8 md:grid-cols-3">
              <div>
                <p className="text-3xl font-semibold text-surface-700">250+</p>
                <p className="mt-2 text-sm leading-6 text-surface-500">
                  recurring residential and commercial visits completed monthly
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-surface-700">4.9/5</p>
                <p className="mt-2 text-sm leading-6 text-surface-500">
                  average rating from clients who value consistency and detail
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-surface-700">Insured</p>
                <p className="mt-2 text-sm leading-6 text-surface-500">
                  professional team with clear communication and quality control
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-surface-200 bg-surface-0 p-6 shadow-card lg:p-8">
            <div className="rounded-[1.5rem] bg-surface-50 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-green-600">
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
              <div className="rounded-[1.5rem] bg-surface-700 p-6 text-surface-100">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-yellow-200">
                  Service coverage
                </p>
                <p className="mt-4 text-xl font-semibold leading-8 text-surface-0">
                  Residential cleaning, office upkeep, deep cleans, and move-in or move-out service.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-surface-200 bg-surface-0 p-6">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-surface-500">
                  Booking process
                </p>
                <div className="mt-4 space-y-3">
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
