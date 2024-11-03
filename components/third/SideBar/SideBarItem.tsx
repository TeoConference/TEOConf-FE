import { Menu } from '@/data/third/Menu'
import { KeyboardArrowDown, KeyboardArrowUp, Square } from '@mui/icons-material'
import clsx from 'clsx'
import { useMemo, useState } from 'react'

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
          'w-[90%] tablet:w-[85%] py-4 tablet:py-5 border-b-[0.5px] flex',
          hasChildren ? ' justify-between' : ''
        )}
      >
        <a href={link} className="flex items-center gap-4">
          {selected ? (
            <Square className="fill-main-primary" />
          ) : (
            <Square className="fill-[#E8E8E8]" />
          )}
          <span>{menu.name}</span>
        </a>
        {hasChildren && (
          <div className="flex-center" onClick={toggleIsOpen}>
            <button type="button">
              {isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </button>
          </div>
        )}
      </div>
      {menu.children && (
        <div
          className="text-[1.25rem] tablet:text-[1.625rem] space-y-4 w-[90%] tablet:w-[85%] overflow-y-hidden"
          style={{
            maxHeight: isOpen ? '100%' : '0',
            transition: 'max-height 1s ease',
          }}
        >
          {menu.children.map((item, idx) => {
            return (
              <div key={idx} className={`${idx === 0 ? 'pt-6' : ''}`}>
                <Square className="invisible" />
                &nbsp;
                <a href={item.link}>{item.name}</a>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default SideBarItem
