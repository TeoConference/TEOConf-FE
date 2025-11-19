// 마커 이미지 설정
export const MARKER_IMAGE_CONFIG = {
  src: '/images/2025/map/custom-marker.png',
  size: {
    width: 81,
    height: 96,
  },
  offset: {
    x: 40.5,
    y: 96,
  },
} as const

// 지도 초기 설정
export const MAP_CONFIG = {
  level: 3,
} as const

// 오버레이 위치 설정
export const OVERLAY_CONFIG = {
  yAnchor: 1,
} as const
