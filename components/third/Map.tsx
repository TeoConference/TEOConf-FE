import KakaoMap from '@/components/third/common/KakaoMap'

const Map = () => {
  return (
    <section
      id="location"
      className="content bg-background-primary py-12 tablet:py-28 desktop:py-36 px-4"
    >
      <div className="flex-col w-full flex-center tablet:w-[768px] desktop:w-[1024px] m-auto">
        <div className="h-full tablet:space-y-20 space-y-10 w-full">
          <div className="space-y-4 tablet:space-y-8">
            <div className="text-mobile-h1 tablet:text-h1 text-typo-white w-full text-center">
              테오의 컨퍼런스, <br className="block tablet:hidden" />
              <span className="text-typo-primary">여기서 만나요!</span>
            </div>
            <p className="text-mobile-h2 tablet:text-h3 text-center text-typo-white">
              선릉역 4번출구에서 400M 거리에{' '}
              <br className="block tablet:hidden" /> 위치하고 있습니다!
            </p>
            <p className="text-mobile-h3 tablet:text-body1 text-center text-typo-primary">
              서울특별시 강남구 테헤란로 44길 8 (아이콘역삼빌딩, 12층)
            </p>
          </div>
          <KakaoMap
            latitude={37.50232637883589}
            longitude={127.04445973560748}
          />
        </div>
      </div>
    </section>
  )
}

export default Map
