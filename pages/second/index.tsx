import Banner from '@/components/second/Banner'
import CodeOfConduct from '@/components/second/CodeOfConduct'
import MetaHead from '@/components/second/common/MetaHead'
import FAQ from '@/components/second/FAQ'
import Footer from '@/components/second/Footer'
import Header from '@/components/second/Header'
import Introduce from '@/components/second/Introduce'
import Map from '@/components/second/Map'
import NameCard from '@/components/second/NameCard'
import Networking from '@/components/second/NetWorking'
import Program from '@/components/second/Program'
import SNS from '@/components/second/SNS'
import Sponsor from '@/components/second/Sponsor'
import Staff from '@/components/second/Staff'

export default function Home() {
  return (
    <>
      <MetaHead />
      <Header />
      <Banner />
      <Introduce />
      <Program />
      <Networking />
      <NameCard />
      <Sponsor />
      <Map />
      <FAQ />
      <CodeOfConduct />
      <SNS />
      <Staff />
      <Footer />
    </>
  )
}
