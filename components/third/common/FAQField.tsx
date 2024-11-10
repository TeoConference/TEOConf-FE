import { useState } from 'react'
import clsx from 'clsx'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

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
    <Accordion
      expanded={isOpen}
      className="flex flex-col w-full rounded-lg m-0 bg-background-secondary text-typo-white break-keep"
    >
      <AccordionSummary
        expandIcon={<ExpandMore className="fill-typo-white" />}
        className={clsx(
          'flex justify-between w-full items-center px-4 py-3.5 tablet:py-5 tablet:px-8 transition-all min-h-fit [&_.MuiAccordionSummary-content]:m-0',
          isOpen ? 'rounded-t-lg' : 'rounded-lg'
        )}
        onClick={onClickFAQ}
      >
        <p className="text-mobile-sub-h2 tablet:text-sub-h1">{question}</p>
      </AccordionSummary>
      <AccordionDetails
        className={clsx(
          'px-4 tablet:px-8 bg-background-secondary rounded-b-lg overflow-hidden transition-opacity',
          isOpen ? 'opacity-100' : 'opacity-0'
        )}
      >
        <p className="text-mobile-body2 tablet:text-body2 text-gray-300 tablet:pb-4">
          {answer}
        </p>
      </AccordionDetails>
    </Accordion>
  )
}

export default FAQField
