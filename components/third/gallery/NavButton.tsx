import React from 'react'
import { useSwiper } from 'swiper/react'
import Image from 'next/image'

import ArrowLeft from '@/public/images/ArrowLeft.svg'
import ArrowRight from '@/public/images/ArrowRight.svg'
import clsx from 'clsx'

interface MobileNavButtonsProps {
  className?: string
}

const MobileNavButton = ({ className }: MobileNavButtonsProps) => {
  const swiper = useSwiper()

  return (
    <div className="flex absolute items-center justify-center tablet:justify-between w-full z-10 gap-60 top-[50%] -translate-y-1/2 ">
      <button
        onClick={() => swiper.slidePrev()}
        className={clsx(className, 'p-2 rounded-lg left-2 tablet:ml-2')}
      >
        <Image src={ArrowLeft} alt="왼쪽 버튼" className="w-5 h-5" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className={clsx(className, 'p-2 rounded-lg right-2 tablet:mr-2')}
      >
        <Image src={ArrowRight} alt="오른쪽 버튼" className="w-5 h-5" />
      </button>
    </div>
  )
}

export default MobileNavButton
