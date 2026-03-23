import { Button } from '../components/ui'
import { siteImages } from '../data/siteImages'

function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-surface-200/80 bg-surface-25">
      <div className="absolute inset-x-0 top-0 h-[26rem] bg-[radial-gradient(circle_at_top_left,rgba(255,212,94,0.18),transparent_38%),radial-gradient(circle_at_right,rgba(59,135,98,0.12),transparent_28%)]" />
      <div className="container relative max-w-hero py-10 sm:py-12 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.74fr)_minmax(30rem,1.08fr)] lg:items-center lg:gap-12 xl:grid-cols-[minmax(0,0.72fr)_minmax(34rem,1.12fr)]">
          <div className="max-w-[31rem]" data-reveal="soft">
            <div className="eyebrow-label border-brand-yellow-200/70 bg-brand-yellow-50 text-surface-700">
              Premium recurring cleaning for homes and workplaces
            </div>

            <div className="mt-5 space-y-4">
              <h1 className="max-w-[8ch] text-[2.45rem] leading-[0.94] sm:text-[3.15rem] lg:text-[4rem]">
                Cleaning that keeps your space <span className="font-premium italic text-surface-600">beautifully kept</span>.
              </h1>
              <p className="max-w-[26rem] text-[0.94rem] leading-6 text-surface-500 sm:text-[0.98rem] sm:leading-7">
                Recurring cleaning, deep resets, and office upkeep delivered with a polished,
                reliable standard.
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact">
                Get a Free Estimate
              </Button>
              <Button to="/services" variant="secondary">
                View Services
              </Button>
            </div>

            <div className="mt-7 grid gap-4 border-t border-surface-200/80 pt-4 md:grid-cols-3">
              <div data-reveal="soft" style={{ '--reveal-order': 0 }}>
                <p className="text-[1.65rem] font-semibold tracking-[-0.04em] text-surface-700">250+</p>
                <p className="mt-1.5 text-sm leading-5 text-surface-500">
                  monthly recurring visits
                </p>
              </div>
              <div data-reveal="soft" style={{ '--reveal-order': 1 }}>
                <p className="text-[1.65rem] font-semibold tracking-[-0.04em] text-surface-700">4.9/5</p>
                <p className="mt-1.5 text-sm leading-5 text-surface-500">
                  average client rating
                </p>
              </div>
              <div data-reveal="soft" style={{ '--reveal-order': 2 }}>
                <p className="text-[1.65rem] font-semibold tracking-[-0.04em] text-surface-700">Insured</p>
                <p className="mt-1.5 text-sm leading-5 text-surface-500">
                  professional team and quality control
                </p>
              </div>
            </div>
          </div>

          <div className="relative lg:justify-self-end" data-reveal="image">
            <div className="absolute -left-6 top-10 hidden h-40 w-40 rounded-full bg-brand-yellow-100 blur-3xl lg:block" />
            <div className="absolute -right-8 bottom-8 hidden h-44 w-44 rounded-full bg-brand-green-100 blur-3xl lg:block" />
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_11rem] xl:grid-cols-[minmax(0,1fr)_12rem]">
              <div className="image-shell relative h-[24rem] rounded-[2.25rem] sm:h-[28rem] lg:w-[40rem] lg:h-[31rem] xl:w-[45rem] xl:h-[34rem]">
                <img
                  src={siteImages.heroLivingRoom.src}
                  alt={siteImages.heroLivingRoom.alt}
                  className="image-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-800/35 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-surface-0/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-surface-600 shadow-soft">
                  SparklePro standard
                </div>
                <div
                  className="absolute bottom-4 left-4 right-4 max-w-[14rem] rounded-[1.5rem] bg-surface-0/92 p-4 shadow-card backdrop-blur"
                  data-reveal="soft"
                  style={{ '--reveal-order': 1 }}
                >
                  <p className="section-kicker text-brand-green-700">Client trust</p>
                  <p className="mt-2 text-[0.98rem] font-semibold leading-6 tracking-[-0.03em] text-surface-700">
                    Presentation-ready finishes and discreet recurring care.
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="image-shell h-[10rem] rounded-[1.5rem] sm:h-[12rem] lg:h-[10rem] xl:h-[11.5rem]" data-reveal="image" style={{ '--reveal-order': 2 }}>
                  <img
                    src={siteImages.kitchenDetail.src}
                    alt={siteImages.kitchenDetail.alt}
                    className="image-cover"
                  />
                </div>
                <div className="surface-panel rounded-[1.5rem] bg-surface-0 p-4" data-reveal="soft" style={{ '--reveal-order': 3 }}>
                  <p className="section-kicker text-brand-green-700">Why clients stay</p>
                  <div className="mt-3 space-y-2.5">
                    <div>
                      <p className="text-sm font-semibold text-surface-700">Tailored plans</p>
                      <p className="mt-1 text-sm leading-6 text-surface-500">Recurring, one-time, and property-specific scopes.</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-surface-700">Quiet professionalism</p>
                      <p className="mt-1 text-sm leading-6 text-surface-500">Reliable teams and clear communication.</p>
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
