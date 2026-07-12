import Link from 'next/link'
import { projects } from '@/data/projects'
import { BHImage } from '@/components/ui/BHImage'

export const metadata = {
  title: 'Buzzinhyd | Case Studies',
  description: 'In-depth case studies from Buzzinhyd: the challenge, the creative strategy, and the result behind our favorite campaigns.',
}

export default function CaseStudiesPage() {
  return (
    <div className="bg-[var(--bh-warm)] text-[var(--bh-text)] min-h-screen">
      <section className="w-full pt-32 pb-24">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

          <div className="flex flex-col items-center text-center mb-20">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--bh-gold)] mb-4 block">
              Case Studies
            </span>
            <h1 className="font-display text-5xl md:text-7xl">
              The Strategy Behind The Story
            </h1>
          </div>

          <div className="flex flex-col gap-24 md:gap-32">
            {projects.map((project, i) => (
              <Link
                href={`/work/${project.slug}`}
                key={project.slug}
                className="group flex flex-col md:flex-row gap-8 md:gap-16 items-center"
              >
                <div className={`w-full md:w-1/2 aspect-[4/3] relative overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <BHImage
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <span className="font-mono text-[11px] tracking-widest uppercase text-[var(--bh-gold)] mb-4 block">
                    {project.category} &middot; {project.client}
                  </span>
                  <h2 className="font-display text-3xl md:text-5xl mb-6 leading-tight">
                    {project.title}
                  </h2>
                  <p className="font-body text-[15px] md:text-base text-[var(--bh-muted)] leading-relaxed line-clamp-4 mb-8">
                    {project.description}
                  </p>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--bh-gold)] flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                    Read Case Study <span className="text-[14px]">&rarr;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}
