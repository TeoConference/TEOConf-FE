import Image from 'next/image'

interface OverviewCardProps {
  title: string
  description: string
  thumbnail: string
  link: string
  nickname?: string
}

const OverviewCard = ({
  title,
  description,
  thumbnail,
  link,
  nickname,
}: OverviewCardProps) => {
  // 디스크립션이 100자 이상이면 100자로   자르고 ... 추가
  const truncatedDescription =
    description.length > 100
      ? `${description.substring(0, 100)}...`
      : description

  // PC: 360:460 비율 유지 (360/460 ≈ 0.783)
  // 모바일 320px → 높이 409px (320/0.783 ≈ 409)
  // 태블릿 400px → 높이 511px (400/0.783 ≈ 511)
  // PC 360px → 높이 460px (360/0.783 ≈ 460)

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 bg-white tablet:bg-[#1F2937] cursor-pointer h-[288px] tablet:h-[511px] desktop:h-[460px]"
    >
      {/* 썸네일 이미지 */}
      <div className="relative w-full h-[228px] tablet:h-[280px] tablet:flex-none min-h-0">
        {thumbnail !== '' && (
          <Image src={thumbnail} alt={title} fill className="object-cover" />
        )}
      </div>

      {/* 타이틀 및 디스크립션 */}
      <div className="p-4 tablet:p-6 flex flex-col gap-2 flex-shrink-0">
        <h3 className="text-black tablet:text-white text-[1.125rem] tablet:text-[1.25rem] font-semibold leading-tight line-clamp-2">
          {title}
        </h3>
        {nickname && (
          <p className="text-black tablet:text-white text-[0.875rem] tablet:text-[1rem] font-medium">
            {nickname}
          </p>
        )}
        <p className="hidden tablet:block text-[#9CA3AF] text-[0.875rem] tablet:text-[1rem] leading-relaxed line-clamp-3">
          {truncatedDescription}
        </p>
      </div>
    </a>
  )
}

export default OverviewCard
