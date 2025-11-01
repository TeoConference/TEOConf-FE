interface TabletMarqueeProps {
  children: React.ReactNode
}

const TabletMarquee = ({ children }: TabletMarqueeProps) => {
  return (
    <div className="grid desktop:hidden grid-cols-1 gap-4 w-full">
      {/* 위층: 모바일은 터치 스크롤, 태블릿은 자동 애니메이션 */}
      <div
        className="overflow-x-scroll tablet:overflow-hidden scrollbar-hide"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div
          className="flex flex-row gap-4 tablet:animate-move-left"
          style={{ width: 'max-content' }}
        >
          <div className="flex flex-row gap-4 flex-shrink-0">{children}</div>
          <div className="flex flex-row gap-4 flex-shrink-0">{children}</div>
          <div className="flex flex-row gap-4 flex-shrink-0">{children}</div>
        </div>
      </div>

      {/* 아래층: 모바일은 터치 스크롤, 태블릿은 자동 애니메이션 */}
      <div
        className="overflow-x-scroll tablet:overflow-hidden scrollbar-hide"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div
          className="flex flex-row gap-4 tablet:animate-move-right"
          style={{ width: 'max-content' }}
        >
          <div className="flex flex-row gap-4 flex-shrink-0">{children}</div>
          <div className="flex flex-row gap-4 flex-shrink-0">{children}</div>
          <div className="flex flex-row gap-4 flex-shrink-0">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default TabletMarquee
