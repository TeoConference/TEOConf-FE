import Header from '@/components/2025-commingsoon/shared/Header/Header'
import MetaHead from '@/components/2025-commingsoon/shared/MetaHead'
import Hero from '@/components/2025-commingsoon/sections/Hero'
import Introduce from '@/components/2025-commingsoon/sections/Introduce'
import Overview from '@/components/2025-commingsoon/sections/Overview'
import Sponsor from '@/components/2025-commingsoon/sections/Sponsor'
import SNS from '@/components/2025-commingsoon/sections/SNS'
import Footer from '@/components/2025-commingsoon/sections/Footer'
import Sessions from '@/components/2025-commingsoon/shared/Sessions'
import Map from '@/components/2025-commingsoon/sections/Map'

export default function Home() {
  return (
    <div>
      <MetaHead />
      <Header />
      <Hero />
      <Introduce />
      <Sessions />
      <Overview />
      <Map />
      <Sponsor />
      <SNS />
      <Footer />
    </div>
  )
}
