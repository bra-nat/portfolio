import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Badge from "./Badge";

const Experiences = () => {
  return (
    <section className="max-container flex w-full px-14">
      <div className="flex w-full flex-col items-center justify-center gap-6 font-montserrat">
        <h1 className="text-primary text-sm font-normal uppercase tracking-wide">
          Over 7 years of professional experience
        </h1>
        <h2 className="text-6xl font-bold leading-10 text-slate-800 max-xl:text-4xl max-lg:leading-6">
          My Experience
        </h2>
        <div className="bg-psecondary mt-12 flex  w-full px-7 ">
          <div className="flex w-full flex-col items-start gap-6 whitespace-nowrap py-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col items-start justify-between lg:flex-row">
              <div className="mb-6 overflow-hidden rounded-lg lg:mb-0 ">
                <Image
                  src="/assets/images/Freelancer.webp"
                  alt="Learning Management System Website"
                  width={600}
                  height={400}
                  className="rounded-lg transition-transform  duration-200 ease-linear hover:scale-105 lg:w-[90%]"
                />
              </div>
              <div className="flex flex-col items-start font-montserrat">
                <Badge yearRage="2017 - 2022" />
                <h2 className="mb-4 text-[26px] font-medium ">Software Engineer.</h2>
                <p className="mb-2 font-light leading-7">
                  Virtutor Online Co. LTD
                </p>
                <p className="text-base">Osu, Accra - Ghana</p>
              </div>
            </div>
            <div className="lg:ml-auto">
              <Link href="/">
                <Button label="Read More" extraClasses="px-6 py-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-psecondary mt-4 flex  w-full px-7 ">
          <div className="flex w-full flex-col items-start gap-6 whitespace-nowrap py-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col items-start justify-between lg:flex-row">
              <div className="mb-6 overflow-hidden rounded-lg lg:mb-0 ">
                <Image
                  src="/assets/images/Freelancer.webp"
                  alt="Learning Management System Website"
                  width={600}
                  height={400}
                  className="rounded-lg transition-transform  duration-200 ease-linear hover:scale-105 lg:w-[90%]"
                />
              </div>
              <div className="flex flex-col items-start font-montserrat">
                <Badge yearRage="2017 - 2022" />
                <h2 className="mb-4 text-[26px] font-medium ">Software Engineer.</h2>
                <p className="mb-2 font-light leading-7">
                  Virtutor Online Co. LTD
                </p>
                <p className="text-base">Osu, Accra - Ghana</p>
              </div>
            </div>
            <div className="lg:ml-auto">
              <Link href="/">
                <Button label="Read More" extraClasses="px-6 py-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-psecondary mt-4 flex  w-full px-7 ">
          <div className="flex w-full flex-col items-start gap-6 whitespace-nowrap py-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col items-start justify-between lg:flex-row">
              <div className="mb-6 overflow-hidden rounded-lg lg:mb-0 ">
                <Image
                  src="/assets/images/Freelancer.webp"
                  alt="Learning Management System Website"
                  width={600}
                  height={400}
                  className="rounded-lg transition-transform  duration-200 ease-linear hover:scale-105 lg:w-[90%]"
                />
              </div>
              <div className="flex flex-col items-start font-montserrat">
                <Badge yearRage="2017 - 2022" />
                <h2 className="mb-4 text-[26px] font-medium ">Software Engineer.</h2>
                <p className="mb-2 font-light leading-7">
                  Virtutor Online Co. LTD
                </p>
                <p className="text-base">Osu, Accra - Ghana</p>
              </div>
            </div>
            <div className="lg:ml-auto">
              <Link href="/">
                <Button label="Read More" extraClasses="px-6 py-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
