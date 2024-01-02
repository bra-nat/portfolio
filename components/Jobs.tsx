import BadgeDate from "./BadgeDate";

const Jobs = () => {
  return (
    <section className="max-container flex w-full flex-col gap-8 lg:flex-row lg:justify-between">
      <div className="font-montserrat ">
        <h4 className="text-4xl font-bold leading-4 text-slate-800">
          Job Experience
        </h4>
        <div className="mt-12 flex gap-8">
          <div className="min-h-full w-[5px] bg-slate-300 "></div>
          <div className="bg-p_primary  flex  w-full flex-1 px-7">
            <div className="group relative  flex w-full flex-col items-start gap-6 whitespace-nowrap py-6 lg:flex-row lg:items-center lg:justify-between">
              <span className="absolute left-[-60px] top-[50%] h-[5px] w-8 translate-y-[-50%] bg-slate-300"></span>
              <span className="absolute left-[-70px] top-[50%] h-4 w-4 translate-y-[-50%] rounded-full border-4 border-slate-300 bg-white group-hover:bg-[#fe0302]"></span>
              <div className="flex w-full flex-col items-start font-montserrat">
                <div className="mb-4 flex w-full items-center justify-between gap-4 max-xl:flex-col max-xl:items-start">
                  <div className="mb-4">
                    <h2 className=" w-full text-wrap text-[24px] font-medium ">
                      Software Engineer
                    </h2>
                    <p className="mt-2 text-wrap text-sm">
                      Virtutor Online Co. LTD - (2022 - Present)
                    </p>
                  </div>
                  <BadgeDate
                    date="ACCRA GHANA"
                    className="text-primary rounded-xl bg-white px-4 py-2 shadow-lg transition-all duration-500 ease-in group-hover:bg-[#fe0302] group-hover:text-white"
                  />
                </div>
                <div className="flex w-full flex-col gap-4 text-wrap border-t-[1px] border-slate-300 pt-4">
                  <p>
                    Currently redesigning, developing, and implementing new
                    features and functionality. Increased performance by 40% in
                    three months.
                  </p>

                  <p>
                    Performing analysis using GTmetrix and developing code
                    snippets using CSS and JS to improve QoS and user
                    experience. Improved bounce rate by 30%.{" "}
                  </p>

                  <p>
                    Ensuring timely backups and security updates are run on the
                    server to ensure 100% uptime.{" "}
                  </p>

                  <p>
                    Troubleshooting and resolving all technical issues,
                    providing diagnostic, and analytical support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="font-montserrat ">
        <h4 className="text-4xl font-bold leading-4 text-slate-800">
          Job Experience II
        </h4>
        <div className="mt-12 flex gap-8">
          <div className="min-h-full w-[5px] bg-slate-300 "></div>
          <div className="bg-p_primary  flex  w-full flex-1 px-7">
            <div className="group relative  flex w-full flex-col items-start gap-6 whitespace-nowrap py-6 lg:flex-row lg:items-center lg:justify-between">
              <span className="absolute left-[-60px] top-[50%] h-[5px] w-8 translate-y-[-50%] bg-slate-300"></span>
              <span className="absolute left-[-70px] top-[50%] h-4 w-4 translate-y-[-50%] rounded-full border-4 border-slate-300 bg-white group-hover:bg-[#fe0302]"></span>
              <div className="flex w-full flex-col items-start font-montserrat">
                <div className="backdrop mb-4 flex w-full items-center justify-between gap-4 max-xl:flex-col max-xl:items-start">
                  <div className="mb-4">
                    <h2 className=" w-full text-wrap text-[24px] font-medium ">
                      Web Developer
                    </h2>
                    <p className="mt-2 text-wrap text-sm">
                      Independent Freelancer - (2017 - 2019)
                    </p>
                  </div>
                  <BadgeDate
                    date="ACCRA GHANA"
                    className="text-primary rounded-xl bg-white px-4 py-2 shadow-lg transition-all duration-500 ease-in group-hover:bg-[#fe0302] group-hover:text-white"
                  />
                </div>
                <div className="flex w-full flex-col gap-4 text-wrap border-t-[1px] border-slate-300 pt-4">
                  <p>
                    Built an auto parts e-commerce website using WordPress and
                    applied custom styles using CSS based on the client’s
                    request. Linking 1000+ auto parts products on the website.
                  </p>

                  <p>
                    Developed a WordPress theme for a local herbal hospital and
                    implemented SEO techniques that produced a high ranking on
                    Google.
                  </p>

                  <p>
                    Built and maintained a WordPress website for a printing
                    company. Assisted clients with training that would allow
                    them to independently make minor changes/updates.
                  </p>

                  <p>
                    Analysed websites performance and troubleshoot errors using
                    debug mode
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
