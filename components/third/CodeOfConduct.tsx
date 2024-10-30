import { CodeOfConductData } from '@/data/third/FAQ'
import type { FAQ as FAQType } from '@/types'
import FAQField from './common/FAQField'

const CodeOfConduct = () => {
  return (
    <section className="pb-14 tablet:pb-32 px-4">
      <div className="flex-col w-full gap-6 tablet:gap-20 flex-center tablet:w-[768px] desktop:w-[1024px] m-auto">
        {' '}
        <div className="flex flex-col">
          <p id="sub2" className="text-mobile-h1 tablet:text-h1 text-center">
            행동강령
          </p>
        </div>
        <div className="flex flex-col gap-2 tablet:gap-4 w-full">
          {CodeOfConductData.map((faq: FAQType) => (
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

export default CodeOfConduct
