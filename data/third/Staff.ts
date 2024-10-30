import Teo from '@/public/images/staff/Teo.png'
import { StaticImageData } from 'next/image'

type StaffDataType = {
  id: number
  name: string
  description: string
  image: StaticImageData
  url: string
  position: 'developer' | 'designer'
}

export const StaffData: StaffDataType[] = [
  {
    id: 1,
    name: '테오',
    description: '시니어 웹 프론트엔드 개발자입니다',
    image: Teo,
    url: 'https://github.com/developer-1px',
    position: 'developer',
  },
]
