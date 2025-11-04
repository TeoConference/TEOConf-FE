import Image from 'next/image'
import { getPath } from '@/utils/path'
// test
const Introduce = () => {
  return (
    <section className="relative w-full overflow-hidden py-12 tablet:py-20 desktop:py-24 bg-gray-50">
      <div className="w-full max-w-[1200px] mx-auto px-4 tablet:px-8 flex-center flex-col">
        {/* Talk, Experience, Openly */}
        <h3 className="text-purple-500 text-[1.5rem] tablet:text-[2rem] font-normal text-center mb-6 tablet:mb-8">
          Talk, Experience, Openly
        </h3>

        {/* 테두리 없이, 오늘의 경험을 나누는 놀이터 */}
        <h2 className="hidden desktop:block text-gray-800 text-[1.875rem] tablet:text-[2rem] desktop:text-[2.25rem] font-bold text-center max-w-4xl mb-8 tablet:mb-6">
          <span className="text-purple-600">테</span>
          두리 없이, <span className="text-purple-600">오</span>
          늘의 경험을 나누는 놀이터
        </h2>

        {/* 솔직한 당신의 경험이 누군가의 영감이 되는 네트워킹 공간에 초대합니다! */}
        <div className="flex flex-col text-center max-w-[840px] mx-auto pb-44 tablet:pb-48 desktop:pb-56">
          <p className="text-purple-400 text-[2rem] tablet:text-[3.5rem] desktop:text-[3rem] font-bold">
            솔직한 당신의 경험이
            <br className="desktop:hidden" />
            <span className="text-purple-600 font-extrabold">
              {' '}
              누군가의 영감이 되는
            </span>
            <br />
            <span>
              네트워킹 공간에 <br className="tablet:hidden" />
              초대합니다!
            </span>
          </p>
        </div>
      </div>

      {/* 캐릭터 일러스트 */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <Image
          src={getPath('/images/2025/assets/Group 101.svg')}
          alt="character"
          width={664}
          height={424}
          className="max-w-[480px] tablet:max-w-[480px] desktop:max-w-[640px] h-auto w-full"
        />
      </div>
    </section>
  )
}

export default Introduce
