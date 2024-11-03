import { useEffect, useRef } from 'react'
let direction = ''
let prevYposition = 0

// scroll 방향 check function
const checkScrollDirection = (prevY: number) => {
  if (window.scrollY === 0 && prevY === 0) return
  else if (window.scrollY > prevY) direction = 'down'
  else direction = 'up'

  prevYposition = window.scrollY
}

const useIntersectionObservation = (setActiveId: any, currentId: any) => {
  const contentRef = useRef<any>({})

  useEffect(() => {
    const callback = (observedContent: any) => {
      observedContent.forEach((content: any) => {
        contentRef.current[content.target.id] = content
      })

      const visibleContent: any = Object.values(contentRef.current).filter(
        (content: any) => content.isIntersecting
      )
      checkScrollDirection(prevYposition)
      setActiveId(visibleContent[0]?.target.id)
    }
    //1. 새로운 observer 설정
    const observer = new IntersectionObserver(callback, {
      threshold: [0.05, 1],
    })

    //2. DOM 요소 찾고 Observer달아주기
    const contents: any = [...document.querySelectorAll('.content')]

    contents.forEach((content: any) => observer.observe(content))

    //3. 언 마운트시 옵저버 해제
    return () => observer.disconnect()
  }, [])
}

export default useIntersectionObservation
