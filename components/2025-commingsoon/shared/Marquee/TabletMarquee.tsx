import { Children } from 'react'

interface TabletMarqueeProps {
  children: React.ReactNode
}

const TabletMarquee = ({ children }: TabletMarqueeProps) => {
  const childrenArray = Children.toArray(children)
  const halfLength = Math.ceil(childrenArray.length / 2)
  const topHalf = childrenArray.slice(0, halfLength)
  const bottomHalf = childrenArray.slice(halfLength)

  return (
    <div className="hidden tablet:grid desktop:hidden grid-cols-1 gap-4 w-full">
      {/* 위층: 태블릿 자동 애니메이션 */}
      <div className="overflow-hidden">
        <div className="flex flex-row gap-4 animate-move-left">
          <div className="flex flex-row gap-4 flex-shrink-0 pr-4">
            {topHalf}
          </div>
          <div className="flex flex-row gap-4 flex-shrink-0 pr-4">
            {topHalf}
          </div>
          <div className="flex flex-row gap-4 flex-shrink-0 pr-4">
            {topHalf}
          </div>
        </div>
      </div>

      {/* 아래층: 태블릿 자동 애니메이션 */}
      <div className="overflow-hidden">
        <div className="flex flex-row gap-4 animate-move-right">
          <div className="flex flex-row gap-4 flex-shrink-0 pr-4">
            {bottomHalf}
          </div>
          <div className="flex flex-row gap-4 flex-shrink-0 pr-4">
            {bottomHalf}
          </div>
          <div className="flex flex-row gap-4 flex-shrink-0 pr-4">
            {bottomHalf}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabletMarquee
