import { KeyboardArrowDown, KeyboardArrowUp, Square } from '@mui/icons-material'
import LaunchIcon from '@mui/icons-material/Launch'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

interface SidebarProps {
  currentId: string
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SIDEBAR_ITEMS = {
  CONTENTS: [
    { name: '프로그램', link: '#program', id: 'program' },
    { name: '네트워킹', link: '#networking', id: 'networking' },
    { name: '현장 스케치', link: '#gallery', id: 'gallery' },
    { name: '명함', link: '#name-card', id: 'name-card' },
    { name: '후원사', link: '#sponsor', id: 'sponsor' },
    { name: '장소', link: '#location', id: 'location' },
    { name: 'FAQ', link: '#faq', id: 'faq' },
  ],
  SUB_CONTENTS: [
    { name: '자주 묻는 질문', link: '#sub1' },
    { name: '행동강령', link: '#sub2' },
  ],
}

const Sidebar = (props: SidebarProps) => {
  const { currentId, isOpen, setIsOpen } = props
  const [isArrowOpen, setIsArrowOpen] = useState(false)
  const mount = useRef(false)

  // herf action to close sidebar
  useEffect(() => {
    const handleClick = () => {
      setIsOpen(false)
    }
    if (mount) {
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

  useEffect(() => {
    mount.current = true
  }, [])

  return (
    <div
      className={clsx(
        'transition-all duration-300 text-white bg-black',
        isOpen ? 'toggleOn' : 'hidden'
      )}
    >
      <div className="flex flex-col items-center pt-20 h-full">
        {SIDEBAR_ITEMS.CONTENTS.map((item, idx) => {
          if (idx < 6) {
            return (
              <div
                key={idx}
                className="w-[90%] tablet:w-[85%] py-4 tablet:py-5 border-b-[0.5px] flex"
              >
                <a href={item.link} className="flex items-center gap-4">
                  {currentId === item.id ? (
                    <Square className="fill-purple-main" />
                  ) : (
                    <Square className="fill-[red]" />
                  )}
                  <span>{item.name}</span>
                </a>
              </div>
            )
          } else {
            return (
              <div
                key={idx}
                className="w-[90%] tablet:w-[85%] py-4 tablet:py-5 border-b-[0.5px] flex justify-between"
              >
                <a href={item.link} className="flex items-center gap-4">
                  {currentId === item.id ? (
                    <Square className="fill-purple-main" />
                  ) : (
                    <Square className="fill-[red]" />
                  )}
                  <span>{item.name}</span>
                </a>
                <div
                  className="flex-center"
                  onClick={() => setIsArrowOpen((prev) => !prev)}
                >
                  <button type="button">
                    {isArrowOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                  </button>
                </div>
              </div>
            )
          }
        })}
        <div
          className={`${
            isArrowOpen ? 'block' : 'hidden'
          } text-[1.25rem] tablet:text-[1.625rem] space-y-4 w-[90%] tablet:w-[85%]`}
        >
          {SIDEBAR_ITEMS.SUB_CONTENTS.map((item, idx) => {
            return (
              <div key={idx} className={`${idx === 0 ? 'pt-6' : ''}`}>
                <Square className="invisible" />
                &nbsp;
                <a href={item.link}>{item.name}</a>
              </div>
            )
          })}
        </div>
        <div className="w-[90%] py-4 tablet:py-5">
          <a
            href="https://festa.io/events/3428"
            target="_blank"
            className="inline-flex items-center gap-4"
          >
            <LaunchIcon className="text-purple-main" />{' '}
            <span className="text-purple-main">참가신청</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
