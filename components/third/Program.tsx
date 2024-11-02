import clsx from 'clsx'
import Image from 'next/image'

import { programs } from '@/data/third/Programs'
import SpeakerPurple from '@/public/images/SpeakerPurple.svg'
import SpeakerWhite from '@/public/images/SpeakerWhite.svg'

const Program = () => (
  <section
    id="program"
    className="content relative p-12 tablet:p-28 desktop:pb-20 desktop:pt-36 desktop-xl:pb-24 px-4 bg-background-secondary"
  >
    <div className="flex-col gap-12 w-full flex-center tablet:w-[768px] desktop:w-[1024px] m-auto">
      <div className="flex flex-col tablet:space-y-12 space-y-6 items-center w-full">
        <div className="flex flex-col tablet:space-y-4 space-y-2 items-center">
          <p className="text-mobile-h1 tablet:text-h1 text-center">프로그램</p>
          <p className="text-mobile-h2 tablet:text-h3 text-center">
            소중한 경험을 나눠줄&nbsp;
            <br className="block tablet:hidden" />
            스피커의 이야기가 준비되어 있어요!
          </p>
        </div>
      </div>
      <div className="w-full tablet:gap-4 text-white">
        {programs.map((speaker, i) => (
          <div
            key={speaker.name}
            className={clsx(
              'flex flex-col bg-black tablet:px-6 desktop:px-8 desktop:pt-8 desktop-xl:px-8 desktop-xl:pt-8 desktop:justify-between justify-between break-keep',
              i == 0
                ? 'rounded-t-lg'
                : i == programs.length - 1
                ? 'rounded-b-lg'
                : '',
              i < programs.length
                ? 'px-4 pt-5 pb-0'
                : 'px-4 pt-5 pb-4 tablet:pb-6 desktop:pb-8'
            )}
          >
            <div
              className={clsx(
                `h-full w-full flex justify-between items-start`,
                i < programs.length
                  ? 'border-b border-white pb-5 tablet:pb-6 desktop:pb-8'
                  : ''
              )}
            >
              <div className="mr-4 flex flex-col justify-between">
                <div className="tablet:space-y-3">
                  <span className="tablet:text-sub-h1 text-sub-h2 tablet:flex tablet:justify-start items-start text-white">
                    {speaker.title}
                  </span>
                </div>
                <div className="flex justify-between items-end mt-4 desktop:items-end">
                  <div className="flex flex-col justify-between desktop:flex-row desktop:gap-4 desktop:items-center">
                    <div>
                      <span className="tablet:text-sub-h2 text-mobile-sub-h2">
                        {speaker.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {i % 2 === 0 ? (
                <Image alt="speaker image" src={SpeakerPurple} />
              ) : (
                <Image alt="speaker image" src={SpeakerWhite} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Program
