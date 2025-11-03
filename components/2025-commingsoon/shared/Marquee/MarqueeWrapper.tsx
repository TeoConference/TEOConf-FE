import DesktopMarquee from './DesktopMarquee'
import TabletMarquee from './TabletMarquee'
import MobileMarquee from './MobileMarquee'

interface MarqueeWrapperProps {
  children: React.ReactNode
}

const MarqueeWrapper = ({ children }: MarqueeWrapperProps) => {
  return (
    <>
      <DesktopMarquee>{children}</DesktopMarquee>
      <TabletMarquee>{children}</TabletMarquee>
      <MobileMarquee>{children}</MobileMarquee>
    </>
  )
}

export default MarqueeWrapper
