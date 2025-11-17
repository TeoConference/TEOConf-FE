import { useEffect, useRef, useState } from 'react'
import { timetableData, TimeTableItem } from '@/data/2025/timetable'

const Timetable = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    itemRefs.current.forEach((ref, index) => {
      if (!ref) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleItems((prev) => new Set(prev).add(index))
              }, index * 100) // stagger 효과
            }
          })
        },
        { threshold: 0.1 }
      )

      observer.observe(ref)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const getItemStyles = (type?: TimeTableItem['type']) => {
    switch (type) {
      case 'opening':
      case 'closing':
        return 'bg-purple-100 border-purple-400'
      case 'break':
        return 'bg-gray-100 border-gray-300'
      case 'session':
        return 'bg-white border-purple-300'
      default:
        return 'bg-white border-gray-300'
    }
  }

  const getTimeStyles = (type?: TimeTableItem['type']) => {
    switch (type) {
      case 'opening':
      case 'closing':
        return 'text-purple-700'
      case 'break':
        return 'text-gray-600'
      case 'session':
        return 'text-purple-600 font-semibold'
      default:
        return 'text-gray-700'
    }
  }

  return (
    <section
      id="timetable"
      className="relative w-full overflow-hidden bg-white py-16 tablet:py-24"
    >
      <div className="w-full flex-center flex-col px-4 tablet:px-8">
        <div className="flex flex-col gap-4 mb-8 tablet:mb-12">
          <h2 className="w-full text-gray-800 text-[2rem] tablet:text-[3.5rem] desktop:text-[3rem] font-bold text-center max-w-4xl">
            테오콘 <strong className="text-purple-500">타임테이블</strong>
          </h2>
          <p className="text-gray-700 text-base tablet:text-lg text-center">
            ※ 테오의 고민상담소 세션은 컨퍼런스 운영 및 공간 배치 특성상 C
            트랙에서 진행되며,
            <br className="tablet:hidden" />
            동시에 A, B 트랙에서는 실시간 라이브로 송출될 예정입니다.
            <br />
            트랙별로 환경이 서로 다를 수 있다는 점 양해 부탁드립니다.
          </p>
        </div>

        <div className="w-full max-w-4xl">
          <div className="relative">
            <div className="absolute left-[66px] tablet:left-[80px] top-0 bottom-0 w-[2px] bg-purple-200" />

            <div className="space-y-3 tablet:space-y-4">
              {timetableData.map((item, index) => {
                const isVisible = visibleItems.has(index)
                return (
                  <div
                    key={index}
                    ref={(el) => (itemRefs.current[index] = el)}
                    className={`relative flex items-start gap-2 tablet:gap-3 transition-all duration-700 ease-out ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 w-[54px] tablet:w-[72px] text-right mt-1 ${getTimeStyles(
                        item.type
                      )}`}
                    >
                      <span className="text-[10px] tablet:text-sm font-medium whitespace-nowrap break-keep">
                        {item.time}
                      </span>
                    </div>

                    <div className="relative flex-shrink-0 mt-[6px] tablet:mt-2">
                      <div
                        className={`w-3 h-3 tablet:w-4 tablet:h-4 rounded-full border-2 ${
                          item.type === 'session'
                            ? 'bg-purple-500 border-purple-500'
                            : item.type === 'opening' || item.type === 'closing'
                            ? 'bg-purple-400 border-purple-400'
                            : 'bg-gray-300 border-gray-300'
                        }`}
                      />
                    </div>

                    <div
                      className={`flex-1 px-2 py-1.5 tablet:p-3 rounded-lg border-2 ${getItemStyles(
                        item.type
                      )}`}
                    >
                      <h3 className="text-xs tablet:text-base font-bold text-gray-800">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timetable
