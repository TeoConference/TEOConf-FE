import { eventDetails } from '@/data/third/EventDetails'
import { sponsor } from '@/data/third/Sponsor'
import HHPlusLogo from '@/public/images/HHPlusLogo.svg'
import Image from 'next/image'

const Sponsor = () => (
  <section
    id="sponsor"
    className="content flex flex-col items-center justify-center h-[16.195rem] tablet:h-[26.4375rem] desktop:h-[28.9375rem] bg-background-secondary"
  >
    <div className="flex-center flex-col">
      <div className="flex-center flex-col">
        <div className="flex-center flex-col">
          <p className="font-Pretendard font-bold text-[2.125rem] tablet:text-[3.125rem] leading-10 text-center">
            후원사
          </p>
          <p className="font-Pretendard font-medium text-[1.125rem] text-center tablet:hidden">
            {eventDetails.name_ko}는 <br />
            <a className="hover:underline" target="_blank" href={sponsor.link}>
              &apos;{sponsor.name}&apos;
            </a>
            에서 후원합니다.
            <br />
          </p>
          <p className="hidden tablet:block font-Pretendard font-bold text-[1.625rem] mt-8">
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
            className="tablet:mt-[3.75rem] tablet:w-[206px] tablet:h-[87px]"
            width={140}
            height={59.13}
          />
        </a>
      </div>
    </div>
  </section>
)

export default Sponsor
