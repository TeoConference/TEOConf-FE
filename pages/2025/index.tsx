import Header from '@/components/2025-commingsoon/shared/Header/Header'
import Hero from '@/components/2025-commingsoon/sections/CountDown'
import Introduce from '@/components/2025-commingsoon/sections/Introduce'
import Overview from '@/components/2025-commingsoon/sections/Overview'
import Sponsor from '@/components/2025-commingsoon/sections/Sponsor'
import SNS from '@/components/2025-commingsoon/sections/SNS'
import Footer from '@/components/2025-commingsoon/sections/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Introduce />
      <Overview />
      <Sponsor />
      <SNS />
      <Footer />
    </div>
  )
}
