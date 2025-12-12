import { sessions } from '@/data/2025/session'
import { useState, useEffect } from 'react'
import SessionCard from './SessionCard'
import TabSwitch from './TabSwitch'
import {
  getCardBgColor,
  getDownloadButtonColor,
  groupBySeq,
  preloadImages,
} from './utils'

const Sessions = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [isLoadingImages, setIsLoadingImages] = useState(false)

  const sessionRows = groupBySeq(sessions[activeTab].speakers)

  const handleTabChange = (newTab: number) => {
    setIsLoadingImages(true)
    setActiveTab(newTab)
  }

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoadingImages(false)
    }, 400)

    const preloadTimer = setTimeout(() => {
      const nextTabIndex = (activeTab + 1) % sessions.length
      preloadImages(sessions[nextTabIndex].speakers)
    }, 500)

    return () => {
      clearTimeout(loadingTimer)
      clearTimeout(preloadTimer)
    }
  }, [activeTab])

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
      <TabSwitch activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Sessions - 모바일 */}
      <div className="flex flex-col px-[15px] mt-6 tablet:hidden gap-4">
        {sessions[activeTab].speakers.map((speaker, index) => (
          <SessionCard
            key={`${activeTab}-${index}`}
            speaker={speaker}
            bgColor={getCardBgColor(activeTab, speaker.track)}
            buttonColor={getDownloadButtonColor(
              activeTab,
              speaker.track,
              true // hasMaterials (임시: true)
            )}
            variant="mobile"
            isActiveTab={true}
            isLoading={isLoadingImages}
            hasMaterials={true} // TODO: 발표 자료 유무에 따라 true/false 설정
          />
        ))}
      </div>

      {/* Sessions - 태블릿/데스크톱 */}
      <div className="hidden tablet:block mt-6">
        <div className="overflow-x-auto min-[1420px]:overflow-x-visible">
          <div className="flex flex-col gap-4 min-w-[1400px] min-[1420px]:min-w-0">
            {sessionRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex gap-4 min-[1420px]:justify-center"
              >
                <div className="w-[45px] flex-shrink-0" />
                {row.map((speaker, colIndex) => (
                  <SessionCard
                    key={`${activeTab}-${rowIndex}-${colIndex}`}
                    speaker={speaker}
                    bgColor={getCardBgColor(activeTab, speaker.track)}
                    buttonColor={getDownloadButtonColor(
                      activeTab,
                      speaker.track,
                      false // hasMaterials (임시: false)
                    )}
                    variant="desktop"
                    isActiveTab={true}
                    isLoading={isLoadingImages}
                    hasMaterials={false} // TODO: 발표 자료 유무에 따라 true/false 설정
                  />
                ))}
                <div className="w-[45px] flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sessions
