import defaultImg from '@/public/images/2025/speakersImg/Default.png'
import Ant from '@/public/images/2025/speakersImg/Ant.jpeg'
import JaeBing from '@/public/images/2025/speakersImg/jaebing.jpeg'
import Linker from '@/public/images/2025/speakersImg/linker.jpeg'
import PJH from '@/public/images/2025/speakersImg/pjh.jpg'
import Zen from '@/public/images/2025/speakersImg/Zen.jpeg'
import Minu from '@/public/images/2025/speakersImg/minu.jpeg'
import MS from '@/public/images/2025/speakersImg/ms.jpg'
import Passport from '@/public/images/2025/speakersImg/passport.png'
import Bini from '@/public/images/2025/speakersImg/Bini.png'
import Jeremy from '@/public/images/2025/speakersImg/Jeremy.png'
import OJM from '@/public/images/2025/speakersImg/OJM.jpg'

export const sessions = [
  {
    date1: '12.06. 토요일',
    date2: '12-06 Sat',
    date3: '12-06',
    speakers: [
      {
        title: '3주간의 디자인 시템 배 삽질기',
        name: '한상욱',
        image: Ant,
        keywords: ['초~중급', '디자인 시스템 배포', '실무경험'],
      },
      {
        title:
          '혼자서도 잘해요? 주니어 개발자의 TanStack Query 캐시 갱신 디버깅 여정',
        name: '재빙',
        image: JaeBing,
        keywords: ['개발', '주니어(또는 초급)', '프론트엔드'],
      },
      {
        title: '첫 인턴에 Spring 백엔드 개발이요?? - 난 프론트인데?',
        name: '링커',
        image: Linker,
        keywords: ['개발', '인턴', '경험', '성장'],
      },
      {
        title: 'React 19가 풀고자 한 문제들',
        name: '박정환',
        image: PJH,
        keywords: ['FE', 'React', 'UX'],
      },
      {
        title: 'if(`좌절`) return `성장`; 좌절을 성장으로 바꾸는 방법',
        name: 'Zen',
        image: Zen,
        keywords: ['회고', '성장', '경험담', '성장기'],
      },
      {
        title: '10만명 사용자 게임, 2주 만에 아이디어부터 배포까지',
        name: 'minu',
        image: Minu,
        keywords: ['사이드 프로젝트', '경험', '회고'],
      },
      {
        title: 'FSD로 도메인 이해하기',
        name: '모승',
        image: MS,
        keywords: ['개발', 'FSD', '아키텍처'],
      },
      {
        title: '권한 관리, 아직도 그렇게 하시나요?',
        name: '여권',
        image: Passport,
        keywords: ['권한', 'ReBAC', 'GraphQL'],
      },
    ],
  },
  {
    date1: '12.07. 일요일',
    date2: '12-07 Sun',
    date3: '12-07',
    speakers: [
      {
        title: '아직 2년차인데 팀장이 되어버렸다!',
        name: '오원',
        image: defaultImg,
        keywords: ['개발', '커리어/성장', '팀워크', '문화', '리더십'],
      },
      {
        title: '우리 팀은 코드 리뷰를 병목 과정으로 두지 않기로 했다.',
        name: 'Jeremy',
        image: Jeremy,
        keywords: ['개발문화', '코드리뷰', '성장'],
      },
      {
        title: '최신 기술을 적극적으로 활용하며 나아가기',
        name: '준',
        image: defaultImg,
        keywords: ['기술 스텍', '기술 부채', '최신 기술', '버전 관리'],
      },
      {
        title: '쿠키를 공유하고 싶어',
        name: '빡준',
        image: defaultImg,
        keywords: ['레거시', '마이그레이션', '테크'],
      },
      {
        title: '유명한 기술을 쓰는게 정답인가?',
        name: '비니',
        image: Bini,
        keywords: ['커리어/성장', '트랜드보다본질', '개발가치관'],
      },
      {
        title: 'ZeroRuntime CSS in JS, Devup UI',
        name: '오정민',
        image: OJM,
        keywords: [
          'CSS in JS',
          'CSS',
          'Web',
          'React',
          'ZeroRuntime',
          'Rust',
          'WASM',
          'Styled System',
          'figma 통합',
        ],
      },
      {
        title: 'Rust로 프로그래밍 언어와 플랫폼 장벽넘기',
        name: '오정민',
        image: OJM,
        keywords: ['Rust', '사회적 기술', '크로스 언어 지원', 'WASM'],
      },
    ],
  },
]
