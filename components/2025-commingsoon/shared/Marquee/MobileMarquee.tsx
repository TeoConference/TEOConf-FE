'use client'

import { Children, useEffect, useRef } from 'react'

interface MobileMarqueeProps {
  children: React.ReactNode
}

const MobileMarquee = ({ children }: MobileMarqueeProps) => {
  const topRowRef = useRef<HTMLDivElement>(null)
  const bottomRowRef = useRef<HTMLDivElement>(null)

  const childrenArray = Children.toArray(children)
  const halfLength = Math.ceil(childrenArray.length / 2)
  const topHalf = childrenArray.slice(0, halfLength)
  const bottomHalf = childrenArray.slice(halfLength)

  useEffect(() => {
    if (bottomRowRef.current) {
      bottomRowRef.current.scrollLeft = 114
    }
  }, [])

  return (
    <div className="grid tablet:hidden grid-cols-1 gap-4 w-full">
      {/* 위층: 모바일 터치 스크롤 */}
      <div
        ref={topRowRef}
        className="overflow-x-scroll scrollbar-hide snap-x snap-mandatory"
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth',
        }}
      >
        <div className="flex flex-row gap-4 " style={{ width: 'max-content' }}>
          <div className="flex flex-row gap-4 flex-shrink-0 p-8">{topHalf}</div>
        </div>
      </div>

      {/* 아래층: 모바일 터치 스크롤 */}
      <div
        ref={bottomRowRef}
        className="overflow-x-scroll scrollbar-hide snap-x snap-mandatory"
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth',
        }}
      >
        <div className="flex flex-row gap-4" style={{ width: 'max-content' }}>
          <div className="flex flex-row gap-4 flex-shrink-0 ">{bottomHalf}</div>
        </div>
      </div>
    </div>
  )
}

export default MobileMarquee
