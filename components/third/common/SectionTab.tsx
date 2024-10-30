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
        currentSection === section ? 'font-bold text-purple-main' : 'text-white'
      }`}
    >
      {children}
    </Link>
  )
}
