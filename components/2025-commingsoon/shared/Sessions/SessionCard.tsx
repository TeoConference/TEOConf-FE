import Image from 'next/image'
import clsx from 'clsx'
import { Speaker } from './types'
import { getTrackColor } from './utils'

interface SessionCardProps {
  speaker: Speaker
  bgColor: string
  variant?: 'mobile' | 'desktop'
}

const SessionCard = ({
  speaker,
  bgColor,
  variant = 'mobile',
}: SessionCardProps) => {
  const isMobile = variant === 'mobile'

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
            'font-bold text-purple-600 break-keep',
            isMobile ? 'text-xl' : 'text-2xl'
          )}
        >
          {speaker.title}
        </h3>
        {!isMobile && (
          <p className="text-base text-purple-600">{speaker.desc}</p>
        )}
      </div>
      <div className="flex gap-12">
        <div className="flex-1 text-purple-600">
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
          src={speaker.image}
          alt={speaker.name}
        />
      </div>
    </article>
  )
}

export default SessionCard
