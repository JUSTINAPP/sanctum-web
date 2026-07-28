import Link from 'next/link'

export default function MembersHQ() {
  return (
    <section className="bg-background">
      <div className="max-w-md mx-auto px-6 py-28 text-center">
        <h1 className="font-serif text-3xl font-light mb-4">Members-Only Area</h1>
        <p className="text-foreground/55 text-sm mb-8">Please log in to continue.</p>
        <button className="bg-gold text-charcoal px-8 py-3 rounded-[3px] text-[11px] tracking-[0.14em] uppercase font-sans font-medium hover:bg-gold/85 transition-colors">
          Log in
        </button>
        <p className="text-foreground/40 text-[13px] mt-8">
          Want access?{' '}
          <Link href="/enquire-now" className="text-gold hover:underline">
            Enquire now
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
