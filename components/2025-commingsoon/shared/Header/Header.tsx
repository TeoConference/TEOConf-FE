import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import HelpOutline from '@mui/icons-material/HelpOutline'

import Logo from '@/public/images/2025/assets/logo/logo.svg'
import Sidebar from './Sidebar'
import ArchiveMenu from './ArchiveMenu'
import { scrollToSection } from '@/utils/scroll'

export const Header = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const toggleSide = () => {
    setIsOpen((prev) => !prev)
  }

  const handleFAQClick = () => {
    window.open(
      'https://basalt-burn-cee.notion.site/TEOConf-2025-FAQ-2a168692489880d785b1ebd46ec83391',
      '_blank'
    )
  }

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
          <button
            type="button"
            onClick={() => scrollToSection('overview')}
            className="text-white hover:opacity-80 transition-opacity text-[16px]"
          >
            모아보기
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('sponsor')}
            className="text-white hover:opacity-80 transition-opacity text-[16px]"
          >
            후원사
          </button>
          <button
            type="button"
            onClick={handleFAQClick}
            className="text-white hover:opacity-80 transition-opacity text-[16px] flex items-center gap-1"
          >
            FAQ
            <HelpOutline sx={{ fontSize: '20px' }} />
          </button>
          <ArchiveMenu />
        </div>
        {isOpen ? (
          <CloseIcon
            onClick={toggleSide}
            className="desktop:hidden cursor-pointer text-white"
            sx={{ fontSize: '28px' }}
          />
        ) : (
          <MenuIcon
            onClick={toggleSide}
            className="desktop:hidden cursor-pointer text-white"
            sx={{ fontSize: '28px' }}
          />
        )}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </header>
  )
}

export default Header
