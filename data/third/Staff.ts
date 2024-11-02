import Teo from '@/public/images/staff/Teo.png'
import Casey from '@/public/images/staff/third/Casey.jpg'
import Field from '@/public/images/staff/third/Field.jpg'
import Jyan from '@/public/images/staff/third/Jyan.jpg'
import Mincho from '@/public/images/staff/third/Mincho.jpg'
import Seoltang from '@/public/images/staff/third/Seoltang.jpg'
import Solssak from '@/public/images/staff/third/Solssak.jpg'
import Sooya from '@/public/images/staff/third/Sooya.jpg'
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
  {
    id: 2,
    name: '케시',
    description: '생각을 현실로 만드는 개발자',
    image: Casey,
    url: 'https://github.com/junny97',
    position: 'developer',
  },
  {
    id: 3,
    name: '필드',
    description: '든든한 서포터, 근데 이제 개발을 곁들인',
    image: Field,
    url: 'https://github.com/kimfield98',
    position: 'developer',
  },
  {
    id: 4,
    name: '쟌',
    description: '매일매일이 고점인 사람',
    image: Jyan,
    url: 'https://github.com/bbbjihan',
    position: 'developer',
  },
  {
    id: 5,
    name: '민초',
    description: '함께 고민하는 것을 좋아하는 개발자',
    image: Mincho,
    url: 'https://github.com/chhw130',
    position: 'developer',
  },
  {
    id: 6,
    name: '설탕',
    description: '가치를 만드는 개발자',
    image: Seoltang,
    url: 'https://github.com/seoltang',
    position: 'developer',
  },
  {
    id: 7,
    name: '솔싹',
    description: '늘 즐거운 개발자',
    image: Solssak,
    url: 'https://github.com/solssak',
    position: 'developer',
  },
  {
    id: 8,
    name: '수야',
    description: '사용자 중심의 개발 철학을 실천하는 개발자',
    image: Sooya,
    url: 'https://github.com/soojjung',
    position: 'developer',
  },
]
