import clsx from 'clsx'
import Image from 'next/image'

import SwiperSlide from '@/components/first/common/SwiperSlide'
import Talk from '@/components/first/introduce/Talk'
import { talkData } from '@/data/third/Talk'
import Introduce1 from '@/public/images/Introduce1_3.svg'
import Introduce2 from '@/public/images/Introduce2_3.svg'
import Introduce3 from '@/public/images/Introduce3_3.svg'
import Introduce4 from '@/public/images/Introduce4_3.svg'
import { eventDetails } from '@/data/third/EventDetails'

const Icon = (index: number) => {
  switch (index) {
    case 0:
      return (
        <Image
          src={Introduce1}
          alt="introduce"
          width="252"
          height="188"
          className=""
        />
      )
    case 1:
      return (
        <Image
          src={Introduce2}
          alt="introduce"
          width="256"
          height="282"
          className="absolute desktop:bottom-[-16px] desktop:left-[-30px] tablet:bottom-[-60px] bottom-[-60px] left-[-24px]"
        />
      )
    case 2:
      return (
        <Image
          src={Introduce3}
          alt="introduce"
          width="276"
          height="276"
          className="absolute desktop:bottom-[60px] tablet:bottom-[10px] bottom-[30px] left-[-40px]"
        />
      )
    case 3:
      return (
        <Image
          src={Introduce4}
          alt="introduce"
          width="324"
          height="324"
          className="rotate-45 absolute desktop:bottom-0 tablet:bottom-[-60px] bottom-[-20px] left-[-40px]"
        />
      )
    case 4:
      return (
        <Image
          src={Introduce2}
          alt="introduce"
          width="256"
          height="282"
          className="absolute desktop:bottom-8 desktop:left-[-30px] tablet:bottom-0 tablet:left-0"
        />
      )
    case 5:
      return (
        <Image
          src={Introduce4}
          alt="introduce"
          width="324"
          height="324"
          className="rotate-45 absolute desktop:bottom-0 tablet:bottom-[-60px] bottom-[-20px] left-[-40px]"
        />
      )
  }
}

const Introduce = () => {
  return (
    <section className="py-12 tablet:py-28 desktop:py-36 px-4">
      <div className="flex-col w-full flex-center tablet:w-[768px] desktop:w-[1024px] desktop-xl:w-[1360px] m-auto">
        <div className="flex flex-col items-center">
          <div className="flex flex-col space-y-2 items-center">
            <p className="tablet:text-h1 text-mobile-h1 leading-10 text-center break-keep">
              프론트엔드 개발자의 <br className="block tablet:hidden" />
              놀이터에 초대합니다
            </p>
          </div>
          <p className="tablet:text-body1 text-mobile-body2 text-center my-8 tablet:my-12 text-typo-white">
            {eventDetails.name_ko}는{' '}
            <strong className="text-typo-primary rounded-lg">
              모두에게 열려있는 컨퍼런스
            </strong>
            라는 컨셉으로, <br />
            누구나 자신의 경험과 지식을 공유할 수 있는 <br />
            즐거운 네트워킹의 장을 마련합니다.
          </p>
        </div>
        <div className="bg-background-primary rounded-3xl max-w-[85rem] w-full tablet:h-[36.875rem] h-[23.75rem]">
          <div className="overflow-hidden desktop:h-[590px] tablet:h-[590px] h-[380px]">
            <p className="text-h2 m-auto w-full text-typo-white tablet:mt-10 tablet:block hidden text-center">
              언제나 궁금했던 이야기들
            </p>
            <div className="tablet:mt-12 mt-6 flex">
              <SwiperSlide className="flex justify-between gap-10 desktop:h-[500px] tablet:h-[456px]">
                {talkData.map((talk, i) => (
                  <Talk
                    key={i}
                    contents={talk.contents}
                    speaker={talk.speaker}
                    Icon={Icon(i)}
                    classNames={clsx(
                      i == 3 ? 'mr-10 mt-10' : i % 2 ? 'mt-10' : '',
                      talk.className
                    )}
                  />
                ))}
              </SwiperSlide>
              <SwiperSlide className="flex justify-between gap-10 desktop:h-[500px] tablet:h-[456px]">
                {talkData.map((talk, i) => (
                  <Talk
                    key={i}
                    contents={talk.contents}
                    speaker={talk.speaker}
                    Icon={Icon(i)}
                    classNames={clsx(
                      i == 3 ? 'mr-10 mt-10' : i % 2 ? 'mt-10' : '',
                      talk.className
                    )}
                  />
                ))}
              </SwiperSlide>
              <SwiperSlide className="flex justify-between gap-10 desktop:h-[500px] tablet:h-[456px]">
                {talkData.map((talk, i) => (
                  <Talk
                    key={i}
                    contents={talk.contents}
                    speaker={talk.speaker}
                    Icon={Icon(i)}
                    classNames={clsx(
                      i == 3 ? 'mr-10 mt-10' : i % 2 ? 'mt-10' : '',
                      talk.className
                    )}
                  />
                ))}
              </SwiperSlide>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduce
