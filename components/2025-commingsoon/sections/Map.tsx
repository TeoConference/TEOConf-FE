import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import { LOCATION } from '@/data/2025/map'

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null)
  const [isKakaoLoaded, setIsKakaoLoaded] = useState(false)

  useEffect(() => {
    if (!isKakaoLoaded || !mapContainer.current) return

    window.kakao.maps.load(() => {
      const options = {
        center: new window.kakao.maps.LatLng(LOCATION.lat, LOCATION.lng),
        level: 3,
      }

      const map = new window.kakao.maps.Map(mapContainer.current!, options)

      // 커스텀 마커 이미지 설정 (원본 54x64의 1.5배)
      const imageSrc = '/images/2025/map/custom-marker.png'
      const imageSize = new window.kakao.maps.Size(81, 96)
      const imageOption = { offset: new window.kakao.maps.Point(40.5, 96) }

      const markerImage = new window.kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      )

      const markerPosition = new window.kakao.maps.LatLng(
        LOCATION.lat,
        LOCATION.lng
      )

      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
      })
      marker.setMap(map)

      // 커스텀 오버레이 설정
      const content = `
        <div class="relative bottom-[115px] bg-white rounded-md shadow-lg px-4 py-2 border border-gray-300 flex flex-col items-center">
          <a href="https://map.kakao.com/link/map/${LOCATION.placeId}" target="_blank" rel="noopener noreferrer" class="text-gray-800 no-underline hover:underline font-bold text-lg">
            엘리스랩 성수
          </a>
          <a href="https://map.kakao.com/link/to/${LOCATION.placeId}" target="_blank" rel="noopener noreferrer" class="w-full mt-2 px-3 py-2 bg-purple-400 text-white text-xs font-semibold rounded hover:bg-purple-500 no-underline text-center">
            길찾기
          </a>
          <div class="absolute left-1/2 -translate-x-1/2 -bottom-[12px] w-0 h-0 border-l-[11px] border-l-transparent border-r-[11px] border-r-transparent border-t-[12px] border-t-white"></div>
        </div>
      `

      new window.kakao.maps.CustomOverlay({
        map: map,
        position: markerPosition,
        content: content,
        yAnchor: 1,
      })
    })

    return () => setIsKakaoLoaded(false)
  }, [isKakaoLoaded])

  return (
    <section id="location" className="py-32 px-8">
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`}
        strategy="afterInteractive"
        onLoad={() => setIsKakaoLoaded(true)}
      />
      <div className="margin-auto text-center">
        <h3 className="text-[1rem] tablet:text-[1.5rem] desktop:text-[2rem] font-bold text-purple-400">
          12월 6일, 7일
        </h3>
        <h2 className="text-[1.5rem] tablet:text-[2rem] desktop:text-[2.5rem] font-bold">
          TEO Conf 2025,
          <br className="desktop:hidden" />
          <span className="desktop:before:content-[' ']">여기서 만나요!</span>
        </h2>
        <h4 className="text-sm tablet:text-base desktop:text-lg font-bold text-gray-500">
          서울 성동구 아차산로 17길 48 성수낙낙 C동 2층
        </h4>
        <div
          ref={mapContainer}
          className="w-full max-w-[62.125rem] aspect-video mt-8 rounded-lg mx-auto"
        ></div>
      </div>
    </section>
  )
}

export default Map
