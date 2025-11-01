import React from 'react'
import Image from 'next/image'

const EliceLab = () => {
  return (
    <section className="relative w-full min-h-[500px] tablet:min-h-[600px] desktop:min-h-[700px] overflow-hidden">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/2025/background/elicelap-bg.png')",
        }}
      />

      {/* 보라색 계열 오버레이 */}
      <div className="absolute inset-0 bg-[#EEDDFD]/50" />

      {/* 콘텐츠 */}
      <div className="relative z-10 w-full h-full min-h-[500px] tablet:min-h-[600px] desktop:min-h-[700px] flex items-center justify-center px-4 tablet:px-8">
        <div className="flex flex-col items-center justify-center gap-2 tablet:gap-4 text-center max-w-4xl mx-auto">
          {/* 슬로건 */}
          <div className="flex flex-col gap-2">
            <h2 className="text-black text-[1.5rem] tablet:text-[2rem] desktop:text-[2.5rem] font-semibold leading-tight">
              TEOConf 2025는 K-하이테크 플랫폼
            </h2>
            <p className="text-black text-[1.25rem] tablet:text-[1.5rem] desktop:text-[2rem] font-medium leading-tight">
              <span className="text-[#8814F4]">엘리스Lab</span>과 함께합니다.
            </p>
          </div>

          {/* 로고 */}
          <div className="mt-4 tablet:mt-6">
            <Image
              src="/images/2025/assets/logo/elice-logo.svg"
              alt="엘리스랩 로고"
              width={249}
              height={78}
              className="w-[200px] tablet:w-[249px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EliceLab
