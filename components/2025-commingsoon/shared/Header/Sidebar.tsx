import React from 'react'
import { scrollToSection } from '@/utils/scroll'
import {
  ARCHIVE_ITEMS,
  NAV_ITEMS as navItems,
  FAQ_ITEM as faqItem,
  SidebarItem,
} from '@/data/2025/navigation'
import SidebarAccordionItem from './SidebarAccordionItem'
import HelpOutline from '@mui/icons-material/HelpOutline'

interface SidebarProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  if (!isOpen) return null

  const handleItemClick = (item: SidebarItem) => {
    switch (item.type) {
      case 'nav':
        scrollToSection(item.sectionId)
        break
      case 'faq':
        window.open(item.link, '_blank')
        break
    }
    setIsOpen(false)
  }

  return (
    <div
      className="fixed inset-0 top-[64px] tablet:top-14 bg-purple-800 text-white z-40 overflow-y-auto desktop:hidden"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsOpen(false)
        }
      }}
    >
      <div className="flex flex-col items-center pt-8">
        {navItems.map((item, idx) => (
          <div
            key={`sidebar-${idx}-${item.sectionId}`}
            className="w-[90%] py-5 border-b border-white/20 flex"
          >
            <button
              type="button"
              className="w-full flex items-center gap-1 text-white text-[18px] hover:opacity-80 transition-opacity"
              onClick={() => handleItemClick(item)}
            >
              {item.name}
            </button>
          </div>
        ))}
        <div
          key="sidebar-faq"
          className="w-[90%] py-5 border-b border-white/20 flex"
        >
          <button
            type="button"
            className="w-full flex items-center gap-1 text-white text-[18px] hover:opacity-80 transition-opacity"
            onClick={() => handleItemClick(faqItem)}
          >
            {faqItem.name}
            <HelpOutline sx={{ fontSize: '22px' }} />
          </button>
        </div>
        <div className="w-[90%]">
          <SidebarAccordionItem
            title="역대 행사"
            items={ARCHIVE_ITEMS}
            onNavigate={() => setIsOpen(false)}
          />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
