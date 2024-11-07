import ApplyAndSNS from '@/components/third/ApplyAndSNS'
import Banner from '@/components/third/Banner'
import CodeOfConduct from '@/components/third/CodeOfConduct'
import MetaHead from '@/components/third/common/MetaHead'
import FAQ from '@/components/third/FAQ'
import Footer from '@/components/third/Footer'
import Header from '@/components/third/Header'
import Introduce from '@/components/third/Introduce'
import Map from '@/components/third/Map'
import Program from '@/components/third/Program'
import Sponsor from '@/components/third/Sponsor'
import Staff from '@/components/third/Staff'
import Timetable from '@/components/third/Timetable'

export default function Home() {
  return (
    <div className="text-typo-black bg-background-default">
      <MetaHead />
      <Header />
      <Banner />
      <Introduce />
      <Sponsor />
      <Program />
      <Timetable />
      <Map />
      <FAQ />
      <CodeOfConduct />
      <ApplyAndSNS />
      <Staff />
      <Footer />
    </div>
  )
}
