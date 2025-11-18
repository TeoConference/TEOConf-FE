import { useState } from 'react'
import Script from 'next/script'
import MapSection from './MapSection'

const Map = () => {
  const [isKakaoLoaded, setIsKakaoLoaded] = useState(false)

  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`}
        strategy="afterInteractive"
        onLoad={() => setIsKakaoLoaded(true)}
      />
      <MapSection isKakaoLoaded={isKakaoLoaded} />
    </>
  )
}

export default Map
