import React from 'react'
import { scrollToSection } from '@/utils/scroll'

interface SidebarProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SIDEBAR_ITEMS = [
  { name: '모아보기', sectionId: 'overview' },
  { name: '후원사', sectionId: 'sponsor' },
]

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
      </div>
    </div>
  )
}

export default Sidebar
