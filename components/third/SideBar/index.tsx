import { links } from '@/data/third/Links'
import { menu } from '@/data/third/Menu'
import LaunchIcon from '@mui/icons-material/Launch'
import clsx from 'clsx'
import { useEffect, useRef } from 'react'
import SideBarItem from './SideBarItem'

interface Props {
  currentId: string
  isOpen: boolean
  close: () => void
}

const SideBar = ({ currentId, isOpen, close }: Props) => {
  const mount = useRef(false)

  // herf action to close sidebar
  useEffect(() => {
    if (mount) {
      document.querySelectorAll("a[href^='#']").forEach((anchor) => {
        anchor.addEventListener('click', close)
      })
    }
    return () => {
      document.querySelectorAll("a[href^='#']").forEach((anchor) => {
        anchor.removeEventListener('click', close)
      })
    }
  }, [isOpen, close])

  useEffect(() => {
    mount.current = true
  }, [])

  return (
    <div
      className={clsx(
        'transition-all duration-300 text-typo-white bg-black',
        isOpen ? 'toggleOn' : 'hidden'
      )}
    >
      <div className="flex flex-col px-6 tablet:px-12 pt-20 h-full">
        {menu.map((item) => (
          <SideBarItem
            key={`side-bar-item-${item.id}`}
            menu={item}
            currentId={currentId}
          />
        ))}
        <div className="py-4 tablet:py-5">
          <a
            href={links.submitForm}
            target="_blank"
            className="inline-flex items-center gap-1"
          >
            <span className="text-typo-primary">행사 소개</span>
            <LaunchIcon className="text-typo-primary" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SideBar
