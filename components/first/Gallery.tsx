import React, { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { Navigation, Pagination, A11y } from 'swiper'
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react'
import CloseIcon from '@mui/icons-material/Close'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import 'swiper/css/pagination'
import 'swiper/css'

import NavButton from '@/components/first/gallery/NavButton'
import { getPath } from '@/utils/path'

const Gallery = () => {
  const totalSlide = 31
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isClickedImage, setIsClickedImage] = useState(false)

  const handleImageClick = () => {
    setIsClickedImage(true)
    return setCurrentSlide
  }

  return (
    <section
      id="gallery"
      className="content relative p-12 tablet:p-32 px-4 bg-gray-100"
    >
      <div className="flex-col gap-4 tablet:gap-6 w-full flex-center tablet:w-[768px] desktop:w-[1024px] desktop-xl:w-[1360px] m-auto">
        <p className="text-mobile-h1 tablet:text-h1 text-center">현장 스케치</p>
        <p className="text-mobile-h2 tablet:text-h3 text-center">
          다양한 사람들과 함께한
          <br className="block tablet:hidden" /> 테오콘 1회 현장 스케치를
          만나보세요
        </p>
      </div>
      <SwiperComponent
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        slidesPerGroup={1}
        navigation={true}
        className="mt-10 tablet:max-w-[768px] desktop:max-w-[1024px] desktop-xl:max-w-[1360px]"
        onActiveIndexChange={(swiper: any) => setCurrentSlide(swiper.realIndex)}
        breakpoints={{
          default: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 16,
            slidesPerGroup: 4,
          },
        }}
      >
        {Array.from({ length: totalSlide }).map((_, index) => {
          return (
            <SwiperSlide
              className="relative tablet:cursor-pointer"
              key={`first-swiper-${index}`}
            >
              <Image
                id={`gallery image ${index}`}
                src={getPath(`/images/sketch/${index}.png`)}
                width={330}
                height={268}
                className={
                  (clsx('relative m-auto'),
                  currentSlide === index
                    ? 'tablet:grayscale-0 m-auto'
                    : 'tablet:grayscale m-auto')
                }
                alt="현장 스케치 이미지"
                onClick={() => handleImageClick()(index)}
              />
            </SwiperSlide>
          )
        })}
        <div className="block tablet:hidden flex justify-center absolute bottom-3 left-[50%] -translate-x-1/2 z-10 ml-[120px]">
          <div className="bg-gray-900 text-white z-10 text-body2 px-1 py-2 rounded-md flex justify-center items-center gap-1 w-[66px]">
            <span>{currentSlide + 1}</span> / <span>{totalSlide}</span>
          </div>
        </div>
        <NavButton className="bg-gray-100/20" />
      </SwiperComponent>
      {isClickedImage && (
        <div className="mt-4 flex items-center relative justify-center hidden tablet:flex">
          <div className="relative">
            <ArrowBackIosNewIcon
              className="text-gray-500 absolute -left-10 top-[50%] -translate-y-1/2 cursor-pointer"
              onClick={() => {
                if (currentSlide === 0) return
                setCurrentSlide(currentSlide - 1)
              }}
            />
            <ArrowForwardIosIcon
              className="text-gray-500 absolute -right-10 top-[50%] -translate-y-1/2 cursor-pointer"
              onClick={() => {
                if (currentSlide === totalSlide - 1) return
                setCurrentSlide(currentSlide + 1)
              }}
            />
            <CloseIcon
              className="cursor-pointer text-white absolute right-3 top-3"
              onClick={() => setIsClickedImage(false)}
            />
            <Image
              src={getPath(`/images/sketch/${currentSlide}.png`)}
              width={440}
              height={354}
              alt="현장 스케치 이미지"
              className="desktop:w-[534px] desktop-xl:w-[720px]"
            />
            <div className="flex justify-center absolute bottom-3 right-3">
              <div className="bg-gray-900 text-white z-10 text-body2 px-1 py-2 rounded-md flex justify-center items-center gap-1 w-[66px]">
                <span>{currentSlide + 1}</span> / <span>{totalSlide}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
