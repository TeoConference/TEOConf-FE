import CloseIcon from '@mui/icons-material/Close'
import LaunchIcon from '@mui/icons-material/Launch'
import MenuIcon from '@mui/icons-material/Menu'
import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { links } from '@/data/third/Links'
import useIntersectionObservation from '@/lib/observer'
import Logo from '@/public/images/Logo_3.svg'
import { SectionTab } from '../common/SectionTab'
import SideBar from '../SideBar'
import PassedConfMenu from './PassedConfMenu'

export const Header = () => {
  const router = useRouter()

  const [currentId, setCurrentId] = useState('banner')

  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  useIntersectionObservation(setCurrentId, currentId)

  const openSideBar = () => setIsSideBarOpen(true)
  const closeSideBar = () => setIsSideBarOpen(false)

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
          <SectionTab section="timetable" currentSection={currentId}>
            타임테이블
          </SectionTab>
          <SectionTab section="location" currentSection={currentId}>
            장소
          </SectionTab>
          <SectionTab section="faq" currentSection={currentId}>
            FAQ
          </SectionTab>
          <PassedConfMenu />
          <a href={links.submitForm} target="_blank">
            <p className="text-center flex items-center gap-0.5">
              <span className="text-typo-primary rounded-lg">행사 소개</span>
              <LaunchIcon
                className="text-typo-primary"
                sx={{ fontSize: '18px' }}
              />
            </p>
          </a>
        </div>
        {isSideBarOpen ? (
          <CloseIcon
            onClick={closeSideBar}
            className="desktop:hidden tablet:block cursor-pointer"
            sx={{ color: '#ffffff' }}
          />
        ) : (
          <MenuIcon
            onClick={openSideBar}
            className="desktop:hidden tablet:block cursor-pointer"
            sx={{ color: '#ffffff' }}
          />
        )}
        <SideBar
          currentId={currentId}
          close={closeSideBar}
          isOpen={isSideBarOpen}
        />
      </nav>
    </header>
  )
}

export default Header
