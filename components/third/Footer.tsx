import Image from 'next/image'

import { links } from '@/data/third/links'
import Instagram from '@/public/images/Instagram_2.svg'
import LinkedIn from '@/public/images/LinkedIn_2.svg'
import Logo from '@/public/images/Logo_2.svg'
import Twitter from '@/public/images/Twitter_2.svg'
import UpArrow from '@/public/images/UpArrow_2.svg'
import { useState } from 'react'
import PrivacyModal from './PrivacyModal'

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const powerModal = () => {
    setIsModalOpen((prev) => !prev)
  }

  return (
    <footer className="relative bg-gray-900 px-6 pt-10 pb-8 tablet:pt-20 tablet:pb-16">
      <div className="tablet:max-w-[768px] desktop:max-w-[1024px] desktop-xl:max-w-[1360px] m-auto">
        <Image alt="logo" src={Logo} width={150} height={25.96} />
        <p className="text-sub-h2 text-white mt-4 pb-2">
          ⓒ TEOCON. All Right Reserved.
        </p>
        <div className="tablet:flex items-end justify-between">
          <button
            type="button"
            className="text-mobile-h2 tablet:text-sub-h2 text-white mt-1"
            onClick={powerModal}
          >
            개인정보 처리방침
          </button>
          <div className="flex gap-2 mt-6">
            <a href={links.linkedin} target="_blank">
              <Image
                src={LinkedIn}
                alt="linkedin 바로가기"
                width={26}
                height={26}
              />
            </a>
            <a href={links.twitter} target="_blank">
              <Image
                src={Twitter}
                alt="twitter 바로가기"
                width={26}
                height={26}
              />
            </a>
            <a href={links.instagram} target="_blank">
              <Image
                src={Instagram}
                alt="instagram 바로가기"
                width={26}
                height={26}
              />
            </a>
          </div>
        </div>
      </div>
      <button type="button">
        <Image
          src={UpArrow}
          alt="맨 위로 가기"
          onClick={() => window.scrollTo(0, 0)}
          width={36}
          height={36}
          className="absolute bottom-12 right-6 tablet:-top-4 tablet:right-24"
        />
      </button>
      {isModalOpen && <PrivacyModal powerModal={powerModal} />}
    </footer>
  )
}

export default Footer
