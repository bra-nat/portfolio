import BadgeDate from "./BadgeDate";

const Jobs = () => {
  return (
    <section className="max-container flex w-full flex-col gap-8 lg:flex-row">
      <div className="flex w-full flex-col items-start gap-6 font-montserrat  ">
        <h4 className="text-4xl font-bold leading-4 text-slate-800">
          Education
        </h4>
        <div className="flex gap-8 mt-12">
          <div className="w-[5px] h-full bg-slate-300"></div>
          <div className="bg-p_primary  flex  w-full px-7 flex-1">
            <div className="group relative  flex w-full flex-col items-start gap-6 whitespace-nowrap py-6 lg:flex-row lg:items-center lg:justify-between">
              <span className="absolute left-[-60px] top-[50%] h-[5px] w-8 translate-y-[-50%] bg-slate-300"></span>
              <span className="absolute left-[-70px] top-[50%] h-4 w-4 translate-y-[-50%] rounded-full border-4 border-slate-300 bg-white group-hover:bg-[#fe0302]"></span>
              <div className="flex w-full flex-col items-start font-montserrat">
                <h2 className=" w-full text-wrap text-[24px] font-medium ">
                  Software Engineer
                </h2>
                <p className="text-wrap text-base">
                  Virtutor Online Co. LTD - (2022 - Present)
                </p>
                <BadgeDate
                  date="April 2023 - Present"
                  className="text-primary rounded-xl bg-white px-4 my-4 py-2 shadow-lg transition-all duration-500 ease-in group-hover:bg-[#fe0302] group-hover:text-white"
                />
                <p className="flex flex-col gap-4">
                  Currently redesigning, developing, and implementing new
                  features and functionality. Increased performance by 40% in
                  three months. 
                  <br />
                  • Performing analysis using GTmetrix and
                  developing code snippets using CSS and JS to improve QoS and
                  user experience. Improved bounce rate by 30%. 
                  <br />
                  • Ensuring
                  timely backups and security updates are run on the server to
                  ensure 100% uptime. 
                  <br />
                  • Troubleshooting and resolving all
                  technical issues, providing diagnostic, and analytical
                  support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
