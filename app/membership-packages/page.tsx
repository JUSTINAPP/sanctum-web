import Link from 'next/link'
import PageHero from '../components/PageHero'
import JoinBand from '../components/JoinBand'

const annual = [
  {
    name: 'Principal Membership',
    price: 'From $4,650',
    period: 'per year',
    body: "SANCTUM's core membership, designed for members who want full access to the club, its facilities, curated experiences and complete range of member benefits.",
    points: [
      'Full access to SANCTUM HQ and member facilities',
      'Curated experiences across sport, entertainment and culture',
      'Complete suite of member benefits, including gym access',
    ],
    value: 'Over $16,000 in annual value',
  },
  {
    name: 'Next Wave Membership (21–29yrs)',
    price: 'From $3,350',
    period: 'per year',
    body: 'Designed for the next generation of SANCTUM members, with full access to the club at a tailored price point.',
    points: [
      'Full access to SANCTUM HQ and member facilities',
      'Curated experiences across sport, entertainment and culture',
      'Complete member benefits at a tailored price point',
    ],
    value: 'Over $16,000 in annual value',
  },
  {
    name: 'Sanctum Partner Membership',
    price: '$1,500',
    period: 'per year',
    body: 'An add-on to Lifetime and Principal Memberships, available to partners residing at the same fixed address.',
    points: [
      'Access for your partner under a Foundation Principal or Lifetime Membership',
      'Full access to SANCTUM HQ and member facilities',
      'Complete suite of member benefits, excluding gym access',
    ],
    value: 'Over $14,200 in annual value',
  },
]

const associates = [
  ['Principal + 1 Associate', 'From $7,295'],
  ['Principal + 2 Associates', 'From $9,940'],
  ['Principal + 3 Associates', 'From $12,585'],
  ['Principal + 4 Associates', 'From $15,230'],
]

const lifetimeAssociates = [
  ['Lifetime + 1 Associate', '$27,645'],
  ['Lifetime + 2 Associates', '$30,290'],
  ['Lifetime + 3 Associates', '$32,935'],
  ['Lifetime + 4 Associates', '$35,580'],
]

export default function MembershipPackages() {
  return (
    <>
      <PageHero title="Membership Packages">
        <p>
          SANCTUM offers a range of membership packages designed to suit different lifestyles, locations
          and levels of engagement. All prices in $AUD and incl. GST.
        </p>
      </PageHero>

      <section className="bg-background border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-6">
            {annual.map((m) => (
              <div key={m.name} className="border border-white/10 rounded-sm p-7 flex flex-col">
                <h3 className="font-serif text-xl mb-1">{m.name}</h3>
                <p className="text-2xl font-serif text-gold mb-0">{m.price}</p>
                <p className="text-foreground/45 text-[11px] uppercase tracking-[0.1em] mb-4">{m.period}</p>
                <p className="text-foreground/55 text-[13px] leading-relaxed mb-4">{m.body}</p>
                <ul className="text-foreground/55 text-[12px] leading-relaxed space-y-1 mb-5 list-disc list-inside">
                  {m.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <p className="text-gold text-[11px] tracking-[0.08em] uppercase mt-auto mb-4">{m.value}</p>
                <Link
                  href="/apply-now"
                  className="text-[10px] tracking-[0.14em] uppercase font-sans border border-gold/40 text-gold text-center px-5 py-2 rounded-[3px] hover:bg-gold/10 transition-colors"
                >
                  View all entitlements
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-serif text-2xl md:text-3xl font-light mb-3">Principal + Associate Packages</h2>
          <p className="text-foreground/55 text-sm max-w-2xl mb-10">
            Combine a Principal Membership with additional transferable Associate Memberships. Associate
            Memberships allow nominated individuals to access SANCTUM HQ and ticketed events alongside the
            Principal Member. Gym access is excluded for Associate Members.
          </p>
          <div className="grid md:grid-cols-4 gap-5">
            {associates.map(([name, price]) => (
              <div key={name} className="border border-white/10 rounded-sm p-5 text-center">
                <p className="font-serif text-base mb-2">{name}</p>
                <p className="text-gold font-serif text-lg">{price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <p className="text-foreground/55 text-sm mb-2">Buy it once, buy it well and enjoy no ongoing membership fees.</p>
          <h2 className="font-serif text-2xl md:text-3xl font-light mb-4">Lifetime Membership</h2>
          <p className="text-gold font-serif text-3xl mb-2">$25,000</p>
          <p className="text-foreground/45 text-[11px] uppercase tracking-[0.1em] mb-6">One-time payment</p>
          <p className="text-foreground/55 text-[14px] leading-relaxed max-w-2xl mx-auto mb-2">
            Full SANCTUM access paid in full upfront, with no ongoing membership fees — lifetime access to
            SANCTUM HQ, curated experiences and the complete suite of member benefits. Option to pay over
            two instalments.
          </p>
        </div>
      </section>

      <section className="bg-charcoal border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-serif text-2xl md:text-3xl font-light mb-3">Lifetime + Associate Packages</h2>
          <p className="text-foreground/55 text-sm max-w-2xl mb-10">
            Associate Memberships include an ongoing annual fee of $2,645 per Associate.
          </p>
          <div className="grid md:grid-cols-4 gap-5">
            {lifetimeAssociates.map(([name, price]) => (
              <div key={name} className="border border-white/10 rounded-sm p-5 text-center">
                <p className="font-serif text-base mb-2">{name}</p>
                <p className="text-gold font-serif text-lg">{price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <JoinBand />
    </>
  )
}
