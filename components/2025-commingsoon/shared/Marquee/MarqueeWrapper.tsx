import DesktopMarquee from './DesktopMarquee'
import TabletMarquee from './TabletMarquee'

interface MarqueeWrapperProps {
  children: React.ReactNode
}

const MarqueeWrapper = ({ children }: MarqueeWrapperProps) => {
  return (
    <>
      <DesktopMarquee>{children}</DesktopMarquee>
      <TabletMarquee>{children}</TabletMarquee>
    </>
  )
}

export default MarqueeWrapper
