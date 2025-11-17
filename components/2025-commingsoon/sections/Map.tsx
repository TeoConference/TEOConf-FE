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

      const markerPosition = new window.kakao.maps.LatLng(
        LOCATION.lat,
        LOCATION.lng
      )
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      })
      marker.setMap(map)
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
          className="w-full tablet:max-w-[960px] desktop:max-w-[1350px] h-[400px] mt-8 rounded-lg mx-auto"
        ></div>
      </div>
    </section>
  )
}

export default Map
