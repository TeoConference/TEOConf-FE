import React, { useEffect } from 'react'

interface SidebarProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SIDEBAR_ITEMS = [
  { name: '모아보기', link: '#overview' },
  { name: '후원사', link: '#sponsor' },
]

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  // 링크 클릭 시 사이드바 닫기
  useEffect(() => {
    const handleClick = () => {
      setIsOpen(false)
    }
    if (isOpen) {
      document.querySelectorAll("a[href^='#']").forEach((anchor) => {
        anchor.addEventListener('click', handleClick)
      })
    }
    return () => {
      document.querySelectorAll("a[href^='#']").forEach((anchor) => {
        anchor.removeEventListener('click', handleClick)
      })
    }
  }, [isOpen, setIsOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 top-[64px] tablet:top-14 bg-[#44067F] text-white z-40 overflow-y-auto desktop:hidden"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsOpen(false)
        }
      }}
    >
      <div className="flex flex-col items-center pt-8">
        {SIDEBAR_ITEMS.map((item, idx) => (
          <div key={idx} className="w-[90%] py-5 border-b border-white/20 flex">
            <a
              href={item.link}
              className="flex items-center text-white text-[18px] hover:opacity-80 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
