interface TabletMarqueeProps {
  children: React.ReactNode
}

const TabletMarquee = ({ children }: TabletMarqueeProps) => {
  return (
    <div className="hidden tablet:grid tablet:grid-cols-1 tablet:gap-4 w-full">
      {/* 위층: 왼쪽으로 이동 */}
      <div className="overflow-hidden">
        <div className="flex flex-row gap-4 animate-move-left">
          <div className="flex flex-row gap-4 flex-shrink-0">{children}</div>
          <div className="flex flex-row gap-4 flex-shrink-0">{children}</div>
          <div className="flex flex-row gap-4 flex-shrink-0">{children}</div>
        </div>
      </div>

      {/* 아래층: 오른쪽으로 이동 */}
      <div className="overflow-hidden">
        <div className="flex flex-row gap-4 animate-move-right">
          <div className="flex flex-row gap-4 flex-shrink-0">{children}</div>
          <div className="flex flex-row gap-4 flex-shrink-0">{children}</div>
          <div className="flex flex-row gap-4 flex-shrink-0">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default TabletMarquee
