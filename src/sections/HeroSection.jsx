import { Button } from '../components/ui'
import { siteImages } from '../data/siteImages'

function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-surface-200/80 bg-surface-25">
      <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(255,212,94,0.18),transparent_38%),radial-gradient(circle_at_right,rgba(59,135,98,0.12),transparent_28%)]" />
      <div className="container relative max-w-hero py-16 sm:py-18 lg:py-22">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(21rem,1.06fr)] lg:items-center lg:gap-12">
          <div className="max-w-[36rem]">
            <div className="eyebrow-label border-brand-yellow-200/70 bg-brand-yellow-50 text-surface-700">
              Premium recurring cleaning for refined homes and professional spaces
            </div>

            <div className="mt-8 space-y-6">
              <h1 className="max-w-[9.8ch] text-[2.9rem] leading-[0.93] sm:text-[3.85rem] lg:text-[4.75rem]">
                Cleaning that keeps your space <span className="font-premium italic text-surface-600">beautifully kept</span>.
              </h1>
              <p className="max-w-[33rem] text-[0.98rem] leading-7 text-surface-500 sm:text-base sm:leading-8">
                SparklePro provides polished recurring cleaning, deep resets, and office upkeep
                for clients who value discretion, consistency, and a premium standard that lasts
                beyond the day of service.
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

            <div className="mt-10 grid gap-4 border-t border-surface-200/80 pt-6 md:grid-cols-3">
              <div>
                <p className="text-[1.8rem] font-semibold tracking-[-0.04em] text-surface-700">250+</p>
                <p className="mt-2 text-sm leading-6 text-surface-500">
                  recurring residential and commercial visits completed monthly
                </p>
              </div>
              <div>
                <p className="text-[1.8rem] font-semibold tracking-[-0.04em] text-surface-700">4.9/5</p>
                <p className="mt-2 text-sm leading-6 text-surface-500">
                  average rating from clients who value consistency and detail
                </p>
              </div>
              <div>
                <p className="text-[1.8rem] font-semibold tracking-[-0.04em] text-surface-700">Insured</p>
                <p className="mt-2 text-sm leading-6 text-surface-500">
                  professional team with clear communication and quality control
                </p>
              </div>
            </div>
          </div>

          <div className="relative" data-reveal>
            <div className="absolute -left-4 top-10 hidden h-40 w-40 rounded-full bg-brand-yellow-100 blur-3xl lg:block" />
            <div className="absolute -right-8 bottom-8 hidden h-48 w-48 rounded-full bg-brand-green-100 blur-3xl lg:block" />
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_10rem]">
              <div className="image-shell relative aspect-[0.92] rounded-[2.25rem]">
                <img
                  src={siteImages.heroLivingRoom.src}
                  alt={siteImages.heroLivingRoom.alt}
                  className="image-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-800/35 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-surface-0/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-surface-600 shadow-soft">
                  SparklePro standard
                </div>
                <div className="absolute bottom-4 left-4 right-4 max-w-[14rem] rounded-[1.5rem] bg-surface-0/92 p-4 shadow-card backdrop-blur">
                  <p className="section-kicker text-brand-green-700">Client trust</p>
                  <p className="mt-2 text-[1.02rem] font-semibold leading-7 tracking-[-0.03em] text-surface-700">
                    Presentation-ready finishes with discreet recurring support.
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="image-shell aspect-[0.86] rounded-[1.5rem]">
                  <img
                    src={siteImages.kitchenDetail.src}
                    alt={siteImages.kitchenDetail.alt}
                    className="image-cover"
                  />
                </div>
                <div className="surface-panel rounded-[1.5rem] bg-surface-0 p-4">
                  <p className="section-kicker text-brand-green-700">Why clients stay</p>
                  <div className="mt-3 space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-surface-700">Tailored plans</p>
                      <p className="mt-1 text-sm leading-6 text-surface-500">Recurring, one-time, and property-specific scopes.</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-surface-700">Quiet professionalism</p>
                      <p className="mt-1 text-sm leading-6 text-surface-500">Reliable teams, clear communication, and insured care.</p>
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
