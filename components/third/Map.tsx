import KakaoMap from '@/components/third/common/KakaoMap'

const Map = () => {
  return (
    <section
      id="location"
      className="content bg-background-primary py-12 tablet:py-28 desktop:py-36 px-4"
    >
      <div className="flex-col w-full flex-center tablet:w-[768px] desktop:w-[1024px] m-auto">
        <div className="h-full tablet:space-y-20 space-y-10 w-full">
          <div className="space-y-6 tablet:space-y-12">
            <div className="text-mobile-h1 tablet:text-h1 text-typo-white w-full text-center">
              테오의 컨퍼런스, <br className="block tablet:hidden" />
              <span className="text-typo-primary">여기서 만나요!</span>
            </div>
            <div className="space-y-1 tablet:space-y-2">
              <p className="text-body2 tablet:text-body1 text-center text-typo-white">
                서울특별시 강남구 테헤란로 44길 8{' '}
                <br className="block tablet:hidden" />
                (아이콘역삼빌딩, 12층)
              </p>
              <p className="tablet:text-body2 text-body-3 text-center text-gray-400">
                선릉역 4번 출구에서 400m
              </p>
            </div>
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
