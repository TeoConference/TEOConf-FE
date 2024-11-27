export const timetables = [
  {
    date: '11.23. 토요일',
    tables: [
      {
        startTime: '13:00',
        endTime: '13:20',
        content: '입장, 오프닝과 스폰서 소개 - 항해 플러스!',
      },
      { startTime: '13:20', endTime: '14:00', content: '팀빌딩과 팀네트워킹' },
      { startTime: '14:00', endTime: '14:10', content: '쉬는 시간' },
      {
        startTime: '14:10',
        endTime: '14:40',
        content: '30명의 심리 싸움, 오프라인 주식게임 제작기 - 하이안',
        isSession: true,
      },
      {
        startTime: '14:40',
        endTime: '15:10',
        content:
          'Trunk Code Quality로 일관성 있는 코드를 쓰는 개발자 되기 - 앤드류',
        isSession: true,
      },
      {
        startTime: '15:10',
        endTime: '15:40',
        content: '세션 네트워킹 & 쉬는 시간',
      },
      {
        startTime: '15:40',
        endTime: '16:10',
        content: '출근해서 바로 써먹을 수 있는 커뮤니케이션 팁 - 동훈',
        isSession: true,
      },
      {
        startTime: '16:10',
        endTime: '16:40',
        content:
          '주니어 개발자의, 200일간 혼자만의 짧은 글쓰기 챌린지로 성장하기 - 병스커',
        isSession: true,
      },
      {
        startTime: '16:40',
        endTime: '17:10',
        content: '세션 네트워킹 & 쉬는 시간',
      },
      { startTime: '17:10', endTime: '17:30', content: '테오의 Q&A' },
      { startTime: '17:30', endTime: '17:40', content: '선물교환식' },
      { startTime: '17:40', endTime: '18:00', content: '럭키드로우 & 마무리' },
      { startTime: '18:00', endTime: '', content: '뒤풀이' },
    ],
  },

  {
    date: '11.24. 일요일',
    tables: [
      {
        startTime: '13:00',
        endTime: '13:20',
        content: '입장, 오프닝과 스폰서 소개 - 항해 플러스!',
      },
      { startTime: '13:20', endTime: '14:00', content: '팀빌딩과 팀네트워킹' },
      { startTime: '14:00', endTime: '14:10', content: '쉬는 시간' },
      {
        startTime: '14:10',
        endTime: '14:40',
        content: '30명의 심리 싸움, 오프라인 주식게임 제작기 - 하이안',
        isSession: true,
      },
      {
        startTime: '14:40',
        endTime: '15:10',
        content: '어댑터 아키텍처를 통해 클라이언트 환경 개선하기 - 해피',
        isSession: true,
      },
      {
        startTime: '15:10',
        endTime: '15:40',
        content: '세션 네트워킹 & 쉬는 시간',
      },
      {
        startTime: '15:40',
        endTime: '16:10',
        content: 'EventManager 패턴을 활용하여 상태를 전역처럼 관리하기 - 김첨지',
        isSession: true,
      },
      {
        startTime: '16:10',
        endTime: '16:40',
        content: '대용량 파일 쉽게 다루기 - 토마토',
        isSession: true,
      },
      {
        startTime: '16:40',
        endTime: '17:10',
        content: '세션 네트워킹 & 쉬는 시간',
      },
      { startTime: '17:10', endTime: '17:30', content: '테오의 Q&A' },
      { startTime: '17:30', endTime: '17:40', content: '선물교환식' },
      { startTime: '17:40', endTime: '18:00', content: '럭키드로우 & 마무리' },
      { startTime: '18:00', endTime: '', content: '뒤풀이' },
    ],
  },
] as const
