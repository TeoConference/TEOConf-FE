import clsx from 'clsx'
import { timetables } from '@/data/third/Timetable'

const Timetable = () => {
  return (
    <section
      id="timetable"
      className="content px-4 py-12 tablet:px-20 tablet:py-28 desktop:py-36 bg-background-secondary"
    >
      <div className="flex flex-col gap-y-12 tablet:gap-y-16 items-center w-full">
        <p className="text-mobile-h1 tablet:text-h1 text-center">타임테이블</p>
        <div className="grid grid-cols-1 desktop:grid-cols-2 gap-12 tablet:gap-16">
          {timetables.map((timetable) => (
            <div
              key={timetable.date}
              className="flex flex-col gap-y-6 tablet:gap-y-8 px-4 tablet:px-12 desktop:px-8 py-6 tablet:py-8 rounded-3xl border border-background-default"
            >
              <p className="text-mobile-h1 tablet:text-h2 text-center">
                {timetable.date}
              </p>
              <ul className="space-y-1 tablet:space-y-2">
                {timetable.tables.map((table) => (
                  <li
                    key={`${table.startTime}-${table.endTime}`}
                    className="flex items-start gap-4 text-mobile-body2 tablet:text-body2 break-keep"
                  >
                    <div className="shrink-0 w-20 tablet:w-24 flex items-center justify-between gap-0.5 text-gray-400">
                      <span>{table.startTime}</span>
                      <span className="flex-1 min-w-2 h-px bg-gray-400" />
                      <span>{table.endTime}</span>
                    </div>
                    <div
                      className={clsx(
                        'flex items-start gap-2',
                        'isSession' in table &&
                          table.isSession &&
                          'text-typo-primary'
                      )}
                    >
                      {table.content}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timetable
