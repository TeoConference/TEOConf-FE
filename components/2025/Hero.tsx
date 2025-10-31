import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '99',
    hours: '09',
    minutes: '00',
    seconds: '57',
  })

  useEffect(() => {
    // 실제 날짜로 변경 필요 (예: 2025년 12월 6일)
    const targetDate = new Date(2025, 11, 6, 0, 0, 0).getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference <= 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' })
      } else {
        const days = String(
          Math.floor(difference / (1000 * 60 * 60 * 24))
        ).padStart(2, '0')
        const hours = String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, '0')
        const minutes = String(
          Math.floor((difference / (1000 * 60)) % 60)
        ).padStart(2, '0')
        const seconds = String(Math.floor((difference / 1000) % 60)).padStart(
          2,
          '0'
        )

        setTimeLeft({ days, hours, minutes, seconds })
      }
    }

    updateCountdown()
    const intervalId = setInterval(updateCountdown, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section
      id="banner"
      className="relative w-full min-h-[calc(100vh_-_4rem)] flex-center overflow-hidden bg-white bg-center bg-cover bg-no-repeat py-12 tablet:py-20"
      style={{
        backgroundImage: "url('/images/2025/background/commingsoon-bg.png')",
      }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-4 tablet:px-8 flex-center flex-col relative z-[1] gap-12 tablet:gap-16">
        {/* 상단 콘텐츠 */}
        <div className="flex-center flex-col gap-2 tablet:gap-2 text-center">
          {/* COMING.SOON 배너 */}
          <div
            className="bg-[#1F2937] px-4 py-2 rounded-lg font-mono"
            style={{ color: '#38ED85', fontSize: '28px' }}
          >
            &lt;COMING.SOON /&gt;
          </div>

          {/* TEOConf 2025 제목 */}
          <h1 className="font-bold text-[#A869EE]" style={{ fontSize: '60px' }}>
            &#123; TEOConf 2025 &#125;
          </h1>

          {/* 모두에게 열려있는 컨퍼런스 */}
          <p className="font-semibold text-black" style={{ fontSize: '48px' }}>
            모두에게 열려있는 컨퍼런스
          </p>

          {/* 날짜 및 장소 */}
          <p className="text-base tablet:text-lg desktop:text-xl text-black">
            12월 6일(토) ~ 7일(일) | 서울 성수 앨리스Lab
          </p>
        </div>

        {/* 카운트다운 섹션 */}
        <div className="relative w-full flex-center min-h-[300px]">
          {/* Group 105 캐릭터 그룹 */}
          <div className="absolute inset-0 flex-center -z-10">
            <Image
              src="/images/2025/Group 105.svg"
              alt="characters group"
              width={1075}
              height={409}
              className="w-full max-w-[900px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
