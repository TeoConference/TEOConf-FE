export interface TimeTableItem {
  time: string
  title: string
  type?: 'session' | 'break' | 'opening' | 'closing' | 'etc'
}

export const timetableData: TimeTableItem[] = [
  {
    time: '13:00-13:10',
    title: '자리 안내 및 행사 소개',
    type: 'etc',
  },
  {
    time: '13:10-13:25',
    title: '오프닝(테오&엘리스)',
    type: 'opening',
  },
  {
    time: '13:25-14:00',
    title: '팀 빌딩 및 네트워킹',
  },
  {
    time: '14:00-14:30',
    title: '세션1 + Q&A',
    type: 'session',
  },
  {
    time: '14:30-14:50',
    title: '팀 토론 세션',
    type: 'session',
  },
  {
    time: '14:50-15:00',
    title: '쉬는 시간',
    type: 'break',
  },
  {
    time: '15:00-15:30',
    title: '세션2 + Q&A',
    type: 'session',
  },
  {
    time: '15:30-15:50',
    title: '팀 토론 세션',
    type: 'session',
  },
  {
    time: '15:50-16:10',
    title: '쉬는 시간 + 간식 타임',
    type: 'break',
  },
  {
    time: '16:10-16:40',
    title: '세션3 + Q&A',
    type: 'session',
  },
  {
    time: '16:40-17:00',
    title: '팀 토론 세션',
    type: 'session',
  },
  {
    time: '17:00-17:10',
    title: '쉬는 시간',
    type: 'break',
  },
  {
    time: '17:10-17:20',
    title: '선물 교환식',
    type: 'etc',
  },
  {
    time: '17:20-17:40',
    title: '테오의 고민 상담소',
    type: 'opening',
  },
  {
    time: '17:40-17:50',
    title: '럭키드로우',
  },
  {
    time: '17:50-18:00',
    title: '마무리, 단체 사진 및 뒤풀이 안내',
    type: 'closing',
  },
]
