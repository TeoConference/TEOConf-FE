import clsx from 'clsx'
import Image from 'next/image'
import SaveAltIcon from '@mui/icons-material/SaveAlt'

import { sessions } from '@/data/third/Session'
import SpeakerPrimary from '@/public/images/SpeakerPrimary_3.svg'
import SpeakerWhite from '@/public/images/SpeakerWhite_3.svg'

const Session = () => (
  <div className="relative p-12 tablet:p-28 desktop:pb-20 desktop:pt-36 desktop-xl:pb-24 px-4 bg-background-secondary">
    <div className="flex-col gap-16 w-full flex-center tablet:w-[768px] desktop:w-[1024px] m-auto">
      <div className="flex flex-col tablet:space-y-12 space-y-6 items-center w-full">
        <div className="flex flex-col tablet:space-y-4 space-y-2 items-center">
          <p className="text-mobile-h1 tablet:text-h1 text-center">세션</p>
          <p className="text-mobile-h2 tablet:text-h3 text-center">
            소중한 경험을 나눠줄&nbsp;
            <br className="block tablet:hidden" />
            <span className="text-typo-primary">스피커의 이야기</span>가
            준비되어 있어요.
          </p>
        </div>
      </div>
      {sessions.map((session) => (
        <div className="flex flex-col gap-8 w-full flex-center tablet:w-[768px] desktop:w-[1024px] m-auto">
          <p className="text-mobile-h1 tablet:text-h2 text-center">
            {session.date}
          </p>
          <div className="w-full tablet:gap-4 text-white">
            {session.speakers.map((speaker, i) => (
              <div
                key={speaker.name}
                className={clsx(
                  'flex flex-col bg-black text-gray-300 tablet:px-6 desktop:px-8 desktop:pt-8 desktop-xl:px-8 desktop-xl:pt-8 desktop:justify-between justify-between break-keep',
                  i == 0
                    ? 'rounded-t-3xl'
                    : i == session.speakers.length - 1
                    ? 'rounded-b-3xl'
                    : '',
                  i < session.speakers.length - 1
                    ? 'px-4 pt-5 pb-0'
                    : 'px-4 pt-5 pb-4 tablet:pb-6 desktop:pb-8'
                )}
              >
                <div
                  className={clsx(
                    `h-full w-full flex justify-between items-start`,
                    i < session.speakers.length - 1
                      ? 'border-b border-gray-200 pb-5 tablet:pb-6 desktop:pb-8'
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
                        <button className="border rounded w-fit py-1 px-2 mt-2 desktop:mt-0">
                          <a
                            href={speaker.resource}
                            target="_blank"
                            className="text-mobile-body2 hover:text-gray-300 transition tablet:text-body3 flex items-center gap-1"
                          >
                            <SaveAltIcon className="w-4 h-4" /> 발표자료
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                  {i % 2 === 0 ? (
                    <Image
                      alt="speaker image"
                      src={speaker.image ?? SpeakerPrimary}
                      className="w-[70px] aspect-square rounded-lg"
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                  ) : (
                    <Image
                      alt="speaker image"
                      src={speaker.image ?? SpeakerWhite}
                      className="w-[70px] aspect-square rounded-lg"
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Session
