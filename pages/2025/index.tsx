import Header from '@/components/2025-commingsoon/shared/Header/Header'
import Hero from '@/components/2025-commingsoon/sections/CountDown'
import IntroSection from '@/components/2025-commingsoon/sections/Intro'
import TeoconOverview from '@/components/2025-commingsoon/sections/TeoconOverview'
import Sponsor from '@/components/2025-commingsoon/sections/Sponsor'
import SNS from '@/components/2025-commingsoon/sections/SNS'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <IntroSection />
      <TeoconOverview />
      <Sponsor />
      <SNS />
    </div>
  )
}
