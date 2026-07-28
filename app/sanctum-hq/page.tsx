import PageHero from '../components/PageHero'
import EnquireBand from '../components/EnquireBand'
import JoinBand from '../components/JoinBand'

const sections = [
  {
    title: 'Leisure',
    intro:
      'SANCTUM HQ is designed as a place to unwind, connect and enjoy time with other members or guests, shifting naturally from a calm daytime environment to a more vibrant evening setting.',
    items: [
      ['Daily Breakfast Bar', 'A complimentary seasonal breakfast bar on weekdays, or order à la carte in a relaxed setting.'],
      ['Casual Dining', 'A relaxed yet refined setting for lunches and informal dinners, supported by attentive service.'],
      ['Private Dining', 'A private setting for hosted lunches, dinners and celebrations, delivered by the SANCTUM service team.'],
    ],
  },
  {
    title: 'Business',
    intro: 'A central, members-only base to support productive workdays, meetings and client engagement.',
    items: [
      ['HQ Boardroom Bookings', 'A private, fully equipped environment for meetings and strategic sessions.'],
      ['Work & Meetings', 'Barista coffee and designated workspaces minutes from the CBD.'],
    ],
  },
  {
    title: 'Community',
    intro: 'The physical home of the SANCTUM community, bringing members together through a regular calendar of events.',
    items: [
      ['Guest Passes', 'Host friends, colleagues or clients at SANCTUM HQ for social, business or casual visits.'],
      ['Social Gatherings', 'A regular calendar aligned with Melbourne’s key sporting and cultural moments.'],
      ['Artist in Residence', 'Contemporary art exhibited throughout HQ, available for purchase during its display period.'],
    ],
  },
]

export default function SanctumHQ() {
  return (
    <>
      <PageHero eyebrow="Your central base for leisure, business and community" title="Sanctum HQ">
        <p>
          Located within Pullman on the Park, SANCTUM HQ is a private, members-only club in East
          Melbourne, minutes from the CBD and across the road from the MCG and the Melbourne and Olympic
          Park Precinct.
        </p>
      </PageHero>

      {sections.map((s) => (
        <section key={s.title} className="bg-background border-b border-white/5">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <h2 className="font-serif text-2xl md:text-3xl font-light mb-3">{s.title}</h2>
            <p className="text-foreground/55 text-sm max-w-2xl mb-10">{s.intro}</p>
            <div className="grid md:grid-cols-3 gap-6">
              {s.items.map(([t, b]) => (
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
