import React from 'react'
import { scrollToSection } from '@/utils/scroll'
import { ARCHIVE_ITEMS, SIDEBAR_ITEMS } from '@/data/2025/navigation'
import SidebarAccordionItem from './SidebarAccordionItem'

interface SidebarProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  if (!isOpen) return null

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
        {SIDEBAR_ITEMS.map((item, idx) => (
          <div key={idx} className="w-[90%] py-5 border-b border-white/20 flex">
            <button
              type="button"
              className="w-full flex items-center text-white text-[18px] hover:opacity-80 transition-opacity"
              onClick={() => {
                scrollToSection(item.sectionId)
                setIsOpen(false)
              }}
            >
              {item.name}
            </button>
          </div>
        ))}
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
