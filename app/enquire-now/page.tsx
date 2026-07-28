import PageHero from '../components/PageHero'
import EnquireBand from '../components/EnquireBand'
import JoinBand from '../components/JoinBand'

export default function EnquireNow() {
  return (
    <>
      <PageHero eyebrow="More access. More value." title="Enquire Now">
        <p>Explore SANCTUM before you commit. Experience the space, understand the offering, and decide in your own time.</p>
      </PageHero>
      <EnquireBand />
      <JoinBand />
    </>
  )
}
