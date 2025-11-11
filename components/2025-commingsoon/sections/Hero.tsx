import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import CountdownItem from '../shared/Countdown/CountdownItem'
import CountdownSeparator from '../shared/Countdown/CountdownSeparator'
import ScrambleText from '../shared/Typography/ScrambleText'
import { getPath } from '@/utils/path'

// test
const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '99',
    hours: '09',
    minutes: '00',
    seconds: '57',
  })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // tablet breakpoint
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const targetDate = new Date(2025, 11, 8, 0, 0, 0).getTime()

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
      className="relative w-full flex tablet:flex-center overflow-hidden bg-white py-12 tablet:py-20"
      style={{
        backgroundImage: `url('${getPath(
          `/images/2025/background/${
            isMobile ? 'commingsoon-mobile-bg.png' : 'commingsoon-bg.png'
          }`
        )}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-4 tablet:px-8 tablet:flex-center flex-col relative z-[1] gap-6 tablet:gap-4">
        {/* 모바일용 콘텐츠 */}
        <div className="flex flex-col text-center tablet:hidden py-16">
          <h1 className="font-extrabold text-[4rem] leading-normal">
            <span className="text-purple-600">TEO</span> Conf
          </h1>
          <h1 className="font-extrabold text-[4rem] leading-normal -mt-[20px]">
            2025
          </h1>
          <p className="font-semibold text-black text-[1.5rem] leading-tight pb-4">
            모두에게 열려있는 컨퍼런스
          </p>
          <p className="font-semibold text-gray-500 text-[1.5rem] leading-tight">
            12.6 ~ 12.7 성수 엘리스Lab
          </p>
        </div>

        {/* 태블릿 이상 상단 콘텐츠 */}
        <div className="flex-center flex-col gap-2 tablet:gap-2 text-center hidden tablet:flex">
          {/* COMING.SOON 배너 */}
          <div className="bg-gray-800 p-2 rounded-lg font-mono text-[#38ED85] text-[0.8rem] tablet:text-[1rem] desktop:text-[1.75rem]">
            <ScrambleText text="<COMING.SOON/>" />
          </div>

          {/* TEOConf 2025 제목 */}
          <h1 className="font-extrabold text-[4rem] tablet:text-[4.375rem] desktop:text-[3.75rem] leading-tight">
            <span className="text-purple-200">&#123;</span>
            <span className="px-2">
              <span className="text-purple-600">TEO</span>Conf 2025
            </span>
            <span className="text-purple-200">&#125;</span>
          </h1>

          {/* 모두에게 열려있는 컨퍼런스 */}
          <p className="font-semibold text-black text-[1.5rem] tablet:text-[3.5rem] desktop:text-[3rem] leading-tight">
            모두에게 열려있는 컨퍼런스
          </p>

          {/* 날짜 및 장소 */}
          <p className="font-medium text-gray-500 text-[2rem] desktop:text-[1.25rem] leading-tight">
            12월 6일(토) ~ 7일(일) | 서울 성수 엘리스Lab
          </p>
        </div>

        {/* 카운트다운 섹션 */}
        <div className="relative w-full flex-center hidden tablet:flex">
          {/* 캐릭터 그룹 */}
          <div className="absolute inset-0 flex-center -z-10">
            <Image
              src={getPath('/images/2025/assets/Group 87.svg')}
              alt="characters group"
              width={1275}
              height={409}
              className="w-full max-w-[900px] h-auto"
            />
          </div>

          {/* 카운트다운 컨테이너 */}
          <div className="relative z-10 w-full max-w-[800px] px-8 py-8 tablet:px-12 tablet:py-16 flex-center flex-col gap-2">
            <div className="w-full flex-center flex-col gap-2">
              {/* 테오콘 오픈까지 텍스트 */}
              <h2 className="text-white text-center text-[1.5rem] mt-2 font-bold">
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
              <div className="w-full px-12 tablet:px-16 flex-center">
                <button
                  // disabled
                  className="w-[476px] desktop:w-full text-[2rem] desktop:text-[1.25rem] bg-[#969497] text-white px-6 py-2 tablet:px-8 tablet:py-5.5 rounded-2xl text-sm tablet:text-base font-bold transition-colors duration-200 h-[86px] desktop:h-[64px] disabled:cursor-not-allowed"
                  // className="w-[476px] desktop:w-full text-[2rem] desktop:text-[1.25rem] bg-purple-500 hover:bg-[#9333EA] text-white px-6 py-2 tablet:px-8 tablet:py-2.5 rounded-2xl tablet:text-base font-bold transition-colors duration-200 h-[69px]"
                >
                  신청이 곧 시작됩니다.
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 모바일용 참가 신청 버튼 */}
        <div className="w-full max-w-[330px] mx-auto tablet:hidden">
          <button
            // className="w-full text-[1.5rem] bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-2xl font-bold transition-colors duration-200 h-[69px]"
            // disabled
            className="w-full text-[1.5rem] bg-[#969497] text-white px-6 py-2 rounded-2xl font-bold transition-colors duration-200 h-[69px] disabled:cursor-not-allowed"
          >
            신청이 곧 시작됩니다.
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
