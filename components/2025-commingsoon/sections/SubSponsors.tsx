import Image from 'next/image'
import { SPONSOR_LOGO_SIZE, SUB_SPONSORS } from '@/data/2025/sponsors'

const SubSponsors = () => {
  return (
    <section
      id="sub-sponsors"
      className="w-full py-12 tablet:py-16 desktop:py-20 bg-gray-50"
    >
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 tablet:px-8 gap-10">
        <h2 className="w-full text-gray-800 text-[2rem] tablet:text-[3.5rem] desktop:text-[3rem] font-bold text-center max-w-4xl">
          후원사
        </h2>

        <div className="flex flex-col desktop:flex-row items-center justify-center gap-10 desktop:gap-20">
          {SUB_SPONSORS.map((sponsor) => (
            <div
              key={sponsor.id}
              className="relative flex items-center justify-center"
              style={{
                width: SPONSOR_LOGO_SIZE.WIDTH,
                height: SPONSOR_LOGO_SIZE.HEIGHT,
              }}
            >
              <Image
                src={sponsor.src}
                alt={sponsor.alt}
                width={SPONSOR_LOGO_SIZE.WIDTH}
                height={SPONSOR_LOGO_SIZE.HEIGHT}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SubSponsors
