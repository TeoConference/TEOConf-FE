import Image from 'next/image'

import Networking1 from '@/public/images/Networking_3_1.svg'
import Networking2 from '@/public/images/Networking_3_2.svg'
import Networking3 from '@/public/images/Networking_3_3.svg'
import NameCard from './NameCard'

const Networking = () => (
  <div className="space-y-6 tablet:space-y-20 py-16 tablet:py-28 w-full">
    <div className="flex flex-col space-y-12 items-center">
      <div className="flex flex-col space-y-4 items-center">
        <p className="text-mobile-h1 tablet:text-h1">네트워킹</p>
      </div>
    </div>
    <div className="flex space-x-5 w-full overflow-x-auto desktop:justify-center desktop:max-w-[1600px] desktop-xl:max-w-[1360px] m-auto px-4">
      <div className="flex flex-col space-y-4 tablet:space-y-6 w-full min-w-[280px] tablet:min-w-[328px] desktop:max-w-[328px] desktop-xl:max-w-[440px]">
        <div className="bg-background-primary flex items-center justify-center rounded-2xl h-[240px] tablet:h-[283px] desktop-xl:h-[380px]">
          <Image
            src={Networking1}
            alt="networking image"
            width="84"
            height="100"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col">
            <p className="text-mobile-h2 tablet:text-h3 text-typo-white">
              개발자가 되고 싶어요!
            </p>
            <p className="text-mobile-sub-h2 tablet:text-sub-h2 text-gray-300">
              취준생을 위한 네트워킹
            </p>
          </div>
          <div className="inline-flex space-x-2 text-mobile-body2 tablet:text-body3">
            <div className="inline-flex flex-col px-2 py-0.5 bg-networking-purple-2 rounded">
              <p className="text-black">#취업</p>
            </div>
            <div className="inline-flex flex-col px-2 py-0.5 bg-networking-purple-2 rounded">
              <p className="text-black">#개발입문</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 tablet:space-y-6 w-full min-w-[280px] tablet:min-w-[328px] desktop:max-w-[328px] desktop-xl:max-w-[440px]">
        <div className="bg-background-primary flex items-center justify-center rounded-2xl h-[240px] tablet:h-[283px] desktop-xl:h-[380px]">
          <Image
            src={Networking2}
            alt="networking image"
            width="84"
            height="100"
          />
        </div>
        <div className="flex flex-col space-y-2 whitespace-nowrap">
          <div className="flex flex-col">
            <p className="text-mobile-h2 tablet:text-h3 text-typo-white">
              성장하고 싶어요!
            </p>
            <p className="text-mobile-sub-h2 tablet:text-sub-h2 text-gray-300">
              신입과 주니어를 위한 네트워킹
            </p>
          </div>
          <div className="inline-flex space-x-2 text-mobile-body2 tablet:text-body3">
            <div className="inline-flex flex-col px-2 py-0.5 bg-networking-yellow-2 rounded">
              <p className="text-black">#회사문화</p>
            </div>
            <div className="inline-flex flex-col px-2 py-0.5 bg-networking-yellow-2 rounded">
              <p className="text-black">#자기계발</p>
            </div>
            <div className="inline-flex flex-col px-2 py-0.5 bg-networking-yellow-2 rounded">
              <p className="text-black">#성장</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 tablet:space-y-6 w-full min-w-[280px] tablet:min-w-[328px] desktop:max-w-[328px] desktop-xl:max-w-[440px]">
        <div className="bg-background-primary flex items-center justify-center rounded-2xl h-[240px] tablet:h-[283px] desktop-xl:h-[380px]">
          <Image
            src={Networking3}
            alt="networking image"
            width="84"
            height="100"
          />
        </div>
        <div className="flex flex-col space-y-2 whitespace-nowrap">
          <div className="flex flex-col">
            <p className="text-mobile-h2 tablet:text-h3 text-typo-white">
              함께하고 싶어요!
            </p>
            <p className="text-mobile-sub-h2 tablet:text-sub-h2 text-gray-300">
              스터디와 사이드 프로젝트 팀원이 필요하다면?
            </p>
          </div>
          <div className="inline-flex space-x-2 text-mobile-body2 tablet:text-body3">
            <div className="inline-flex flex-col px-2 py-0.5 bg-networking-blue rounded">
              <p className="text-black">#행사기획</p>
            </div>
            <div className="inline-flex flex-col px-2 py-0.5 bg-networking-blue rounded">
              <p className="text-black">#외부활동</p>
            </div>
            <div className="inline-flex flex-col px-2 py-0.5 bg-networking-blue rounded">
              <p className="text-black">#경험공유</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <NameCard />
  </div>
)

export default Networking
