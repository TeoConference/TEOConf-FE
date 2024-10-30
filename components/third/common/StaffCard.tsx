import React from 'react'
import Image, { StaticImageData } from 'next/image'
import clsx from 'clsx'

import GithubLogo from '@/public/images/GithubLogoPurple.svg'
import Behance from '@/public/images/BehancePurple.svg'

interface StaffCardProps {
  name: string
  description: string
  image: StaticImageData
  url: string
  position: 'developer' | 'designer'
  className?: string
}

const StaffCard = ({
  name,
  description,
  image,
  url,
  position,
  className,
}: StaffCardProps) => {
  return (
    <li
      className={clsx(
        'flex flex-col whitespace-pre w-[170px] tablet:w-[217px] desktop:w-[300px] rounded-t-xl rounded-b-xl overflow-hidden',
        className
      )}
    >
      <Image
        src={image}
        alt={`${name} 이미지`}
        className="w-full desktop:h-[231.17px] tablet:h-[161.7px] h-[131px]"
      />
      <a
        href={url}
        target="_blank"
        className="flex flex-col bg-gray-900 px-4 py-3 tablet:px-5 tablet:py-4 items-start gap-1 justify-between rounded-b-xl desktop:rounded-b-2xl"
      >
        <div className="flex justify-between items-center w-full">
          <p className="text-mobile-sub-h2 tablet:text-mobile-h2 desktop:text-sub-h1 text-white">
            {name}
          </p>
          <div>
            {position === 'developer' ? (
              <Image
                src={GithubLogo}
                alt="github 바로가기"
                className="tablet:w-5 desktop:w-6"
              />
            ) : (
              <Image
                src={Behance}
                alt="behance 바로가기"
                className="tablet:w-5 desktop:w-6"
              />
            )}
          </div>
        </div>
        <p className="hidden desktop:block text-white text-body3 mt-1">
          {description}
        </p>
      </a>
    </li>
  )
}

export default StaffCard
