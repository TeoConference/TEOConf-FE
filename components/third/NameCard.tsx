const NameCard = () => (
  <div className="pt-12 tablet:pt-14 desktop:pt-16 px-4">
    <div className="flex-col w-full flex-center tablet:w-[768px] desktop:w-[1024px] desktop-xl:w-[1360px] m-auto">
      <div className="flex flex-col space-y-8 items-center w-full">
        <div className="flex flex-col space-y-10 items-center">
          <div className="flex flex-col space-y-4 items-center">
            <p className="text-mobile-h2 tablet:text-h3 text-center">
              참가자 전원에게 <br className="block tablet:hidden" />
              <strong className="text-typo-primary">명함 굿즈</strong>를
              제공합니다.
            </p>
            <p className="text-center tablet:text-body1 text-mobile-body2">
              명함을 건네며 자연스럽게 네트워킹해 보아요.
            </p>
          </div>
        </div>
        <div className="bg-name-card-3 max-w-[1300px] bg-cover bg-center rounded-3xl h-[250px] tablet:h-[276px] desktop:h-[490px] w-full" />
      </div>
    </div>
  </div>
)

export default NameCard
