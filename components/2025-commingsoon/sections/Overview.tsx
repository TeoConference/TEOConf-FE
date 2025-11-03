import OverviewCard from '../shared/Card/OverviewCard'
import MarqueeWrapper from '../shared/Marquee/MarqueeWrapper'
import { Overview as OverviewData } from '../constants/data'

const Overview = () => {
  return (
    <section
      id="overview"
      className="relative w-full overflow-hidden bg-gray-50 py-16 tablet:py-24"
    >
      <div className="w-full flex-center flex-col">
        {/* 제목 */}
        <div className="flex flex-col gap-4 p-2 tablet:p-0 mb-8 tablet:mb-12 ">
          <h2 className="w-full text-gray-800 text-[2rem] tablet:text-[3.5rem] desktop:text-[3rem] font-bold text-center max-w-4xl ">
            테오콘 <strong className="text-purple-500">모아보기</strong>
          </h2>

          <strong className="text-gray-800 text-[1.5rem] tablet:text-[2rem] font-normal text-center max-w-4xl mb-8 tablet:mb-12">
            역대 테오콘이 궁금하다면? <br className="desktop:hidden" />
            아래 글들을 확인해보세요!
          </strong>
        </div>

        {/* 내용 영역 */}
        <MarqueeWrapper>
          {OverviewData.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[228px] tablet:w-[400px] desktop:w-[360px]"
            >
              <OverviewCard {...item} />
            </div>
          ))}
        </MarqueeWrapper>
      </div>
    </section>
  )
}

export default Overview
