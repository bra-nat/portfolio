import React from "react";
import BadgeDate from "./BadgeDate";
import { educationDataRight, educationDataLeft } from "@/constants";

interface EducationItemProps {
  course: string;
  institution: string;
  date: string;
}

const EducationItem = ({ course, institution, date }: EducationItemProps) => (
  <div className="w-full border-l-[5px] border-slate-300 pl-8">
    <div className="bg-p_primary flex  w-full px-7 ">
      <div className="group relative  flex w-full flex-col items-start gap-6 whitespace-nowrap py-6 lg:flex-row lg:items-center lg:justify-between">
        <span className="absolute left-[-60px] top-[50%] h-[5px] w-8 translate-y-[-50%] bg-slate-300"></span>
        <span className="absolute left-[-70px] top-[50%] h-4 w-4 translate-y-[-50%] rounded-full border-4 border-slate-300 bg-white group-hover:bg-[#fe0302]"></span>
        <div className="flex w-full flex-col items-start justify-between font-montserrat">
          <h2 className="mb-4 w-full text-wrap text-[24px] font-medium ">{course}</h2>
          <p className="text-wrap text-base">{institution}</p>
        </div>

        <div className="lg:ml-auto">
          <BadgeDate
            date={date}
            className="text-primary rounded-xl bg-white px-4 py-2 shadow-lg transition-all duration-500 ease-in group-hover:bg-[#fe0302] group-hover:text-white"
          />
        </div>
      </div>
    </div>
  </div>
);


const Education = () => {
  return (
    <section className="max-container mt-12 flex w-full flex-col gap-8 lg:flex-row">
      <div className="flex w-full flex-col items-start gap-6 font-montserrat">
        <h3 className="text-primary mt-4 text-xs font-normal uppercase tracking-wide">2022 - Present</h3>
        <h4 className="mb-8 text-4xl font-bold leading-4 text-slate-800">Education</h4>

        {educationDataLeft.map((item, index) => (
          <EducationItem key={index} {...item} />
        ))}
      </div>

      <div className="flex w-full flex-col items-start gap-6 font-montserrat">
        <h3 className="text-primary mt-4 text-xs font-normal uppercase tracking-wide">2017 - 2022</h3>
        <h4 className="mb-8 text-4xl font-bold leading-4 text-slate-800">Education</h4>

        {educationDataRight.map((item, index) => (
          <EducationItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Education;
