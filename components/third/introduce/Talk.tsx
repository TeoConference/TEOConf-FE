import clsx from 'clsx'
import React from 'react'

interface TalkProps {
  contents: string
  speaker: string
  Icon: React.ReactNode
  classNames?: string
}

const Talk = ({ contents, speaker, Icon, classNames }: TalkProps) => {
  return (
    <li className={clsx('flex flex-col gap-10 whitespace-pre', classNames)}>
      <div className="flex flex-col relative space-y-5 items-start justify-start tablet:px-8 tablet:py-10 p-6 bg-white rounded-3xl">
        <p className="tablet:text-h3 text-mobile-h2 font-bold text-typo-white-text">
          {contents}
        </p>
        <p className="text-mobile-body2 tablet:text-body2 text-center text-typo-white-text">
          {speaker}
        </p>
        <div className="absolute transform bottom-[-1rem] left-[3rem] rotate-45 h-10 w-10 bg-white rounded-lg" />
      </div>
      {Icon}
    </li>
  )
}

export default Talk
