export interface ArchiveItem {
  name: string
  path: string
}

export type NavItem = { type: 'nav'; name: string; sectionId: string }
export type FAQItem = { type: 'faq'; name: string; link: string }
export type SidebarItem = NavItem | FAQItem

export const ARCHIVE_ITEMS: ArchiveItem[] = [
  { name: '테오콘 1기', path: '/first' },
  { name: '테오콘 2기', path: '/second' },
  { name: '테오콘 2024', path: '/third' },
]

export const NAV_ITEMS: NavItem[] = [
  { type: 'nav', name: '세션', sectionId: 'sessions' },
  { type: 'nav', name: '모아보기', sectionId: 'overview' },
  { type: 'nav', name: '후원사', sectionId: 'sponsor' },
]

export const FAQ_ITEM: FAQItem = {
  type: 'faq',
  name: 'FAQ',
  link: 'https://basalt-burn-cee.notion.site/TEOConf-2025-FAQ-2a168692489880d785b1ebd46ec83391',
}
