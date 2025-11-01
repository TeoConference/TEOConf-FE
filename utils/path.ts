/**
 * basePath 유틸리티
 * 개발 환경에서는 빈 문자열, 프로덕션에서는 '/TEOConf-FE'를 반환합니다.
 */
export const basePath =
  process.env.NODE_ENV === 'development' ? '' : '/TEOConf-FE'

/**
 * basePath를 포함한 전체 경로를 반환하는 헬퍼 함수
 * @param path - basePath를 제외한 경로 (예: '/images/logo.png')
 * @returns basePath를 포함한 전체 경로 (예: '/TEOConf-FE/images/logo.png' 또는 '/images/logo.png')
 */
export const getPath = (path: string): string => `${basePath}${path}`
