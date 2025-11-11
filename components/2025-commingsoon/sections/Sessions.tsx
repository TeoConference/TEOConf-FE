import { sessions } from '@/data/2025/session'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

const Sessions = () => {
  const [activeTab, setActiveTab] = useState(0)

  const getTrackColor = (track: string) => {
    switch (track) {
      case 'TRACK A':
        return '#FF383C'
      case 'TRACK B':
        return '#007FEE'
      case 'TRACK C':
        return '#00B72E'
      default:
        return '#FF383C'
    }
  }

  const getCardBgColor = (tab: number, track: string) => {
    if (tab === 0) {
      return track === 'TRACK B' ? 'bg-purple-100' : 'bg-purple-50'
    } else {
      return track === 'TRACK B' ? 'bg-purple-50' : 'bg-purple-100'
    }
  }

  return (
    <section
      id="sessions"
      className="relative w-full overflow-hidden py-[6.25rem] tablet:py-24 bg-purple-800"
    >
      {/* Title */}
      <div className="flex flex-col gap-4 px-10 tablet:px-8 desktop:px-12 mb-10 tablet:mb-12 ">
        <div className="w-full flex-center flex-col">
          <h2 className="w-full text-white text-[2rem] tablet:text-[3.5rem] desktop:text-[3rem] font-bold text-center max-w-4xl ">
            테오콘{' '}
            <strong className="text-purple-400 font-bold">세션 소개</strong>
          </h2>
        </div>
      </div>
      {/* Tab Switch */}
      <div className="mx-auto px-10 tablet:px-8 desktop:px-12 flex justify-center">
        <div className="relative bg-purple-600/50 rounded-full flex h-[2.875rem] w-[17.375rem]">
          {/* 슬라이딩 흰색 배경 */}
          <div
            className="absolute top-0 left-0 w-1/2 h-full bg-white rounded-full transition-transform duration-300 ease-out"
            style={{
              transform: activeTab === 1 ? 'translateX(100%)' : 'translateX(0)',
            }}
          />

          {/* 탭 버튼 */}
          <button
            onClick={() => setActiveTab(0)}
            className={clsx(
              'relative z-10 flex-1 flex items-center justify-center text-2xl font-bold rounded-full transition-colors duration-300',
              activeTab === 0 ? 'text-purple-600' : 'text-gray-400'
            )}
          >
            12월 6일
          </button>
          <button
            onClick={() => setActiveTab(1)}
            className={clsx(
              'relative z-10 flex-1 flex items-center justify-center text-2xl font-bold rounded-full transition-colors duration-300',
              activeTab === 1 ? 'text-purple-600' : 'text-gray-400'
            )}
          >
            12월 7일
          </button>
        </div>
      </div>
      {/* Sessions */}
      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6 px-4 tablet:px-8 desktop:px-12 mt-6">
        {sessions[activeTab].speakers.map((speaker, index) => (
          <article
            key={index}
            className={clsx(
              'w-full max-w-[20.625rem] mx-auto p-6 rounded-xl flex flex-col gap-4',
              getCardBgColor(activeTab, speaker.track)
            )}
          >
            <p
              className="text-sm font-bold"
              style={{ color: getTrackColor(speaker.track) }}
            >
              # {speaker.track}
            </p>
            <h3 className="text-xl font-bold text-purple-600 break-keep">
              {speaker.title}
            </h3>
            <div className="flex gap-12">
              <div className="flex-1 text-purple-600">
                <p className="text-base font-bold">{speaker.name}</p>
                <span className="text-sm">{speaker.role}</span>
              </div>
              <Image
                className="w-12 h-12 rounded-full object-cover bg-white"
                src={speaker.image}
                alt={speaker.name}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Sessions
