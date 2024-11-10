import { eventDetails } from '@/data/third/EventDetails'
import Mouse from '@/public/images/Mouse_3.svg'
import Red from '@/public/images/red_3.svg'
import TabletBI1 from '@/public/images/TabletBI1_3.svg'
import TabletBI2 from '@/public/images/TabletBI2_3.svg'
import Yellow from '@/public/images/yellow_3.svg'
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined'
import Image from 'next/image'

const Banner = () => {
  return (
    <section
      id="banner"
      className="content bg-background-secondary desktop:h-[916px] tablet:h-[894px] h-[590px] desktop:bg-banner bg-center bg-no-repeat flex-center relative desktop:px-8 tablet:px-10"
    >
      <div className="w-full tablet:h-full flex-center flex-col tablet:justify-center desktop:relative desktop:max-w-[100%] desktop-xl:max-w-[1620px] tablet:px-20 px-[50.5px]">
        <div className="w-full desktop:absolute desktop:bottom-16 relative z-[1]">
          <div className="z-[1] tablet:mt-0 desktop:w-full space-y-8 tablet:space-y-10">
            <h1 className="font-bold text-[60px] tablet:text-[4.375rem] desktop:text-[5rem] leading-[56px] tracking-[-0.6%] text-center desktop:text-left">
              {eventDetails.name_ko}
            </h1>
            <div className="font-Pretendard space-y-2 tracking-[-0.6%] desktop:leading-14">
              <div className="flex flex-col tablet:flex-row gap-1 tablet:gap-5 justify-center desktop:justify-start">
                <div className="text-center whitespace-pre-wrap text-typo-black font-semibold text-[1.25rem] tablet:text-[2rem] desktop:text-[2.5rem] desktop:text-left">
                  {eventDetails.date_saturday}
                </div>
                <div className="hidden desktop:block text-typo-black font-semibold text-[3rem]">
                  /
                </div>
                <div className="text-center whitespace-pre-wrap text-typo-black font-semibold text-[1.25rem] tablet:text-[2rem] desktop:text-[2.5rem] desktop:text-left">
                  {eventDetails.date_sunday}
                </div>
              </div>
              <div className="text-center whitespace-pre-wrap text-typo-black font-semibold text-[1.375rem] tablet:text-[2rem] desktop:text-[2.5rem] desktop:text-left">
                {eventDetails.location}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden gap-2 desktop:block absolute left-1/2 desktop:bottom-12">
          <Image alt="scroll down" src={Mouse} width={26} height={40} />
        </div>
        <div className="desktop:hidden tablet:block absolute tablet:top-0 tablet:left-10 top-[-30px] left-[-54px] tablet:w-auto w-96 h-80 z-[0]">
          <Image alt="TabletBI1" src={TabletBI1} />
        </div>
        <div className="desktop:hidden tablet:block hidden absolute tablet:bottom-0 tablet:right-10 bottom-[-200px] z-[0]">
          <Image alt="TabletBI2" src={TabletBI2} />
        </div>
        <div className="tablet:hidden block absolute tablet:bottom-0 tablet:right-10 bottom-0 right-2 z-[0]">
          <Image alt="TabletBI2" src={Yellow} />
        </div>
        <div className="tablet:hidden block absolute tablet:bottom-0 tablet:right-10 bottom-0 right-0 z-[0]">
          <Image alt="TabletBI2" src={Red} />
        </div>
        <div className="w-full flex-center desktop:justify-end">
          <KeyboardDoubleArrowDownOutlinedIcon className="absolute bottom-12 animate-bounce tablet:hidden" />
        </div>
      </div>
    </section>
  )
}

export default Banner
