import { sessions } from '@/data/2025/session'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

const Sessions = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section
      id="sessions"
      className="relative w-full overflow-hidden py-[6.25rem] px-10 tablet:py-24 tablet:px-8 desktop:px-12 bg-purple-800"
    >
      {/* 제목 */}
      <div className="flex flex-col gap-4 p-2 tablet:p-0 mb-10 tablet:mb-12 ">
        <div className="w-full flex-center flex-col">
          <h2 className="w-full text-white text-[2rem] tablet:text-[3.5rem] desktop:text-[3rem] font-bold text-center max-w-4xl ">
            테오콘{' '}
            <strong className="text-purple-400 font-bold">세션 소개</strong>
          </h2>
        </div>
      </div>
      {/* 내용 영역 */}
      <div className="mx-auto max-w-md">
        <div className="relative bg-purple-600/50 rounded-full flex h-[2.875rem]">
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
    </section>
  )
}

export default Sessions
