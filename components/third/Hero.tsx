import React from 'react'

const Hero = () => (
  <section className="h-[916px] bg-gray-300">
    <div className="flex flex-col max-w-[1360px] px-8 mx-auto">
      <h1 className="text-7xl font-bold leading-10 mt-[547px]">TEOConf</h1>
      <div className="inline-flex flex-col space-y-3 items-start justify-start h-[124px] mt-[102px]">
        <p className="text-5xl font-semibold leading-10">테오의 컨퍼런스</p>
        <p className="text-5xl font-semibold leading-10">
          2023.5.20. 토요일, 신촌역 사람인 카페
        </p>
      </div>
    </div>
  </section>
)

export default Hero
