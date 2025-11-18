import { useRef } from 'react'
import { useKakaoMap } from './useKakaoMap'

interface MapSectionProps {
  isKakaoLoaded: boolean
}

const MapSection = ({ isKakaoLoaded }: MapSectionProps) => {
  const mapContainer = useRef<HTMLDivElement>(null)

  useKakaoMap(mapContainer, isKakaoLoaded)

  return (
    <section id="location" className="py-16 px-8">
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
          className="w-full max-w-[62.125rem] h-[400px] tablet:aspect-video mt-8 rounded-lg mx-auto"
        ></div>
      </div>
    </section>
  )
}

export default MapSection
