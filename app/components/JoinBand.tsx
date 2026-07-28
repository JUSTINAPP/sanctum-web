import Link from 'next/link'

export default function JoinBand() {
  return (
    <section className="bg-charcoal">
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <p className="text-gold text-[11px] tracking-[0.2em] uppercase font-sans mb-2">Memberships are limited</p>
        <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">Join SANCTUM Now</h2>
        <p className="text-foreground/55 text-sm mb-8">Secure your place in a members-only club designed for value and access.</p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/apply-now"
            className="text-[11px] tracking-[0.14em] uppercase font-sans bg-gold text-charcoal px-7 py-3 rounded-[3px] font-medium hover:bg-gold/85 transition-colors"
          >
            Apply now
          </Link>
          <Link
            href="/membership-packages"
            className="text-[11px] tracking-[0.14em] uppercase font-sans border border-white/20 px-7 py-3 rounded-[3px] hover:border-white/40 transition-colors"
          >
            Explore memberships
          </Link>
        </div>
      </div>
    </section>
  )
}
