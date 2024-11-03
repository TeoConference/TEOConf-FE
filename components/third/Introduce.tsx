import clsx from 'clsx'
import Image from 'next/image'

import SwiperSlide from '@/components/first/common/SwiperSlide'
import Talk from '@/components/first/introduce/Talk'
import { talkData } from '@/data/third/Talk'
import Introduce1 from '@/public/images/Introduce1_3.svg'
import Introduce2 from '@/public/images/Introduce2_3.svg'
import Introduce3 from '@/public/images/Introduce3_3.svg'
import Introduce4 from '@/public/images/Introduce4_3.svg'

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
    <section
      id="introduce"
      className="content py-12 tablet:py-28 desktop:py-36 px-4"
    >
      <div className="flex-col w-full flex-center tablet:w-[768px] desktop:w-[1024px] desktop-xl:w-[1360px]  m-auto">
        <div className="flex flex-col items-center max-w-[560px]">
          <div className="flex flex-col space-y-2 items-center">
            <p className="tablet:text-h1 text-mobile-h1 leading-10 text-center">
              모두에게 <br className="block tablet:hidden" />
              열려있는 컨퍼런스
            </p>
          </div>
          <p className="tablet:text-body1 text-mobile-body2 text-center mt-6 text-typo-white-text">
            테오의 컨퍼런스는{' '}
            <strong className="text-typo-primary rounded-lg">
              모두에게 열려있는 컨퍼런스
            </strong>
            라는 컨셉을 목표로 <br className="hidden tablet:block" />
            서로가 갖고 있는 다양한 경험과 지식을 공유하고{' '}
            <br className="hidden tablet:block" />
            개발자들간에 소통하는 시간을 만들기 위해 기획되었어요!
          </p>
        </div>
        <div className="bg-background-primary rounded-3xl mt-[2.25rem] max-w-[85rem] w-full tablet:h-[36.875rem] h-[23.75rem]">
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
