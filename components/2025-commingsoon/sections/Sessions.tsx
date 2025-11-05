import { sessions } from '@/data/2025/session'
import clsx from 'clsx'
import Image from 'next/image'

const Sessions = () => (
  <section
    id="sessions"
    className="relative w-full overflow-hidden py-16 px-6 tablet:py-24 tablet:px-8 desktop:px-12 bg-gray-100"
  >
    {/* 제목 */}
    <div className="flex flex-col gap-4 p-2 tablet:p-0 mb-8 tablet:mb-12 ">
      <div className="w-full flex-center flex-col">
        <h2 className="w-full text-gray-800 text-[2rem] tablet:text-[3.5rem] desktop:text-[3rem] font-bold text-center max-w-4xl ">
          세션 소개
        </h2>

        <strong className="text-gray-800 text-[1.5rem] tablet:text-[2rem] font-normal text-center max-w-4xl">
          올해는 어떤{' '}
          <strong className="text-purple-500 font-bold">이야기</strong>들이
          <br className="table:hidden" />
          펼쳐질까요?
        </strong>
      </div>
    </div>
    {/* 내용 영역 */}
    {sessions.map((session) => (
      <div
        key={session.date3}
        className="flex flex-col gap-8 w-full flex-center tablet:max-w-[768px] desktop:max-w-[1024px] m-auto"
      >
        <p className="text-[1.5rem] tablet:text-[2rem] text-center font-extrabold mt-8">
          {session.date3}
        </p>
        <div className="w-full tablet:gap-4">
          {session.speakers.map((speaker, i) => (
            <div
              key={`${i}-${speaker.name}`}
              className={clsx(
                'flex flex-col bg-purple-800 text-gray-200 tablet:px-6 desktop:px-8 desktop:pt-8 desktop-xl:px-8 desktop-xl:pt-8 desktop:justify-between justify-between break-keep',
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
                      <div className="flex gap-2">
                        {speaker.keywords.slice(0, 3).map((keyword, i) => (
                          <span
                            key={`${i}-${keyword}`}
                            className="bg-gray-200 text-gray-900 py-1 px-2 rounded-2xl text-xs tablet:text-sm font-medium"
                          >
                            {`# ${keyword}`}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Image
                    alt="speaker image"
                    src={speaker.image}
                    className="w-[70px] aspect-square rounded-lg"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                  <span className="text-lg text-gray-200 font-semibold">
                    {speaker.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </section>
)

export default Sessions
