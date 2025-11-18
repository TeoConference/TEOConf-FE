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
    })
  }, [isKakaoLoaded, mapContainer])
}
