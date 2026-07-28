import Link from 'next/link'

const options = [
  {
    title: 'Book a Tour',
    body: "Experience SANCTUM HQ firsthand. Visit the space, understand how it's used, and see how membership fits into your routine.",
    cta: 'Book now',
    href: '/book-a-tour',
  },
  {
    title: 'Speak With Us',
    body: 'Understand how membership works. Speak with the SANCTUM Membership Team to explore the offering and determine if it is right for you.',
    cta: 'Make a time',
    href: '/enquire-now',
  },
  {
    title: 'Member Brochure',
    body: 'Explore the details at your own pace. Receive the SANCTUM Membership Brochure, including inclusions, benefits, and pricing.',
    cta: 'Request now',
    href: '/enquire-now',
  },
]

export default function EnquireBand() {
  return (
    <section className="bg-background border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="text-gold text-[11px] tracking-[0.2em] uppercase font-sans mb-2">More access. More value.</p>
        <h2 className="font-serif text-3xl md:text-4xl font-light mb-3">Enquire Now</h2>
        <p className="text-foreground/55 text-sm mb-14">Choose from the following options to learn more about SANCTUM.</p>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {options.map((o) => (
            <div key={o.title} className="border border-white/10 rounded-sm p-7">
              <h3 className="font-serif text-xl mb-3">{o.title}</h3>
              <p className="text-foreground/55 text-[13px] leading-relaxed mb-6">{o.body}</p>
              <Link
                href={o.href}
                className="inline-block text-[10px] tracking-[0.14em] uppercase font-sans border border-gold/40 text-gold px-5 py-2 rounded-[3px] hover:bg-gold/10 transition-colors"
              >
                {o.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
