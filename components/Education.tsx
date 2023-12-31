import BadgeDate from "./BadgeDate";

const Education = () => {
  return (
        <article className="max-container flex w-full">
        <div className="flex w-full flex-col items-start justify-center gap-6 font-montserrat">
          <h3 className="text-primary mt-4 text-xs font-normal uppercase tracking-wide">
            2017 - Present
          </h3>
          <h4 className="text-4xl font-bold leading-4 text-slate-800">
            Education
          </h4>
          <div className='h-full border-l-[5px] mt-12 border-slate-300 pl-8'>
            <div className='relative'>
                <span></span>
                <span></span>
                <div className="bg-primary flex  w-full px-7 ">
          <div className="group flex w-full flex-col items-start gap-6 whitespace-nowrap py-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col items-start justify-between lg:flex-row">
              <div className="flex flex-col items-start font-montserrat">
                <h2 className="mb-4 text-[24px] font-medium ">Intermediate React 18 Course</h2>
                <p className="text-base">www.codewithmosh.com</p>
              </div>
            </div>
            <div className=" lg:ml-auto">
                <BadgeDate date="April 2023 - Present" className="bg-gradient-to-r from-[#e2e8ec] to-#ffffff rounded-lg text-primary px-4 py-2 transition-all duration-200 ease-in"/>
            </div>
          </div>
        </div>
            </div>
          </div>
        </div>
      </article>
  )
}

export default Education;