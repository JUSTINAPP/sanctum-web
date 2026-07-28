import PageHero from '../components/PageHero'
import EnquireBand from '../components/EnquireBand'
import JoinBand from '../components/JoinBand'

const categories = [
  ['Sport', "Australia's most sought-after sporting events, from private dinners with sporting figures to insider access to the AFL, Australian Open, NBL, cricket, netball, A-League, Formula 1 and premium golf tournaments."],
  ['Entertainment', 'Concerts and live performances through to dining experiences and private culinary events, opening doors to Melbourne’s entertainment landscape.'],
  ['Culture', 'Private exhibitions, curated showcases and exclusive performances across art, theatre and the creative industries, from established institutions to emerging talent.'],
]

export default function EventsExperiences() {
  return (
    <>
      <PageHero eyebrow="The best of sport, entertainment & culture" title="Events & Experiences">
        <p>
          SANCTUM provides curated access to Melbourne&apos;s best events and experiences, bringing
          together sport, entertainment and culture into a considered, year-round calendar — up to 50
          events and experiences each year, ranging from smaller member-only gatherings through to major
          moments.
        </p>
      </PageHero>

      <section className="bg-background border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map(([t, b]) => (
              <div key={t} className="border border-white/10 rounded-sm p-7">
                <h3 className="font-serif text-xl mb-3">{t}</h3>
                <p className="text-foreground/55 text-[13px] leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-serif text-2xl md:text-3xl font-light mb-6">Ticketing</h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div>
              <h3 className="font-serif text-lg mb-2">Access options</h3>
              <p className="text-foreground/55 leading-relaxed">
                Members enjoy flexible access to SANCTUM events and experiences, from complimentary
                offerings through to discounted, priority and premium-priced experiences. Where events are
                ticketed, pricing reflects the scale and inclusions of each experience and is never set
                above cost.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg mb-2">Tiers & inclusions</h3>
              <p className="text-foreground/55 leading-relaxed">
                Experiences are offered across a range of ticketing tiers, from General Admission through to
                premium hospitality and Corporate Suites. Higher-tier experiences may include
                limited-capacity access, enhanced hospitality or additional inclusions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <EnquireBand />
      <JoinBand />
    </>
  )
}
