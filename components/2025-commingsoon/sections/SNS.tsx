import React from 'react'
import Image from 'next/image'

import LinkedIn from '@/public/images/LinkedIn.svg'
import Instagram from '@/public/images/Instagram.svg'
import X from '@/public/images/X.svg'

const SNS = () => (
  <section className="w-full bg-purple-600 py-24 tablet:py-32 desktop:py-40 px-4">
    <div className="flex flex-col items-center justify-center max-w-[700px] mx-auto">
      <p className="text-white text-[1.625rem] tablet:text-[2rem] desktop:text-[2.25rem] font-bold text-center">
        테오콘 소식을 <br className="tablet:hidden" />더 빨리 알고 싶다면?
      </p>
      <div className="flex mt-6 tablet:mt-10 gap-4">
        <a
          href="https://www.linkedin.com/company/teocon-2023"
          target="_blank"
          rel="noopener noreferrer"
          className="flex p-3 tablet:p-4 bg-white rounded-lg hover:opacity-80 transition-opacity"
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
          rel="noopener noreferrer"
          className="flex p-3 tablet:p-4 bg-white rounded-lg hover:opacity-80 transition-opacity"
        >
          <Image
            src={X}
            alt="X 바로가기"
            className="h-full"
            width={34}
            height={34}
          />
        </a>
        <a
          href="https://www.instagram.com/teo_conf/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex p-3 tablet:p-4 bg-white rounded-lg hover:opacity-80 transition-opacity"
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
  </section>
)

export default SNS
