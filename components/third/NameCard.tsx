const NameCard = () => (
  <section
    id="name-card"
    className="content py-12 tablet:py-28 desktop:py-36 px-4 bg-background-primary"
  >
    <div className="flex-col w-full flex-center tablet:w-[768px] desktop:w-[1024px] desktop-xl:w-[1360px] m-auto">
      <div className="flex flex-col space-y-8 items-center w-full">
        <div className="flex flex-col space-y-10 items-center">
          <div className="flex flex-col space-y-4 items-center">
            <p className="text-mobile-h1 tablet:text-h1 text-center">
              명함 굿즈
            </p>
            <p className="text-mobile-h2 tablet:text-h3 text-center">
              참가자{' '}
              <strong className="text-typo-primary rounded-lg">전원</strong>
              에게 명함 굿즈를 제공합니다.
            </p>
          </div>
        </div>
        <div className="bg-name-card-3 max-w-[1300px] bg-cover bg-center rounded-lg h-[250px] tablet:h-[276px] desktop:h-[490px] w-full" />
      </div>
    </div>
  </section>
)

export default NameCard
