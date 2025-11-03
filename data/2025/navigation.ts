export interface ArchiveItem {
  name: string
  path: string
}

export interface SidebarItem {
  name: string
  sectionId: string
}

export const ARCHIVE_ITEMS: ArchiveItem[] = [
  { name: '테오콘 1기', path: '/first' },
  { name: '테오콘 2기', path: '/second' },
  { name: '테오콘 2024', path: '/third' },
]

export const SIDEBAR_ITEMS: SidebarItem[] = [
  { name: '모아보기', sectionId: 'overview' },
  { name: '후원사', sectionId: 'sponsor' },
]
