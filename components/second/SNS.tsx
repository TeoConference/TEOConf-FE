import React from 'react'
import Image from 'next/image'

import LinkedIn from '@/public/images/LinkedIn.svg'
import Twitter from '@/public/images/Twitter.svg'
import Instagram from '@/public/images/Instagram.svg'

const SNS = () => (
  <div className="w-[100%] inline-flex flex-col items-center justify-center px-4 py-14 tablet:py-20 desktop:py-26 desktop-xl:py-30 bg-gray-900">
    <div className="flex flex-col items-center max-w-[700px] mx-auto">
      <p className="text-h3 text-center text-white">
        테오콘 소식을 <br className="block tablet:hidden" /> 더 빨리 알고 싶다면
      </p>
      <div className="flex mt-6 tablet:mt-14 gap-4">
        <a
          href="https://www.linkedin.com/company/teocon-2023"
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
          href="https://twitter.com/teoconf"
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
          href="https://www.instagram.com/teo_conf/"
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

export default SNS
