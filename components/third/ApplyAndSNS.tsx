import Image from 'next/image'

import { links } from '@/data/third/Links'
import Instagram from '@/public/images/Instagram.svg'
import LinkedIn from '@/public/images/LinkedIn.svg'
import Logo from '@/public/images/Logo_3.svg'
import Twitter from '@/public/images/Twitter.svg'
import LaunchIcon from '@mui/icons-material/Launch'
import { useEffect, useState } from 'react'

const ApplyAndSNS = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  useEffect(() => {
    const targetDate = new Date(
      new Date().getFullYear(),
      10,
      9,
      23,
      59,
      59
    ).getTime()

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

    const intervalId = setInterval(updateCountdown, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="w-[100%] inline-flex flex-col items-center justify-center px-4 py-14 tablet:py-20 desktop:py-26 desktop-xl:py-30 bg-background-primary">
      <div className="w-full flex flex-col items-center max-w-[700px] mx-auto">
        <p className="mb-20 text-mobile-h1 tablet:text-h3 text-center text-typo-white">
          신청 마감까지 <br className="block tablet:hidden" />
          <span className="text-typo-primary text-mobile-h1 tablet:text-h2 rounded-lg">
            <span>{timeLeft.days}일</span> <span>{timeLeft.hours}시간</span>{' '}
            <span>{timeLeft.minutes}분</span> <span>{timeLeft.seconds}초</span>
          </span>{' '}
          <br className="block tablet:hidden" />
          남았어요.
        </p>
        <a
          className="w-full py-6 mb-4 flex justify-center rounded-lg bg-background-default"
          href={links.submitForm}
          target="_blank"
        >
          <Image alt="logo" src={Logo} />
          <div className="ml-4">
            <p className="text-h3 text-center">
              참가신청하기 <LaunchIcon className="text-typo-primary" />
            </p>
          </div>
        </a>
        <p className="mb-24 font-bold text-body2 text-center text-typo-white">
          신청마감일: 2024년 11월 09일
        </p>
        <p className="text-h3 text-center text-typo-white">
          <span className="text-typo-primary rounded-lg">테오콘 소식</span>을{' '}
          <br className="block tablet:hidden" /> 더 빨리 알고 싶다면?
        </p>
        <div className="flex mt-6 gap-4">
          <a
            href={links.linkedin}
            target="_blank"
            className="flex p-3 tablet:p-4 bg-white rounded-lg"
          >
            <Image
              src={LinkedIn}
              alt="linkedin 바로가기"
              className="h-full"
              width={34}
              height={34}
            />
          </a>
          <a
            href={links.twitter}
            target="_blank"
            className="flex p-3 tablet:p-4 bg-white rounded-lg"
          >
            <Image
              src={Twitter}
              alt="twitter 바로가기"
              className="h-full"
              width={34}
              height={34}
            />
          </a>
          <a
            href={links.instagram}
            target="_blank"
            className="flex p-3 tablet:p-4 bg-white rounded-lg"
          >
            <Image
              src={Instagram}
              alt="instagram 바로가기"
              className="h-full"
              width={34}
              height={34}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ApplyAndSNS
