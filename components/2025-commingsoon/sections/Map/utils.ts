import { MARKER_IMAGE_CONFIG, OVERLAY_CONFIG } from './constants'
import type { LocationData } from './types'

export const createCustomMarker = (position: any) => {
  const { kakao } = window

  const imageSize = new kakao.maps.Size(
    MARKER_IMAGE_CONFIG.size.width,
    MARKER_IMAGE_CONFIG.size.height
  )

  const imageOption = {
    offset: new kakao.maps.Point(
      MARKER_IMAGE_CONFIG.offset.x,
      MARKER_IMAGE_CONFIG.offset.y
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
    <div class="relative bottom-[115px] bg-white rounded-md shadow-lg px-4 py-2 border border-gray-300 flex flex-col items-center">
      <a href="https://map.kakao.com/link/map/${location.placeId}" target="_blank" rel="noopener noreferrer" class="text-gray-800 no-underline hover:underline font-bold text-lg">
        엘리스랩 성수
      </a>
      <a href="https://map.kakao.com/link/to/${location.placeId}" target="_blank" rel="noopener noreferrer" class="w-full mt-2 px-3 py-2 bg-purple-400 text-white text-xs font-semibold rounded hover:bg-purple-500 no-underline text-center">
        길찾기
      </a>
      <div class="absolute left-1/2 -translate-x-1/2 -bottom-[12px] w-0 h-0 border-l-[11px] border-l-transparent border-r-[11px] border-r-transparent border-t-[12px] border-t-white"></div>
    </div>
  `

  return new window.kakao.maps.CustomOverlay({
    map,
    position,
    content,
    yAnchor: OVERLAY_CONFIG.yAnchor,
  })
}
