import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Badge from "./Badge";
import { experienceData } from "@/constants";

interface ExperienceItemProps {
  imageSrc: string;
  altText: string;
  yearRange: string;
  title: string;
  company: string;
  location: string;
};


const ExperienceItem = ({ imageSrc, altText, yearRange, title, company, location }: ExperienceItemProps) => (
  <div className="bg-psecondary mt-12 flex  w-full px-7 ">
    <div className="flex w-full flex-col items-start gap-6 whitespace-nowrap py-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col items-start justify-between lg:flex-row">
        <div className="mb-6 overflow-hidden rounded-lg lg:mb-0 ">
          <Image
            src={imageSrc} 
            alt={altText}
            width={600}
            height={400}
            className="rounded-lg transition-transform duration-200 ease-linear hover:scale-105 lg:w-[90%]"
          />
        </div>
        <div className="flex flex-col items-start font-montserrat">
          <Badge yearRage={yearRange} />
          <h2 className="mb-4 text-[26px] font-medium ">{title}</h2>
          <p className="mb-2 font-light leading-7">{company}</p>
          <p className="text-base">{location}</p>
        </div>
      </div>
      <div className="lg:ml-auto">
        <Link href="#experiencedetails">
          <Button label="Read More" extraClasses="px-6 py-4" />
        </Link>
      </div>
    </div>
  </div>
);


const Experiences = () => {
  return (
    <section className="max-container flex w-full px-14 max-sm:px-4">
      <div className="flex w-full flex-col items-center justify-center gap-6 font-montserrat">
        <h1 className="text-primary  text-sm font-normal uppercase tracking-wide max-sm:text-center">
          Over 7 years of professional experience
        </h1>
        <h2 className="text-6xl  font-bold leading-10 text-slate-800 max-xl:text-4xl max-lg:leading-6">
          My Experience
        </h2>
        {experienceData.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default Experiences;

