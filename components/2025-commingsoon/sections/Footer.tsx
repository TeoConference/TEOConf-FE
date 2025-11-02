import { useState } from 'react'
import Image from 'next/image'

import UpArrow from '@/public/images/UpArrow_4.svg'
import PrivacyModal from '../shared/Modal/PrivacyModal'
import Logo from '@/public/images/2025/assets/logo/logo.svg'

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePrivacyClick = () => {
    setIsModalOpen((prev) => !prev)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#212529] px-6 py-10 tablet:py-12 desktop:py-16">
      <div className="tablet:max-w-[768px] desktop:max-w-[1024px] desktop-xl:max-w-[1360px] m-auto flex flex-col tablet:flex-row items-start tablet:items-center justify-between gap-6 tablet:gap-0">
        {/* 왼쪽: 로고, 저작권, 개인정보 처리방침 */}
        <div className="flex flex-col gap-3 tablet:gap-4">
          <div>
            <Image src={Logo} alt="logo" width={150} height={25.96} />
          </div>
          {/* 저작권 */}
          <p className="text-white text-[0.875rem] tablet:text-[1rem]">
            © TEOCONF. All Right Reserved.
          </p>

          {/* 개인정보 처리방침 */}
          <button
            type="button"
            onClick={handlePrivacyClick}
            className="text-white text-[0.875rem] tablet:text-[1rem] text-left hover:opacity-80 transition-opacity"
          >
            개인정보 처리방침
          </button>
        </div>

        {/* 오른쪽: 스크롤-투-탑 버튼 */}
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center justify-center w-12 h-12 tablet:w-14 tablet:h-14 rounded-full bg-[#495057] hover:bg-[#5a6268] transition-colors"
          aria-label="맨 위로 가기"
        >
          <Image
            src={UpArrow}
            alt="맨 위로 가기"
            width={24}
            height={24}
            className="w-6 h-6 tablet:w-7 tablet:h-7"
          />
        </button>
      </div>

      {/* 개인정보 처리방침 모달 */}
      {isModalOpen && <PrivacyModal powerModal={handlePrivacyClick} />}
    </footer>
  )
}

export default Footer
