import React from "react";
import BadgeDate from "./BadgeDate";
import { jobData } from "@/constants";

interface JobSectionProps {
  title: string;
  position: string;
  company: string;
  date: string;
  location: string;
  responsibilities: string[];
}

const JobSection = ({ title, position, company, date, location, responsibilities }: JobSectionProps) => (
  <div className="font-montserrat ">
    <h4 className="text-4xl font-bold leading-4 text-slate-800">{title}</h4>
    <div className="mt-12 flex gap-8">
      <div className="min-h-full w-[5px] bg-slate-300"></div>
      <div className="bg-p_primary flex w-full px-7">
        <div className="group relative flex w-full flex-col items-start gap-6 whitespace-nowrap py-6 lg:flex-row lg:items-center lg:justify-between">
          <span className="absolute left-[-60px] top-[50%] h-[5px] w-8 translate-y-[-50%] bg-slate-300"></span>
          <span className="absolute left-[-70px] top-[50%] h-4 w-4 translate-y-[-50%] rounded-full border-4 border-slate-300 bg-white group-hover:bg-[#fe0302] group-hover:text-white"></span>
          <div className="flex w-full flex-col items-start font-montserrat">
            <div className="mb-4 flex w-full flex-col items-start gap-4 max-xl:items-start">
              <div className="mb-4">
                <h2 className="w-full text-wrap text-[24px] font-medium ">{position}</h2>
                <p className="mt-2 text-wrap text-sm">{company} - ({date})</p>
              </div>
              <BadgeDate date={location} className="text-primary rounded-xl bg-white px-4 py-2 shadow-lg transition-all duration-500 ease-in group-hover:bg-[#fe0302] group-hover:text-white" />
            </div>
            <div className="flex w-full flex-col gap-4 text-wrap border-t-[1px] border-slate-300 pt-4">
              {responsibilities.map((responsibility, index) => (
                <p key={index}>{responsibility}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Jobs = () => {
  
  return (
    <section className="max-container mt-12 lg:grid lg:grid-cols-3 max-lg:flex w-full flex-col gap-8">
      {jobData.map((job, index) => (
        <JobSection key={index} {...job} />
      ))}
    </section>
  );
};

export default Jobs;
