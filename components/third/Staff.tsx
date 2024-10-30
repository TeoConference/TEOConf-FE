import clsx from 'clsx'

import { StaffData } from '@/data/third/Staff'
import StaffCard from './common/StaffCard'
import SwiperSlide from './common/SwiperSlide'

const Staff = () => (
  <section className="flex flex-col py-16 tablet:py-36">
    <div className="flex flex-col">
      <div className="text-center text-mobile-h1 tablet:text-h1 justify-center">
        테오콘을 <br className="block tablet:hidden" />
        만들어가는
        <span className="text-center tablet:text-purple-main"> 사람들</span>
      </div>
      <p className="text-h3 text-center tablet:mt-4 text-gray-900 hidden tablet:block">
        테오콘을 함께 만든 스태프를 소개합니다!
      </p>
    </div>
    <div className="overflow-hidden mt-12">
      <div className="tablet:mt-12 mt-6 flex">
        <SwiperSlide className="flex justify-between gap-3 tablet:gap-4">
          {StaffData.map(
            (staff, index) =>
              index < 5 && (
                <StaffCard
                  key={staff.name}
                  {...staff}
                  className={clsx(index == 4 ? 'mr-3 tablet:mr-4' : '')}
                />
              )
          )}
        </SwiperSlide>
        <SwiperSlide className="flex justify-between gap-3 tablet:gap-4">
          {StaffData.map(
            (staff, index) =>
              index < 5 && (
                <StaffCard
                  key={staff.name}
                  {...staff}
                  className={clsx(index == 4 ? 'mr-3 tablet:mr-4' : '')}
                />
              )
          )}
        </SwiperSlide>
        <SwiperSlide className="flex justify-between gap-3 tablet:gap-4">
          {StaffData.map(
            (staff, index) =>
              index < 5 && (
                <StaffCard
                  key={staff.name}
                  {...staff}
                  className={clsx(index == 4 ? 'mr-3 tablet:mr-4' : '')}
                />
              )
          )}
        </SwiperSlide>
      </div>
      <div className="tablet:mt-4 mt-3 flex">
        <SwiperSlide
          direction="right"
          className="flex justify-between gap-3 tablet:gap-4"
        >
          {StaffData.map(
            (staff, index) =>
              index > 4 && (
                <StaffCard
                  key={staff.name}
                  {...staff}
                  className={clsx(index == 11 ? 'mr-3 tablet:mr-4' : '')}
                />
              )
          )}
        </SwiperSlide>
        <SwiperSlide
          direction="right"
          className="flex justify-between gap-3 tablet:gap-4"
        >
          {StaffData.map(
            (staff, index) =>
              index > 4 && (
                <StaffCard
                  key={staff.name}
                  {...staff}
                  className={clsx(index == 11 ? 'mr-3 tablet:mr-4' : '')}
                />
              )
          )}
        </SwiperSlide>
        <SwiperSlide
          direction="right"
          className="flex justify-between gap-3 tablet:gap-4"
        >
          {StaffData.map(
            (staff, index) =>
              index > 4 && (
                <StaffCard
                  key={staff.name}
                  {...staff}
                  className={clsx(index == 11 ? 'mr-3 tablet:mr-4' : '')}
                />
              )
          )}
        </SwiperSlide>
      </div>
    </div>
  </section>
)

export default Staff
