import React from 'react'

interface CountdownSeparatorProps {
  textColor?: string
  textSize?: string
}

const CountdownSeparator: React.FC<CountdownSeparatorProps> = ({ 
  textColor = 'text-white',
  textSize = 'text-[3rem] tablet:text-[5rem]'
}) => {
  const textHeight = textSize.includes('2rem') ? 'h-[2rem] leading-[2rem]' : 'h-[3rem] tablet:h-[5rem] leading-[3rem] tablet:leading-[5rem]'
  
  return (
    <div className={`${textColor} ${textSize} font-bold ${textHeight} flex items-center justify-center`}>
      :
    </div>
  )
}

export default CountdownSeparator

