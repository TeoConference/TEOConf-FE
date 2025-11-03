import { useState } from 'react'
import { useRouter } from 'next/router'
import { KeyboardArrowUp } from '@mui/icons-material'
import clsx from 'clsx'

interface ArchiveItem {
  name: string
  path: string
}

interface SidebarAccordionItemProps {
  title: string
  items: ArchiveItem[]
  onNavigate: () => void
}

const SidebarAccordionItem = ({
  title,
  items,
  onNavigate,
}: SidebarAccordionItemProps) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigation = (path: string) => {
    router.push(path)
    onNavigate()
  }

  return (
    <>
      <div className="py-5 border-b border-white/20 flex justify-between items-center">
        <button
          type="button"
          className="flex-1 text-left text-white text-[18px] hover:opacity-80 transition-opacity"
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
        </button>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex-center"
        >
          <KeyboardArrowUp
            className={clsx(
              'transition-transform',
              isOpen ? 'rotate-[0deg]' : '-rotate-[180deg]'
            )}
          />
        </button>
      </div>
      <div
        className={clsx(
          'text-[16px] space-y-4 overflow-hidden transition-all',
          isOpen ? 'pb-4 max-h-96' : 'pb-0 max-h-0'
        )}
      >
        {items.map((item, idx) => (
          <div key={idx} className={idx === 0 ? 'pt-2' : ''}>
            <button
              type="button"
              className="w-full text-left pl-4 hover:opacity-80 transition-opacity"
              onClick={() => handleNavigation(item.path)}
            >
              {item.name}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default SidebarAccordionItem
