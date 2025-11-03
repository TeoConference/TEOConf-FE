import React, { useEffect, useState, useRef } from 'react'

interface ScrambleTextProps {
  text: string
  scrambleChars?: string
  duration?: number
  interval?: number
  keepChars?: string[]
  className?: string
}

const ScrambleText = ({
  text,
  scrambleChars = '!@#$%^&*()_+-=[]{}|;:,.<>?ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
  duration = 40,
  interval = 30,
  keepChars = [' ', '<', '>', '/', '.'],
  className = '',
}: ScrambleTextProps) => {
  const [scrambledText, setScrambledText] = useState('')
  const [isScrambling, setIsScrambling] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    let iterations = 0
    const maxIterations = duration

    const scramble = () => {
      setScrambledText(
        text
          .split('')
          .map((char, index) => {
            // 특정 문자는 그대로 유지
            if (keepChars.includes(char)) {
              return char
            }
            // 각 문자를 순차적으로 복원
            const revealTime = (index / text.length) * maxIterations
            if (iterations >= revealTime) {
              return char
            }
            return scrambleChars[
              Math.floor(Math.random() * scrambleChars.length)
            ]
          })
          .join('')
      )

      iterations += 1

      if (iterations >= maxIterations) {
        setIsScrambling(false)
        setScrambledText(text)
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
      }
    }

    // 초기 스크램블 시작
    intervalRef.current = setInterval(scramble, interval)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <span className={className}>
      {isScrambling ? scrambledText || text : text}
    </span>
  )
}

export default ScrambleText
