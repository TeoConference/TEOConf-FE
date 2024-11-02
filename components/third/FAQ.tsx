import clsx from 'clsx'
import { useState } from 'react'

import FAQField from '@/components/third/common/FAQField'
import { faqData } from '@/data/third/FAQ'
import type { FAQ as FAQType } from '@/types'

enum Category {
  APPLY = 'APPLY',
  ON_SITE = 'ON_SITE',
  EVENT = 'EVENT',
  ETC = 'ETC',
}

const FAQ = () => {
  const [selected, setSelected] = useState(Category.APPLY)

  const onClickCategory = (category: Category) => {
    setSelected(category)
  }

  return (
    <section id="faq" className="content py-12 tablet:pt-32 tablet:pb-24 px-4">
      <div className="flex-col w-full gap-6 tablet:gap-20 flex-center tablet:w-[768px] desktop:w-[1024px] m-auto">
        <div className="flex flex-col">
          <p id="sub1" className="text-mobile-h1 tablet:text-h1 text-center">
            자주 묻는 질문
          </p>
          <div className="text-mobile-sub-h2 tablet:text-sub-h1 inline-flex mt-2 tablet:mt-4 desktop:mt-8">
            <button
              type="button"
              className={clsx(
                'text-typo-white-text px-2 py-1 tablet:px-3 tablet:py-2 transition-all',
                selected === Category.APPLY &&
                  'text-typo-primary border-main-primary border-b'
              )}
              onClick={() => onClickCategory(Category.APPLY)}
            >
              참가신청
            </button>
            <button
              type="button"
              className={clsx(
                'text-gray-90 px-2 py-1 tablet:px-3 tablet:py-2 transition-all',
                selected === Category.ON_SITE &&
                  'text-typo-primary border-main-primary border-b'
              )}
              onClick={() => onClickCategory(Category.ON_SITE)}
            >
              현장당일
            </button>
            <button
              type="button"
              className={clsx(
                'px-2 py-1 tablet:px-3 tablet:py-2 text-typo-white-text transition-all',
                selected === Category.EVENT &&
                  'text-typo-primary border-main-primary border-b'
              )}
              onClick={() => onClickCategory(Category.EVENT)}
            >
              행사/세션
            </button>
            <button
              type="button"
              className={clsx(
                'px-2 py-1 tablet:px-3 tablet:py-2 text-typo-white-text transition-all',
                selected === Category.ETC &&
                  'text-typo-primary border-main-primary border-b'
              )}
              onClick={() => onClickCategory(Category.ETC)}
            >
              기타
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 tablet:gap-4 w-full">
          {faqData[selected].map((faq: FAQType) => (
            <FAQField
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
