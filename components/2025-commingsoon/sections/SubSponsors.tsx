import Image from 'next/image'

const SUB_SPONSORS = [
  { src: '/images/2025/assets/logo/easyspub1.png', alt: '이지스퍼블리싱' },
  { src: '/images/2025/assets/logo/easyspub2.png', alt: '이지스퍼블리싱' },
]

const SubSponsors = () => {
  return (
    <section
      id="sub-sponsors"
      className="w-full py-12 tablet:py-16 desktop:py-20 bg-gray-50"
    >
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 tablet:px-8 gap-10">
        <h2 className="text-black text-[1.5rem] tablet:text-[2rem] desktop:text-[2.5rem] font-bold leading-tight">
          후원사
        </h2>

        <div className="flex flex-col desktop:flex-row items-center justify-center gap-6 tablet:gap-10">
          {SUB_SPONSORS.map((sponsor, index) => (
            <div
              key={index}
              className="relative w-[320px] h-[180px] flex items-center justify-center"
            >
              <Image
                src={sponsor.src}
                alt={sponsor.alt}
                width={320}
                height={180}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SubSponsors
