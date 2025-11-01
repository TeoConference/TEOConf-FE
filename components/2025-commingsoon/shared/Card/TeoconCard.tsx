import React from 'react'
import Image from 'next/image'

interface TeoconCardProps {
  thumbnailSrc: string
  thumbnailAlt: string
  title: string
  description: string
}

const TeoconCard: React.FC<TeoconCardProps> = ({
  thumbnailSrc,
  thumbnailAlt,
  title,
  description,
}) => {
  // 디스크립션이 100자 이상이면 100자로 자르고 ... 추가
  const truncatedDescription =
    description.length > 100
      ? `${description.substring(0, 100)}...`
      : description

  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* 썸네일 이미지 */}
      <div className="relative w-full aspect-video bg-gray-200">
        <Image
          src={thumbnailSrc}
          alt={thumbnailAlt}
          fill
          className="object-cover"
        />
      </div>

      {/* 타이틀 및 디스크립션 */}
      <div className="p-4 tablet:p-6 flex flex-col gap-2">
        <h3 className="text-[#1F2937] text-[1.125rem] tablet:text-[1.25rem] font-semibold leading-tight line-clamp-2">
          {title}
        </h3>
        <p className="text-[#6B7280] text-[0.875rem] tablet:text-[1rem] leading-relaxed line-clamp-3">
          {truncatedDescription}
        </p>
      </div>
    </div>
  )
}

export default TeoconCard

