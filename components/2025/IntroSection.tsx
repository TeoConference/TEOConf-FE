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
          <div className="relative w-full h-full flex items-end justify-center">
            {/* 별 스파클 장식 */}
            <div className="absolute inset-0">
              {/* 별 모양 스파클들 */}
              <div className="absolute top-10 left-10 w-2 h-2 bg-[#A855F7] rounded-sm rotate-45 opacity-60"></div>
              <div className="absolute top-20 right-20 w-2 h-2 bg-white rounded-sm rotate-45 opacity-60"></div>
              <div className="absolute top-16 left-1/3 w-1.5 h-1.5 bg-[#A855F7] rounded-sm rotate-45 opacity-40"></div>
              <div className="absolute top-24 right-1/4 w-2 h-2 bg-white rounded-sm rotate-45 opacity-60"></div>
              <div className="absolute top-32 left-1/4 w-1.5 h-1.5 bg-[#A855F7] rounded-sm rotate-45 opacity-50"></div>
              <div className="absolute top-12 right-12 w-2 h-2 bg-white rounded-sm rotate-45 opacity-60"></div>
            </div>

            {/* 캐릭터 영역 - 실제 이미지가 있다면 교체 */}
            <div className="relative z-10 flex items-end justify-center gap-4">
              {/* 노란색 캐릭터 */}
              <div className="w-32 h-32 tablet:w-40 tablet:h-40 bg-yellow-400 rounded-full flex items-center justify-center relative">
                <div className="absolute top-6 left-8 w-3 h-3 bg-black rounded-full"></div>
                <div className="absolute top-6 right-8 w-3 h-3 bg-black rounded-full"></div>
                <div className="absolute bottom-6 w-16 h-8 bg-black rounded-full opacity-30"></div>
              </div>

              {/* 파란색 캐릭터 (작은) */}
              <div className="w-20 h-20 tablet:w-24 tablet:h-24 bg-blue-400 rounded-full flex items-center justify-center relative -ml-4">
                <div className="absolute top-4 left-5 w-2 h-2 bg-black rounded-full"></div>
                <div className="absolute top-4 right-5 w-2 h-2 bg-black rounded-full"></div>
                <div className="absolute bottom-4 w-10 h-5 bg-black rounded-full opacity-30"></div>
              </div>

              {/* 녹색 캐릭터 */}
              <div className="w-28 h-28 tablet:w-36 tablet:h-36 bg-green-400 rounded-full flex items-center justify-center relative -ml-4">
                <div className="absolute top-5 left-6 w-3 h-3 bg-black rounded-full"></div>
                <div className="absolute top-5 right-6 w-3 h-3 bg-black rounded-full"></div>
                <div className="absolute bottom-5 w-14 h-7 bg-black rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroSection
