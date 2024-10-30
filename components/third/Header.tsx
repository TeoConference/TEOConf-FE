import React, { useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/router'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import LaunchIcon from '@mui/icons-material/Launch'

import useIntersectionObservation from '@/lib/observer'
import Logo from '@/public/images/Logo_2.svg'
import Sidebar from './Sidebar'
import { SectionTab } from './common/SectionTab'

export const Header = () => {
  const router = useRouter()

  const [currentId, setCurrentId] = useState('banner')
  const [isOpen, setIsOpen] = useState(false)

  useIntersectionObservation(setCurrentId, currentId)

  const toggleSide = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <header
      className={clsx(
        'w-full h-12 tablet:h-14 backdrop-blur-sm bg-opacity-90 flex-center sticky top-0 text-body2 z-50 p-4 transition-all duration-300 bg-black'
      )}
    >
      <nav className="w-full flex justify-between tablet:mx-12 desktop:max-w-[1024px] desktop-xl:max-w-[1360px]">
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
        <div className="space-x-10 items-end justify-start hidden desktop:inline-flex">
          <SectionTab section="program" currentSection={currentId}>
            프로그램
          </SectionTab>
          <SectionTab section="networking" currentSection={currentId}>
            네트워킹
          </SectionTab>
          <SectionTab section="name-card" currentSection={currentId}>
            명함
          </SectionTab>
          <SectionTab section="sponsor" currentSection={currentId}>
            후원사
          </SectionTab>
          <SectionTab section="location" currentSection={currentId}>
            장소
          </SectionTab>
          <SectionTab section="faq" currentSection={currentId}>
            FAQ
          </SectionTab>
          <a href="https://www.jumpit.co.kr/contents/428" target="_blank">
            <LaunchIcon className="text-purple-main" />
          </a>
        </div>
        {isOpen ? (
          <CloseIcon
            onClick={toggleSide}
            className="desktop:hidden tablet:block cursor-pointer"
            sx={{ color: '#ffffff' }}
          />
        ) : (
          <MenuIcon
            onClick={toggleSide}
            className="desktop:hidden tablet:block cursor-pointer"
            sx={{ color: '#ffffff' }}
          />
        )}
        <Sidebar currentId={currentId} isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </header>
  )
}

export default Header
