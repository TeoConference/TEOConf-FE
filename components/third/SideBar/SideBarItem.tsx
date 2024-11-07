import { useMemo, useState } from 'react'
import { Menu } from '@/data/third/Menu'
import { KeyboardArrowUp } from '@mui/icons-material'
import clsx from 'clsx'

interface Props {
  menu: Menu
  currentId: string
}

const SideBarItem = ({ menu, currentId }: Props) => {
  const selected = useMemo(() => menu.id === currentId, [currentId])
  const hasChildren = useMemo(() => typeof menu.children !== 'undefined', [])
  const link = useMemo(() => menu.link ?? `#${menu.id}`, [])

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleIsOpen = () => setIsOpen((prev) => !prev)

  return (
    <>
      <div
        className={clsx(
          'py-4 tablet:py-5 border-b flex',
          hasChildren && ' justify-between',
          selected && 'border-b-main-primary'
        )}
      >
        <a href={link} className="flex items-center gap-4">
          <span>{menu.name}</span>
        </a>
        {hasChildren && (
          <div className="flex-center" onClick={toggleIsOpen}>
            <button type="button">
              <KeyboardArrowUp
                className={clsx(
                  'transition-transform',
                  isOpen ? 'rotate-[0deg]' : '-rotate-[180deg]'
                )}
              />
            </button>
          </div>
        )}
      </div>
      {menu.children && (
        <div
          className={clsx(
            'text-[1.25rem] tablet:text-[1.625rem] space-y-4 overflow-y-hidden transition-all',
            isOpen ? 'pb-4 max-h-full' : 'pb-0 max-h-0'
          )}
        >
          {menu.children.map((item, idx) => {
            return (
              <div key={idx} className={`${idx === 0 ? 'pt-6' : ''}`}>
                <a href={item.link ?? `#${item.id}`}>{item.name}</a>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default SideBarItem
