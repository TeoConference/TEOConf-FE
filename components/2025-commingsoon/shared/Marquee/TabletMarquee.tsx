'use client'

import { useEffect, useRef } from 'react'

interface TabletMarqueeProps {
  children: React.ReactNode
}

const TabletMarquee = ({ children }: TabletMarqueeProps) => {
  const topRowRef = useRef<HTMLDivElement>(null)
  const bottomRowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 모바일에서 부드러운 스크롤 및 스냅 설정
    const topRow = topRowRef.current
    const bottomRow = bottomRowRef.current

    const applySnapToCards = (container: HTMLDivElement | null) => {
      if (!container) return

      // flex-shrink-0 클래스를 가진 직접 자식 div들을 찾아서 스냅 적용
      // Overview.tsx에서 각 카드가 flex-shrink-0 클래스를 가진 div로 감싸져 있음
      const cardWrappers = container.querySelectorAll('.flex-shrink-0')
      cardWrappers.forEach((wrapper) => {
        if (wrapper instanceof HTMLElement) {
          wrapper.style.scrollSnapAlign = 'start'
          wrapper.style.scrollSnapStop = 'always'
        }
      })
    }

    if (topRow) {
      topRow.style.scrollBehavior = 'smooth'
      topRow.style.scrollSnapType = 'x mandatory'
      applySnapToCards(topRow)
    }

    if (bottomRow) {
      bottomRow.style.scrollBehavior = 'smooth'
      bottomRow.style.scrollSnapType = 'x mandatory'
      applySnapToCards(bottomRow)
    }
  }, [])

  return (
    <div className="grid desktop:hidden grid-cols-1 gap-4 w-full">
      {/* 위층: 모바일은 터치 스크롤, 태블릿은 자동 애니메이션 */}
      <div
        ref={topRowRef}
        className="overflow-x-scroll tablet:overflow-hidden scrollbar-hide snap-x snap-mandatory"
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth',
        }}
      >
        <div
          className="flex flex-row gap-4 tablet:animate-move-left"
          style={{ width: 'max-content' }}
        >
          <div className="flex flex-row gap-4 flex-shrink-0 -ml-[114px] tablet:ml-0">
            {children}
          </div>
          <div className="flex flex-row gap-4 flex-shrink-0">{children}</div>
          <div className="flex flex-row gap-4 flex-shrink-0">{children}</div>
        </div>
      </div>

      {/* 아래층: 모바일은 터치 스크롤, 태블릿은 자동 애니메이션 */}
      <div
        ref={bottomRowRef}
        className="overflow-x-scroll tablet:overflow-hidden scrollbar-hide snap-x snap-mandatory"
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth',
        }}
      >
        <div
          className="flex flex-row gap-4 tablet:animate-move-right"
          style={{ width: 'max-content' }}
        >
          <div className="flex flex-row gap-4 flex-shrink-0 -mr-[114px] tablet:mr-0">
            {children}
          </div>
          <div className="flex flex-row gap-4 flex-shrink-0">{children}</div>
          <div className="flex flex-row gap-4 flex-shrink-0">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default TabletMarquee
