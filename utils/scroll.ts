/**
 * 페이지 최상단으로 부드럽게 스크롤
 */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

/**
 * 특정 섹션으로 부드럽게 스크롤
 * @param sectionId - 이동할 섹션의 HTML id
 * @param offset - 스크롤 위치 오프셋 (기본값: 0, Header 높이만큼 빼고 싶을 때 사용)
 */
export const scrollToSection = (sectionId: string, offset: number = 0) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offsetTop = element.offsetTop - offset
    window.scrollTo({ top: offsetTop, behavior: 'smooth' })
  }
}

/**
 * 특정 위치로 부드럽게 스크롤
 * @param top - 스크롤할 Y 위치 (픽셀)
 */
export const scrollToPosition = (top: number) => {
  window.scrollTo({ top, behavior: 'smooth' })
}
