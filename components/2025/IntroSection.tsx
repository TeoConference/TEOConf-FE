import React from 'react'
import Image from 'next/image'

const IntroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 tablet:py-24 bg-[#F9FAFB]">
      <div className="w-full max-w-[1200px] mx-auto px-4 tablet:px-8 flex-center flex-col">
        {/* Talk, Experience, Openly */}
        <h3 className="text-[#A855F7] text-[1.25rem] tablet:text-[1.5rem] font-medium text-center mb-6 tablet:mb-8">
          Talk, Experience, Openly
        </h3>

        {/* 테두리 없이, 오늘의 경험을 나누는 놀이터 */}
        <h2 className="text-[#1F2937] text-[1.875rem] tablet:text-[2.25rem] desktop:text-[3rem] font-semibold text-center max-w-4xl mb-12 tablet:mb-16">
          <span className="text-[#8814F4]">테</span>
          두리 없이, <span className="text-[#8814F4]">오</span>
          늘의 경험을 나누는 놀이터
        </h2>

        {/* 솔직한 당신의 경험이 누군가의 영감이 되는 네트워킹 공간에 초대합니다! */}
        <div className="flex flex-col text-center">
          <p className="text-[#A855F7] text-[1.5rem] tablet:text-[2.25rem] desktop:text-[3rem] font-medium">
            솔직한 당신의 경험이 누군가의{' '}
            <span className="text-[#8814F4]">영감</span>이 되는
          </p>
          <p className="text-[#A855F7] text-[1.5rem] tablet:text-[2.25rem] desktop:text-[3rem] font-medium">
            네트워킹 공간에 초대합니다!
          </p>
        </div>

        {/* 캐릭터 일러스트 */}
        <div className="relative w-full max-w-[600px] h-[300px] tablet:h-[400px] flex items-end justify-center mt-8">
          {/* 캐릭터 이미지가 있다면 사용하고, 없으면 SVG나 placeholder 사용 */}
          <div className="relative w-full h-full">
            <Image
              src="/images/2025/assets/Group 101.svg"
              alt="character"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroSection
