interface DesktopMarqueeProps {
  children: React.ReactNode
}

const DesktopMarquee = ({ children }: DesktopMarqueeProps) => {
  return (
    <div className="hidden desktop:block w-full overflow-hidden">
      <div className="flex flex-row animate-move-left">
        {/* 첫 번째 세트 */}
        <div className="flex flex-row gap-4 flex-shrink-0 pr-4">{children}</div>
        {/* 두 번째 세트 (무한 루프를 위해 복제) */}
        <div className="flex flex-row gap-4 flex-shrink-0 pr-4">{children}</div>
        {/* 세 번째 세트 (끝부분이 잘리지 않도록 추가) */}
        <div className="flex flex-row gap-4 flex-shrink-0 pr-4">{children}</div>
      </div>
    </div>
  )
}

export default DesktopMarquee
