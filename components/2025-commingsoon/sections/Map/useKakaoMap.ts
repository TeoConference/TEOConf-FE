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

      let marker = createCustomMarker(markerPosition)
      marker.setMap(map)

      let overlay = createCustomOverlay(markerPosition, LOCATION, map)

      // 화면 resize 시 마커와 오버레이를 다시 생성
      const handleResize = () => {
        // 기존 마커와 오버레이 제거
        marker.setMap(null)
        overlay.setMap(null)

        // 새로운 마커와 오버레이 생성
        marker = createCustomMarker(markerPosition)
        marker.setMap(map)

        overlay = createCustomOverlay(markerPosition, LOCATION, map)

        // 중앙 재설정
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
