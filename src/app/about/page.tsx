import { BHImage } from '@/components/ui/BHImage'

const TEAM = [
  { name: 'Ayesha Khan', role: 'Creative Director', img: '/images/placeholder.jpg' },
  { name: 'Rahul Sharma', role: 'Lead Photographer', img: '/images/placeholder.jpg' },
  { name: 'David Chen', role: 'Strategy Head', img: '/images/placeholder.jpg' },
]

const PROCESS_STEPS = [
  { num: '01', label: 'Discover' },
  { num: '02', label: 'Research' },
  { num: '03', label: 'Strategy' },
  { num: '04', label: 'Create' },
  { num: '05', label: 'Launch' },
  { num: '06', label: 'Grow' },
]

const TRUST_PILLARS = [
  { title: 'Professionalism', desc: 'We show up on time, every time.' },
  { title: 'Creativity', desc: 'Original ideas, never templated.' },
  { title: 'Fast Execution', desc: 'Speed without cutting craft.' },
  { title: 'Strategic Thinking', desc: 'Every post earns its place.' },
  { title: 'Premium Production', desc: 'Shot, styled and edited in house.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bh-warm)] text-[var(--bh-text)]">
      
      {/* Editorial Hero */}
      <section className="w-full pt-32 pb-24">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row gap-12 items-center min-h-[80vh]">
          <div className="w-full md:w-5/12">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--bh-gold)] mb-8 block">
              About The Agency
            </span>
            <h1 className="font-display text-6xl md:text-[80px] leading-[0.9] text-[var(--bh-text)]">
              We Are<br />Buzzinhyd.
            </h1>
          </div>
          <div className="w-full md:w-7/12 h-[60vh] md:h-[80vh] relative overflow-hidden transform-gpu">
            <BHImage src="/images/chef-plating-dark.jpg" alt="Chef plating, Buzzinhyd" fill priority className="object-cover object-top" />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="w-full py-24 md:py-32 bg-[var(--bh-cream)] border-y border-[rgba(160,120,48,0.15)]">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center relative">
          <div className="gold-rule-center" />
          <h2 className="font-display italic text-4xl md:text-[64px] leading-tight my-12 text-[var(--bh-text)]">
            "We don't shoot food.<br />We build brands."
          </h2>
          <div className="gold-rule-center" />
        </div>
      </section>

      {/* Story Column */}
      <section className="w-full py-24 md:py-32">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
            <div className="w-full md:w-1/2">
              <h3 className="font-display text-4xl mb-8">Our Story</h3>
              <div className="flex flex-col gap-6 font-body text-base md:text-lg text-[var(--bh-muted)] leading-relaxed">
                <p>
                  Born in Hyderabad, a city where food is synonymous with culture, heritage, and pride, Buzzinhyd was founded on a simple premise: a great dish alone is no longer enough to guarantee a full dining room.
                </p>
                <p>
                  We noticed that the most incredible culinary talent often struggled to translate their offline magic into online equity. They didn't need another generic social media manager; they needed storytellers.
                </p>
                <p>
                  Today, we operate at the intersection of high-end editorial photography and aggressive performance marketing. We craft the visuals that stop the scroll, and implement the strategies that drive the footfall.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-[500px] relative overflow-hidden">
              <BHImage src="/images/bts-studio-setup.jpg" alt="Behind the scenes shoot" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="w-full py-24 md:py-32 bg-[var(--bh-cream)] border-y border-[rgba(160,120,48,0.15)]">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col items-center text-center mb-24 md:mb-32">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--bh-gold)] mb-4 block">
              How We Work
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-[var(--bh-text)]">
              Six Steps To A Brand
            </h2>
          </div>

          {/* Desktop: alternating timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-[var(--bh-text)]" />
            <div className="relative grid grid-cols-6">
              {PROCESS_STEPS.map((step, i) => (
                <div key={step.num} className="relative flex flex-col items-center">
                  {i % 2 === 0 ? (
                    <>
                      <div className="flex flex-col items-center text-center pb-10">
                        <span className="font-mono text-[13px] text-[var(--bh-muted)]">{step.num}</span>
                        <span className="font-display text-2xl text-[var(--bh-text)]">{step.label}</span>
                      </div>
                      <span className="w-4 h-4 rounded-full bg-[var(--bh-gold)] z-10" />
                      <div className="pt-10" />
                    </>
                  ) : (
                    <>
                      <div className="pb-10" />
                      <span className="w-4 h-4 rounded-full bg-[var(--bh-gold)] z-10" />
                      <div className="flex flex-col items-center text-center pt-10">
                        <span className="font-display text-2xl text-[var(--bh-text)]">{step.label}</span>
                        <span className="font-mono text-[13px] text-[var(--bh-muted)]">{step.num}</span>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: simple grid */}
          <div className="grid grid-cols-2 gap-8 md:hidden">
            {PROCESS_STEPS.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center">
                <span className="font-mono text-[11px] text-[var(--bh-gold)] mb-3">{step.num}</span>
                <span className="font-display text-2xl text-[var(--bh-text)]">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Trust Us */}
      <section className="w-full py-24 md:py-32">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--bh-gold)] mb-4 block">
              Why Clients Trust Us
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
            {TRUST_PILLARS.map((pillar) => (
              <div key={pillar.title} className="flex flex-col items-center text-center">
                <h3 className="font-display text-xl mb-2 text-[var(--bh-text)]">{pillar.title}</h3>
                <p className="font-body text-sm text-[var(--bh-muted)] leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Work Evidence strip */}
      <section className="w-full py-0">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="relative h-[300px] group">
            <BHImage src="/images/bts-kitchen-shoot-wide.jpg" alt="On Location" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="font-mono text-white tracking-widest uppercase">On Location</span>
            </div>
          </div>
          <div className="relative h-[300px] group border-x border-[var(--bh-warm)]">
            <BHImage src="/images/bts-ipad-pasta-flatlay.jpg" alt="The Process" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="font-mono text-white tracking-widest uppercase">The Process</span>
            </div>
          </div>
          <div className="relative h-[300px] group">
            <BHImage src="/images/bts-table-setting-elegant.jpg" alt="The Result" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="font-mono text-white tracking-widest uppercase">The Result</span>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}
