type TalkData = {
  contents: string
  speaker: string
  className?: string
}

export const talkData: TalkData[] = [
  {
    contents: `내 경험을 이야기할 수 있는\n기회가 있으면 좋겠다`,
    speaker: '3년차 주니어 FE개발자',
    className: 'gap-6',
  },
  {
    contents: '다른 주니어는\n어떻게 성장하고 있을까?',
    speaker: '갓 취업한 신입 개발자',
  },
  {
    contents: '나와 비슷한 경험을\n먼저 겪은 사람은 없을까?',
    speaker: '주니어 BE개발자',
  },
  {
    contents: '사이드 프로젝트\n팀원을 구하고 싶은데...',
    speaker: 'FE개발자',
    className: 'gap-0',
  },
]
