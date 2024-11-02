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
    <li className={clsx('flex flex-col whitespace-pre relative', classNames)}>
      <div className="flex flex-col relative space-y-5 items-start justify-start tablet:px-8 tablet:py-10 p-6 bg-white rounded-3xl">
        <p className="tablet:text-h3 text-mobile-h2 font-bold text-typo-black">
          {contents}
        </p>
        <p className="text-mobile-body2 tablet:text-body2 text-center text-typo-black">
          {speaker}
        </p>
        <div className="absolute bottom-[-1rem] left-[3rem] h-10 w-10 bg-white rounded-lg rotate-[45deg]" />
      </div>
      {Icon}
    </li>
  )
}

export default Talk
