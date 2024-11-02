import Link from 'next/link'
import type { PropsWithChildren } from 'react'

interface SectionTabProps {
  section: string
  currentSection: string
}

export const SectionTab = ({
  children,
  section,
  currentSection,
}: PropsWithChildren<SectionTabProps>) => {
  return (
    <Link
      href={`#${section}`}
      className={`${
        currentSection === section
          ? 'font-bold text-typo-primary'
          : 'text-typo-white'
      }`}
    >
      {children}
    </Link>
  )
}
