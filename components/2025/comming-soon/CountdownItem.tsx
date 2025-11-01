import React from 'react'

interface CountdownItemProps {
  value: string
  label: string
}

const CountdownItem: React.FC<CountdownItemProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-white text-[3rem] tablet:text-[5rem] font-bold leading-[3rem] tablet:leading-[5rem] h-[3rem] tablet:h-[5rem] flex items-center">
        {value}
      </div>
      <div className="text-[#D1D5D8] text-[1.25rem] font-normal uppercase tracking-wider text-center">
        {label}
      </div>
    </div>
  )
}

export default CountdownItem

