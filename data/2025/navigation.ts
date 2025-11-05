export interface ArchiveItem {
  name: string
  path: string
}

export interface SidebarItem {
  name: string
  sectionId?: string
  link?: string
}

export const ARCHIVE_ITEMS: ArchiveItem[] = [
  { name: '테오콘 1기', path: '/first' },
  { name: '테오콘 2기', path: '/second' },
  { name: '테오콘 2024', path: '/third' },
]

export const SIDEBAR_ITEMS: SidebarItem[] = [
  { name: '모아보기', sectionId: 'overview' },
  { name: '후원사', sectionId: 'sponsor' },
  {
    name: 'FAQ',
    link: 'https://basalt-burn-cee.notion.site/TEOConf-2025-FAQ-2a168692489880d785b1ebd46ec83391',
  },
]
