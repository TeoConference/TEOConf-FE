import React from 'react'
import clsx from 'clsx'

interface SwiperSlideProps {
  children: React.ReactNode
  direction?: 'left' | 'right'
  className?: string
}

const SwiperSlide = ({
  children,
  direction = 'left',
  className,
}: SwiperSlideProps) => {
  return (
    <ul
      className={clsx(
        direction === 'left' ? 'animate-move-left' : 'animate-move-right',
        className
      )}
    >
      {children}
    </ul>
  )
}

export default SwiperSlide
