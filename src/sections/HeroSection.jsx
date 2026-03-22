import { Button } from '../components/ui'
import { siteImages } from '../data/siteImages'

function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-surface-200/80 bg-surface-25">
      <div className="absolute inset-x-0 top-0 h-[24rem] bg-[radial-gradient(circle_at_top_left,rgba(255,212,94,0.18),transparent_38%),radial-gradient(circle_at_right,rgba(59,135,98,0.12),transparent_28%)]" />
      <div className="container relative max-w-hero py-11 sm:py-13 lg:py-14">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(18rem,0.9fr)] lg:items-center lg:gap-8">
          <div className="max-w-[34rem]">
            <div className="eyebrow-label border-brand-yellow-200/70 bg-brand-yellow-50 text-surface-700">
              Premium recurring cleaning for homes and workplaces
            </div>

            <div className="mt-5 space-y-4">
              <h1 className="max-w-[9ch] text-[2.5rem] leading-[0.94] sm:text-[3.2rem] lg:text-[3.75rem]">
                Cleaning that keeps your space <span className="font-premium italic text-surface-600">beautifully kept</span>.
              </h1>
              <p className="max-w-[28rem] text-[0.93rem] leading-6 text-surface-500 sm:text-[0.98rem] sm:leading-7">
                Recurring cleaning, deep resets, and office upkeep delivered with a polished,
                reliable standard.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact">
                Get a Free Estimate
              </Button>
              <Button to="/services" variant="secondary">
                View Services
              </Button>
            </div>

            <div className="mt-6 grid gap-3 border-t border-surface-200/80 pt-4 md:grid-cols-3">
              <div>
                <p className="text-[1.65rem] font-semibold tracking-[-0.04em] text-surface-700">250+</p>
                <p className="mt-1.5 text-sm leading-5 text-surface-500">
                  monthly recurring visits
                </p>
              </div>
              <div>
                <p className="text-[1.65rem] font-semibold tracking-[-0.04em] text-surface-700">4.9/5</p>
                <p className="mt-1.5 text-sm leading-5 text-surface-500">
                  average client rating
                </p>
              </div>
              <div>
                <p className="text-[1.65rem] font-semibold tracking-[-0.04em] text-surface-700">Insured</p>
                <p className="mt-1.5 text-sm leading-5 text-surface-500">
                  professional team and quality control
                </p>
              </div>
            </div>
          </div>

          <div className="relative" data-reveal>
            <div className="absolute -left-4 top-8 hidden h-32 w-32 rounded-full bg-brand-yellow-100 blur-3xl lg:block" />
            <div className="absolute -right-6 bottom-6 hidden h-40 w-40 rounded-full bg-brand-green-100 blur-3xl lg:block" />
            <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_8.5rem]">
              <div className="image-shell relative aspect-[0.74] rounded-[2rem]">
                <img
                  src={siteImages.heroLivingRoom.src}
                  alt={siteImages.heroLivingRoom.alt}
                  className="image-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-800/35 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-surface-0/90 px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-surface-600 shadow-soft">
                  SparklePro standard
                </div>
                <div className="absolute bottom-4 left-4 right-4 max-w-[11.5rem] rounded-[1.25rem] bg-surface-0/92 p-3.5 shadow-card backdrop-blur">
                  <p className="section-kicker text-brand-green-700">Client trust</p>
                  <p className="mt-1.5 text-[0.92rem] font-semibold leading-5 tracking-[-0.03em] text-surface-700">
                    Presentation-ready finishes and discreet recurring care.
                  </p>
                </div>
              </div>

              <div className="grid gap-3">
                <div className="image-shell aspect-[0.72] rounded-[1.35rem]">
                  <img
                    src={siteImages.kitchenDetail.src}
                    alt={siteImages.kitchenDetail.alt}
                    className="image-cover"
                  />
                </div>
                <div className="surface-panel rounded-[1.35rem] bg-surface-0 p-3.5">
                  <p className="section-kicker text-brand-green-700">Why clients stay</p>
                  <div className="mt-2.5 space-y-2">
                    <div>
                      <p className="text-sm font-semibold text-surface-700">Tailored plans</p>
                      <p className="mt-1 text-sm leading-5 text-surface-500">Recurring, one-time, and property-specific scopes.</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-surface-700">Quiet professionalism</p>
                      <p className="mt-1 text-sm leading-5 text-surface-500">Reliable teams and clear communication.</p>
                    </div>
                  </div>
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
