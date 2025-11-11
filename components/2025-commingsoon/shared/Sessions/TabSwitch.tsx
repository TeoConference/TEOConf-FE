import clsx from 'clsx'
import { TAB_DATES } from './constants'

interface TabSwitchProps {
  activeTab: number
  onTabChange: (tab: number) => void
}

const TabSwitch = ({ activeTab, onTabChange }: TabSwitchProps) => {
  return (
    <div className="mx-auto px-10 tablet:px-8 desktop:px-12 flex justify-center">
      <div className="relative bg-purple-600/50 rounded-full flex h-[2.875rem] w-[17.375rem]">
        {/* 슬라이딩 흰색 배경 */}
        <div
          className="absolute top-0 left-0 w-1/2 h-full bg-white rounded-full transition-transform duration-300 ease-out"
          style={{
            transform: activeTab === 1 ? 'translateX(100%)' : 'translateX(0)',
          }}
        />

        {/* 탭 버튼 */}
        {TAB_DATES.map((date, index) => (
          <button
            key={date}
            onClick={() => onTabChange(index)}
            className={clsx(
              'relative z-10 flex-1 flex items-center justify-center text-2xl font-bold rounded-full transition-colors duration-300',
              activeTab === index ? 'text-purple-600' : 'text-gray-400'
            )}
          >
            {date}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TabSwitch
