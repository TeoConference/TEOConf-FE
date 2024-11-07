import { eventDetails } from '@/data/third/EventDetails'
import { sponsor } from '@/data/third/Sponsor'
import HHPlusLogo from '@/public/images/HHPlusLogo.svg'
import Image from 'next/image'

const Sponsor = () => (
  <section className="content flex flex-col items-center justify-center py-12 tablet:py-16 desktop:py-24 bg-background-primary">
    <div className="flex-center flex-col">
      <div className="flex-center flex-col">
        <div className="flex-center flex-col">
          <p className="font-Pretendard text-mobile-h2 text-center tablet:hidden">
            {eventDetails.name_ko}는 <br />
            <a className="hover:underline" target="_blank" href={sponsor.link}>
              &apos;{sponsor.name}&apos;
            </a>
            에서 후원합니다.
            <br />
          </p>
          <p className="hidden tablet:block font-Pretendard font-bold text-h3 mt-8">
            {eventDetails.name_ko}는{' '}
            <a className="hover:underline" target="_blank" href={sponsor.link}>
              &apos;{sponsor.name}&apos;
            </a>
            에서 후원합니다.
            <br />
          </p>
        </div>
      </div>
      <div className="flex-center h-fit mt-4">
        <a target="_blank" href={sponsor.link}>
          <Image
            alt="HHPlusLogo"
            src={HHPlusLogo}
            className="mt-4 tablet:mt-8 tablet:w-[206px] tablet:h-[87px]"
            width={140}
            height={59.13}
          />
        </a>
      </div>
    </div>
  </section>
)

export default Sponsor
