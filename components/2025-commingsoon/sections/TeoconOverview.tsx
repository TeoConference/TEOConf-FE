import TeoconCard from '../shared/Card/TeoconCard'
import MarqueeWrapper from '../shared/Marquee/MarqueeWrapper'
import { TeoConOverview } from '../constants/TeoConOverview'

const TeoconOverview = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white  bg-[#F9FAFB] py-16 tablet:py-24">
      <div className="w-full flex-center flex-col">
        {/* 제목 */}
        <div className="flex flex-col gap-4 mb-8 tablet:mb-12">
          <h2 className="w-full text-center text-[#1F2937] text-[1.875rem] tablet:text-[2rem] desktop:text-[2.25rem] font-semibold text-center max-w-4xl ">
            테오콘 <strong className="text-[#A855F7]">모아보기</strong>
          </h2>

          <strong className="text-[#1F2937] text-[1.25rem] tablet:text-[1.5rem] font-normal text-center max-w-4xl mb-8 tablet:mb-12">
            역대 테오콘이 궁금하다면? 아래 글들을 확인해보세요!
          </strong>
        </div>

        {/* 내용 영역 */}
        <MarqueeWrapper>
          {TeoConOverview.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[320px] tablet:w-[400px] desktop:w-[360px]"
            >
              <TeoconCard {...item} />
            </div>
          ))}
        </MarqueeWrapper>
      </div>
    </section>
  )
}

export default TeoconOverview
