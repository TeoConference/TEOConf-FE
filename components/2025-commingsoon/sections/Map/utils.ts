import { MARKER_IMAGE_CONFIG, OVERLAY_CONFIG } from './constants'
import type { LocationData } from './types'

export const createCustomMarker = (position: any) => {
  const { kakao } = window

  // 모바일에서는 원래 크기 사용
  const isMobile = window.innerWidth < 768
  const scale = isMobile ? 0.6 : 1 // 모바일에서 60% 크기

  const imageSize = new kakao.maps.Size(
    MARKER_IMAGE_CONFIG.size.width * scale,
    MARKER_IMAGE_CONFIG.size.height * scale
  )

  const imageOption = {
    offset: new kakao.maps.Point(
      MARKER_IMAGE_CONFIG.offset.x * scale,
      MARKER_IMAGE_CONFIG.offset.y * scale
    ),
  }

  const markerImage = new kakao.maps.MarkerImage(
    MARKER_IMAGE_CONFIG.src,
    imageSize,
    imageOption
  )

  return new kakao.maps.Marker({
    position,
    image: markerImage,
  })
}

export const createCustomOverlay = (
  position: any,
  location: LocationData,
  map: any
) => {
  const content = `
    <div class="relative bottom-[70px] tablet:bottom-[115px] bg-white rounded-md shadow-lg px-2 py-1.5 tablet:px-4 tablet:py-2 border border-gray-300 flex flex-col items-center">
      <a href="https://map.kakao.com/link/map/${location.placeId}" target="_blank" rel="noopener noreferrer" class="text-gray-800 no-underline hover:underline font-bold text-sm tablet:text-lg">
        엘리스랩 성수
      </a>
      <a href="https://map.kakao.com/link/to/${location.placeId}" target="_blank" rel="noopener noreferrer" class="w-full mt-1 tablet:mt-2 px-2 py-1 tablet:px-3 tablet:py-2 bg-purple-400 text-white text-[10px] tablet:text-xs font-semibold rounded hover:bg-purple-500 no-underline text-center">
        길찾기
      </a>
      <div class="absolute left-1/2 -translate-x-1/2 -bottom-[8px] tablet:-bottom-[12px] w-0 h-0 border-l-[8px] tablet:border-l-[11px] border-l-transparent border-r-[8px] tablet:border-r-[11px] border-r-transparent border-t-[8px] tablet:border-t-[12px] border-t-white"></div>
    </div>
  `

  return new window.kakao.maps.CustomOverlay({
    map,
    position,
    content,
    yAnchor: OVERLAY_CONFIG.yAnchor,
  })
}
