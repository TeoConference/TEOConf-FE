import Image from 'next/image'

import { links } from '@/data/third/Links'
import Instagram from '@/public/images/Instagram.svg'
import LinkedIn from '@/public/images/LinkedIn.svg'
import Logo from '@/public/images/Logo_3.svg'
import Twitter from '@/public/images/Twitter.svg'
import LaunchIcon from '@mui/icons-material/Launch'

const ApplyAndSNS = () => (
  <div className="w-[100%] inline-flex flex-col items-center justify-center px-4 py-14 tablet:py-20 desktop:py-26 desktop-xl:py-30 bg-background-primary">
    <div className="w-full flex flex-col items-center max-w-[700px] mx-auto">
      <a
        className="w-full py-6 mb-10 flex justify-center rounded-lg bg-background-default"
        href={links.submitForm}
        target="_blank"
      >
        <Image alt="logo" src={Logo} />
        <div className="ml-4">
          <p className="text-h3 text-center">
            <span className="text-typo-primary rounded-lg">참가신청</span>하기{' '}
            <LaunchIcon className="text-typo-primary" />
          </p>
        </div>
      </a>
      <p className="text-h3 text-center text-typo-white">
        <span className="text-typo-primary rounded-lg">테오콘 소식</span>을{' '}
        <br className="block tablet:hidden" /> 더 빨리 알고 싶다면?
      </p>
      <div className="flex mt-6 tablet:mt-14 gap-4">
        <a
          href={links.linkedin}
          target="_blank"
          className="flex p-3 tablet:p-4 bg-white rounded-lg"
        >
          <Image
            src={LinkedIn}
            alt="linkedin 바로가기"
            className="h-full"
            width={34}
            height={34}
          />
        </a>
        <a
          href={links.twitter}
          target="_blank"
          className="flex p-3 tablet:p-4 bg-white rounded-lg"
        >
          <Image
            src={Twitter}
            alt="twitter 바로가기"
            className="h-full"
            width={34}
            height={34}
          />
        </a>
        <a
          href={links.instagram}
          target="_blank"
          className="flex p-3 tablet:p-4 bg-white rounded-lg"
        >
          <Image
            src={Instagram}
            alt="instagram 바로가기"
            className="h-full"
            width={34}
            height={34}
          />
        </a>
      </div>
    </div>
  </div>
)

export default ApplyAndSNS
