import React from 'react'

interface CountdownItemProps {
  value: string
  label: string
  textColor?: string
  textSize?: string
  labelColor?: string
  labelSize?: string
}

const CountdownItem: React.FC<CountdownItemProps> = ({
  value,
  label,
  textColor = 'text-white',
  textSize = 'text-[3rem] tablet:text-[4rem] desktop:text-[5rem]',
  labelColor = 'text-[#D1D5D8]',
  labelSize = 'tablet:text-[1rem] desktop:text-[1.25rem]',
}) => {
  const textHeight = textSize.includes('2rem')
    ? 'h-[2rem] leading-[2rem]'
    : 'h-[3rem] tablet:h-[5rem] leading-[3rem] tablet:leading-[5rem]'

  return (
    <div className="flex flex-col gap-2 items-center">
      <div
        className={`${textColor} ${textSize} font-bold ${textHeight} flex items-center justify-center`}
      >
        {value}
      </div>
      <div
        className={`${labelColor} ${labelSize} font-normal uppercase tracking-wider text-center`}
      >
        {label}
      </div>
    </div>
  )
}

export default CountdownItem
