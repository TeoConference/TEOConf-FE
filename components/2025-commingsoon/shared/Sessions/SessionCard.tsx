import Image from 'next/image'
import clsx from 'clsx'
import { useState } from 'react'
import { Speaker } from './types'
import { getTrackColor } from './utils'
import defaultSpeakerImage from '@/public/images/2025/speakersImg/default-speaker.png'

interface SessionCardProps {
  speaker: Speaker
  bgColor: string
  variant?: 'mobile' | 'desktop'
  isActiveTab?: boolean // 현재 활성 탭의 카드인지 여부
  isLoading?: boolean // 탭 전환 중 로딩 상태
}

const SessionCard = ({
  speaker,
  bgColor,
  variant = 'mobile',
  isActiveTab = true,
  isLoading = false,
}: SessionCardProps) => {
  const isMobile = variant === 'mobile'
  const [imageError, setImageError] = useState(false)

  // 탭 전환 중이거나 에러 발생 시 fallback 이미지 표시
  const shouldShowFallback = isLoading || imageError
  const imageSrc = shouldShowFallback ? defaultSpeakerImage : speaker.image

  return (
    <article
      className={clsx(
        'rounded-xl flex flex-col',
        bgColor,
        isMobile ? 'w-full p-6 gap-4' : 'w-[447px] h-[320px] p-9 gap-6'
      )}
    >
      <div className="flex-1 flex flex-col gap-5">
        <p
          className={clsx('font-bold', isMobile ? 'text-sm' : 'text-base')}
          style={{ color: getTrackColor(speaker.track) }}
        >
          # {speaker.track}
        </p>
        <h3
          className={clsx(
            'font-bold text-purple-600 break-keep line-clamp-2',
            isMobile ? 'text-xl h-[3.5rem]' : 'text-2xl h-[4rem]'
          )}
        >
          {speaker.title}
        </h3>
        {!isMobile && (
          <p className="text-base text-purple-600 break-keep">{speaker.desc}</p>
        )}
      </div>
      <div className="flex gap-12">
        <div className="flex-1 text-purple-600 flex flex-col justify-center">
          <p className={clsx('font-bold', isMobile ? 'text-base' : 'text-xl')}>
            {speaker.name}
          </p>
          <span className={clsx(isMobile ? 'text-sm' : 'text-base')}>
            {speaker.role}
          </span>
        </div>
        <Image
          className={clsx(
            'rounded-full object-cover bg-white',
            isMobile ? 'w-12 h-12' : 'w-16 h-16'
          )}
          src={imageSrc}
          alt={speaker.name}
          width={isMobile ? 48 : 64}
          height={isMobile ? 48 : 64}
          priority={isActiveTab}
          loading={isActiveTab ? 'eager' : 'lazy'}
          onError={() => setImageError(true)}
          placeholder="blur"
        />
      </div>
    </article>
  )
}

export default SessionCard
