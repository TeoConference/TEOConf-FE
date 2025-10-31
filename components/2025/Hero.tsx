import React from 'react'

const Hero = () => {
  return (
    <section
      id="banner"
      className="relative w-full h-[calc(100vh_-_4rem)] flex-center overflow-hidden bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/images/2025/background/commingsoon-bg.png')",
      }}
    >
      <div className="w-full h-full flex-center flex-col relative z-[1]">
        {/* 컨텐츠가 필요하면 여기에 추가 */}
      </div>
    </section>
  )
}

export default Hero
