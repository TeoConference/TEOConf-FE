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
      <div className="w-full max-w-[1200px] mx-auto px-4 tablet:px-8 flex-center flex-col relative z-[1] gap-6 tablet:gap-4">
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

          {/* 카운트다운 컨테이너 */}
          <div className="relative z-10 w-full max-w-[800px]  px-8 py-12 tablet:px-12 tablet:py-16 flex-center flex-col gap-2">
            {/* 테오콘 오픈까지 텍스트 */}
            <h2 className="text-white font-bold text-center color-[#38ED85] text-[24px] mb-4">
              테오콘 오픈까지
            </h2>

            {/* 카운트다운 숫자 및 라벨 */}
            <div className="flex items-start justify-center gap-4 tablet:gap-6 flex-wrap">
              {/* DAYS */}
              <div className="flex flex-col gap-2">
                <div className="text-white text-[80px] font-bold leading-[80px] h-[80px] flex items-center">
                  {timeLeft.days}
                </div>
                <div className="text-white text-[20px] font-medium uppercase tracking-wider">
                  DAYS
                </div>
              </div>

              {/* 구분자 */}
              <div className="text-white text-[80px] font-bold leading-[80px] h-[80px] flex items-center justify-center">
                :
              </div>

              {/* HOURS */}
              <div className="flex flex-col gap-2">
                <div className="text-white text-[80px] font-bold leading-[80px] h-[80px] flex items-center">
                  {timeLeft.hours}
                </div>
                <div className="text-white text-[20px] font-medium uppercase tracking-wider">
                  HOURS
                </div>
              </div>

              {/* 구분자 */}
              <div className="text-white text-[80px] font-bold leading-[80px] h-[80px] flex items-center justify-center">
                :
              </div>

              {/* MINUTES */}
              <div className="flex flex-col gap-2">
                <div className="text-white text-[80px] font-bold leading-[80px] h-[80px] flex items-center">
                  {timeLeft.minutes}
                </div>
                <div className="text-white text-[20px] font-medium uppercase tracking-wider">
                  MINUTES
                </div>
              </div>

              {/* 구분자 */}
              <div className="text-white text-[80px] font-bold leading-[80px] h-[80px] flex items-center justify-center">
                :
              </div>

              {/* SECONDS */}
              <div className="flex flex-col gap-2">
                <div className="text-white text-[80px] font-bold leading-[80px] h-[80px] flex items-center">
                  {timeLeft.seconds}
                </div>
                <div className="text-white text-[20px] font-medium uppercase tracking-wider">
                  SECONDS
                </div>
              </div>
            </div>

            {/* 참가 신청 버튼 */}
            <button
              className="bg-[#9C27B0] hover:bg-[#7B1FA2] text-white px-8 py-3 tablet:px-12 tablet:py-4 rounded-lg text-base tablet:text-lg font-medium transition-colors duration-200"
              onClick={() => {
                // 참가 신청 링크로 이동할 수 있도록 설정 필요
                console.log('참가 신청 클릭')
              }}
            >
              참가 신청
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
