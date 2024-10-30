import React, { useState } from 'react'
import clsx from 'clsx'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp'

interface FAQFieldProps {
  question: string
  answer: string
}

const FAQField = ({ question, answer }: FAQFieldProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const onClickFAQ = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex flex-col w-full">
      <div
        className={clsx(
          'flex justify-between cursor-pointer w-full items-center px-4 py-3.5 tablet:py-5 tablet:px-7 bg-gray-50',
          isOpen ? 'rounded-t-lg' : 'rounded-lg'
        )}
        onClick={onClickFAQ}
      >
        <p className="text-mobile-sub-h2 tablet:text-sub-h1 text-gray-900">
          {question}
        </p>
        {isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
      </div>
      <div
        className={clsx(
          'pl-4 pr-11 tablet:pl-8 tablet:pr-20 bg-gray-50 rounded-b-lg overflow-hidden transition-all',
          isOpen ? 'h-fit py-2 opacity-100' : 'h-0 opacity-0'
        )}
      >
        <p className="text-mobile-body2 tablet:text-body2 text-gray-900 pb-4 tablet:pb-4">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default FAQField
