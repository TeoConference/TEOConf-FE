import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Logo from '@/public/images/Logo_2.svg'

export const Header = () => {
  const router = useRouter()

  return (
    <header
      className="w-full h-[64px] tablet:h-14 flex-center sticky top-0 z-50 p-4"
      style={{ backgroundColor: '#44067F' }}
    >
      <nav className="w-full flex justify-between items-center tablet:mx-12 desktop:max-w-[1024px] desktop-xl:max-w-[1360px]">
        <div className="h-[19.04px]">
          <Image
            className="cursor-pointer"
            alt="logo"
            src={Logo}
            width={110}
            height={19.04}
            onClick={() => router.push('/')}
          />
        </div>
        <div className="space-x-10 items-center justify-start hidden desktop:inline-flex text-white">
          <a
            href="#overview"
            className="text-white hover:opacity-80 transition-opacity text-[16px]"
          >
            모아보기
          </a>
          <a
            href="#sponsor"
            className="text-white hover:opacity-80 transition-opacity text-[16px]"
          >
            후원사
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
