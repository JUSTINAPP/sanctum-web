import Link from 'next/link'
import EnquireBand from './components/EnquireBand'
import JoinBand from './components/JoinBand'

const pillars = [
  {
    title: 'Sanctum HQ',
    body: 'A private, members-only club in East Melbourne with a bar, dining spaces, work and meeting facilities, and a regular calendar of members-only events.',
    href: '/sanctum-hq',
  },
  {
    title: 'Events & Experiences',
    body: "A curated calendar across sport, entertainment and culture, ranging from complimentary events through to premium experiences.",
    href: '/events-experiences',
  },
  {
    title: 'Member Benefits',
    body: 'A growing network of partnerships across lifestyle, dining, fitness, travel, accommodation and retail.',
    href: '/member-benefits',
  },
]

export default function Home() {
  return (
    <>
      <section className="relative bg-charcoal border-b border-white/5 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 py-28 md:py-40 text-center relative z-10">
          <h1 className="font-serif text-4xl md:text-6xl font-light tracking-tight mb-3">
            One Membership
          </h1>
          <p className="text-gold text-lg md:text-2xl font-serif italic mb-10">Infinite Experiences</p>
          <Link
            href="/book-a-tour"
            className="inline-block text-[11px] tracking-[0.16em] uppercase font-sans border border-white/30 px-8 py-3 rounded-full hover:border-white/60 transition-colors"
          >
            Book a Tour
          </Link>
        </div>
      </section>

      <section className="bg-background border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-light mb-6">Welcome to SANCTUM</h2>
          <p className="text-foreground/60 text-[15px] leading-relaxed mb-4">
            SANCTUM is a members-only club providing member facilities, benefits, events and experiences,
            all in the one membership.
          </p>
          <p className="text-foreground/60 text-[15px] leading-relaxed">
            SANCTUM was established to reduce the cost and complexity of holding multiple memberships by
            bringing everything into one considered offering — golf, gym access, private clubs, workspaces
            and lifestyle benefits, consolidated into a single membership.
          </p>
        </div>
      </section>

      <section className="bg-charcoal border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-gold text-[11px] tracking-[0.2em] uppercase font-sans text-center mb-2">More access. More value.</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-center mb-14">What&apos;s Included</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="block border border-white/10 rounded-sm p-8 hover:border-gold/40 transition-colors"
              >
                <h3 className="font-serif text-xl mb-3">{p.title}</h3>
                <p className="text-foreground/55 text-[13px] leading-relaxed mb-6">{p.body}</p>
                <span className="text-[10px] tracking-[0.14em] uppercase font-sans text-gold">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EnquireBand />
      <JoinBand />
    </>
  )
}
