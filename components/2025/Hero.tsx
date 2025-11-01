import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import CountdownItem from './comming-soon/CountdownItem'
import CountdownSeparator from './comming-soon/CountdownSeparator'

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
        {/* 모바일용 콘텐츠 */}
        <div className="flex-center flex-col gap-2 text-center tablet:hidden -mt-8">
          <h1 className="font-bold text-[2rem] leading-tight">
            <span className="text-[#8814F4]">TEO</span>Conf 2025
          </h1>
          <p className="font-semibold text-black text-[1.5rem] leading-tight">
            모두에게 열려있는 컨퍼런스
          </p>
          <p className="font-medium text-[#6B7280] text-[1.25rem] leading-tight">
            12.6 ~ 12.7 성수 앨리스Lab
          </p>

          {/* 모바일용 카운트다운 섹션 */}
          <div className="w-full flex flex-col items-center justify-center gap-2 mt-4">
            <h2 className="text-black text-center text-[1.25rem] font-normal">
              테오콘 오픈까지
            </h2>

            {/* 카운트다운 숫자 및 라벨 */}
            <div className="flex items-center justify-center gap-2 flex-wrap w-full">
              <CountdownItem
                value={timeLeft.days}
                label="DAYS"
                textColor="text-black"
                textSize="text-[2rem]"
                labelColor="text-[#6B7280]"
                labelSize="text-[0.875rem]"
              />
              <CountdownSeparator
                textColor="text-black"
                textSize="text-[2rem]"
              />
              <CountdownItem
                value={timeLeft.hours}
                label="HOURS"
                textColor="text-black"
                textSize="text-[2rem]"
                labelColor="text-[#6B7280]"
                labelSize="text-[0.875rem]"
              />
              <CountdownSeparator
                textColor="text-black"
                textSize="text-[2rem]"
              />
              <CountdownItem
                value={timeLeft.minutes}
                label="MINUTES"
                textColor="text-black"
                textSize="text-[2rem]"
                labelColor="text-[#6B7280]"
                labelSize="text-[0.875rem]"
              />
              <CountdownSeparator
                textColor="text-black"
                textSize="text-[2rem]"
              />
              <CountdownItem
                value={timeLeft.seconds}
                label="SECONDS"
                textColor="text-black"
                textSize="text-[2rem]"
                labelColor="text-[#6B7280]"
                labelSize="text-[0.875rem]"
              />
            </div>
          </div>
        </div>

        {/* 태블릿 이상 상단 콘텐츠 */}
        <div className="flex-center flex-col gap-2 tablet:gap-2 text-center hidden tablet:flex">
          {/* COMING.SOON 배너 */}
          <div className="bg-[#1F2937] px-4 py-2 rounded-lg font-mono text-[#38ED85] text-[0.8rem] tablet:text-[1rem] desktop:text-[1.75rem]">
            &lt;COMING.SOON /&gt;
          </div>

          {/* TEOConf 2025 제목 */}
          <h1 className="font-bold text-[2rem] tablet:text-[3rem] desktop:text-[3.75rem] leading-tight">
            <span className="text-[#DDBBFD]">&#123;</span>
            <span className="px-2">
              <span className="text-[#8814F4]">TEO</span>Conf 2025
            </span>
            <span className="text-[#DDBBFD]">&#125;</span>
          </h1>

          {/* 모두에게 열려있는 컨퍼런스 */}
          <p className="font-semibold text-black text-[1.5rem] tablet:text-[2.25rem] desktop:text-[3rem] leading-tight">
            모두에게 열려있는 컨퍼런스
          </p>

          {/* 날짜 및 장소 */}
          <p className="font-medium text-[#6B7280] text-[1.25rem] leading-tight">
            12월 6일(토) ~ 7일(일) | 서울 성수 앨리스Lab
          </p>
        </div>

        {/* 카운트다운 섹션 */}
        <div className="relative w-full flex-center hidden tablet:flex">
          {/* 캐릭터 그룹 */}
          <div className="absolute inset-0 flex-center -z-10">
            <Image
              src="/images/2025/assets/Group 105.svg"
              alt="characters group"
              width={1275}
              height={409}
              className="w-full max-w-[900px] h-auto"
            />
          </div>

          {/* 카운트다운 컨테이너 */}
          <div className="relative z-10 w-full max-w-[800px] px-8 py-12 tablet:px-12 tablet:py-16 flex-center flex-col gap-2">
            <div className="w-full flex-center flex-col gap-2">
              {/* 테오콘 오픈까지 텍스트 */}
              <h2 className="text-white text-center text-[1.5rem] mt-12 font-normal">
                테오콘 오픈까지
              </h2>

              {/* 카운트다운 숫자 및 라벨 */}
              <div className="flex items-start justify-center gap-4 tablet:gap-6 flex-wrap">
                <CountdownItem value={timeLeft.days} label="DAYS" />
                <CountdownSeparator />
                <CountdownItem value={timeLeft.hours} label="HOURS" />
                <CountdownSeparator />
                <CountdownItem value={timeLeft.minutes} label="MINUTES" />
                <CountdownSeparator />
                <CountdownItem value={timeLeft.seconds} label="SECONDS" />
              </div>

              {/* 참가 신청 버튼 */}
              <div className="w-full px-6">
                <button
                  className="w-full text-[20px] bg-[#A855F7] hover:bg-[#9333EA] text-white px-6 py-2 tablet:px-8 tablet:py-2.5 rounded-lg text-sm tablet:text-base font-medium transition-colors duration-200 h-[64px]"
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
        </div>

        {/* 모바일용 참가 신청 버튼 */}
        <div className="w-full max-w-[800px] px-6 tablet:hidden">
          <button
            className="w-full text-[20px] bg-[#A855F7] hover:bg-[#9333EA] text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 h-[64px]"
            onClick={() => {
              // 참가 신청 링크로 이동할 수 있도록 설정 필요
              console.log('참가 신청 클릭')
            }}
          >
            참가 신청
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
