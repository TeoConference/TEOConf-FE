import { useEffect, RefObject } from 'react'
import { LOCATION } from '@/data/2025/map'
import { MAP_CONFIG } from './constants'
import { createCustomMarker, createCustomOverlay } from './utils'

export const useKakaoMap = (
  mapContainer: RefObject<HTMLDivElement>,
  isKakaoLoaded: boolean
) => {
  useEffect(() => {
    if (!isKakaoLoaded || !mapContainer.current) return

    window.kakao.maps.load(() => {
      const { kakao } = window

      const center = new kakao.maps.LatLng(LOCATION.lat, LOCATION.lng)

      const map = new kakao.maps.Map(mapContainer.current!, {
        center,
        level: MAP_CONFIG.level,
      })

      const markerPosition = new kakao.maps.LatLng(LOCATION.lat, LOCATION.lng)

      const marker = createCustomMarker(markerPosition)
      marker.setMap(map)

      createCustomOverlay(markerPosition, LOCATION, map)

      // 화면 resize 시 마커를 중앙에 유지
      const handleResize = () => {
        map.setCenter(markerPosition)
      }

      window.addEventListener('resize', handleResize)

      // cleanup 함수로 이벤트 리스너 제거
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    })
  }, [isKakaoLoaded, mapContainer])
}
