import PageHero from '../components/PageHero'
import EnquireBand from '../components/EnquireBand'
import JoinBand from '../components/JoinBand'

const groups = [
  {
    title: 'Wellness',
    intro: 'Wellness and recovery benefits that support physical performance, balance and wellbeing.',
    items: [
      ['April Brodie Integrated Facialist', 'Priority access beyond the public waitlist with one of Australia’s leading integrated facialists.'],
      ['Alba Thermal Springs & Spa', '20% weekday bathing discount on the Mornington Peninsula.'],
      ['SALT Wellness', '25% off eligible treatments, onsite at the Pullman.'],
    ],
  },
  {
    title: 'Dining',
    intro: 'Curated dining experiences with SANCTUM’s partner restaurants.',
    items: [
      ['Lucas Restaurants Access', 'Priority access with reservations managed through the Lucas Restaurants concierge.'],
      ['Yugen + Omnia', 'Priority access to two of Melbourne’s most refined dining destinations.'],
    ],
  },
  {
    title: 'Travel & Accommodation',
    intro: 'Hotel and travel benefits that add comfort, convenience and value to every journey.',
    items: [
      ['Pullman Parking Discounts', '15% off parking at Pullman Melbourne On The Park.'],
      ['Pullman Accommodation Discounts', '20% off accommodation rates at Pullman Melbourne On The Park.'],
    ],
  },
  {
    title: 'Retail',
    intro: 'Discounts and offers from leading retail brands designed to elevate your lifestyle.',
    items: [
      ['Inglewood Coffee', '40% off Inglewood Coffee’s range of blends and products.'],
      ['Garmin', '20% off premium smartwatches and fitness technology.'],
      ['YSG Tailors', '30% off first purchase.'],
      ['July Luggage', '10% off luggage and travel accessories.'],
    ],
  },
]

export default function MemberBenefits() {
  return (
    <>
      <PageHero eyebrow="Curated to elevate your lifestyle" title="Member Benefits">
        <p>
          SANCTUM Members receive access to an extensive and growing network of premium member benefits,
          designed to deliver tangible, year-round value beyond events and experiences, and SANCTUM HQ
          access.
        </p>
      </PageHero>

      <section className="bg-background border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
          <div className="border border-white/10 rounded-sm p-7">
            <h3 className="font-serif text-xl mb-3">Premium Golf Course Access</h3>
            <p className="text-foreground/55 text-[13px] leading-relaxed">
              Discounted member rates at Moonah Links and Heritage Golf Course, without requiring separate
              membership at either course.
            </p>
          </div>
          <div className="border border-gold/30 rounded-sm p-7">
            <h3 className="font-serif text-xl mb-1">Platinum Gym Membership</h3>
            <p className="text-gold text-[11px] tracking-[0.1em] uppercase mb-3">Valued at over $1,800 per year</p>
            <p className="text-foreground/55 text-[13px] leading-relaxed">
              A Platinum Gym Membership with Fitness & Lifestyle Group, providing access to premium clubs
              across Victoria.
            </p>
          </div>
        </div>
      </section>

      {groups.map((g) => (
        <section key={g.title} className="bg-charcoal border-b border-white/5">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <h2 className="font-serif text-2xl md:text-3xl font-light mb-3">{g.title}</h2>
            <p className="text-foreground/55 text-sm max-w-2xl mb-10">{g.intro}</p>
            <div className="grid md:grid-cols-2 gap-6">
              {g.items.map(([t, b]) => (
                <div key={t} className="border border-white/10 rounded-sm p-6">
                  <h3 className="font-serif text-lg mb-2">{t}</h3>
                  <p className="text-foreground/55 text-[13px] leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <EnquireBand />
      <JoinBand />
    </>
  )
}
