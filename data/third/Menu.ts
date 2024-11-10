export type Menu = {
  id: string
  name: string
  children?: Array<Menu>
  link?: string
}

export const menu: Array<Menu> = [
  { name: '프로그램', id: 'program' },
  { name: '타임테이블', id: 'timetable' },
  { name: '장소', id: 'location' },
  {
    name: 'FAQ',
    id: 'faq',
    children: [
      { name: '자주 묻는 질문', id: 'faq1' },
      { name: '행동강령', id: 'faq2' },
    ],
  },
  {
    name: '지난 행사',
    id: 'passed-confs',
    children: [
      { name: '테오콘 1기', id: 'sub1', link: 'first' },
      { name: '테오콘 2기', id: 'sub2', link: 'second' },
    ],
  },
]
