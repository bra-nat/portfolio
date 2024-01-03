import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <section className="max-container flex flex-col gap-5">
      <h1 className="text-primary mt-12 text-center text-sm font-normal uppercase tracking-wide">
        Browse through some of my projects
      </h1>
      <h2 className="mb-12 text-center text-6xl font-bold text-slate-800 max-lg:text-4xl max-lg:leading-6">
        My Portfolio
      </h2>
      <div className=" grid w-full gap-6 p-4 font-montserrat max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-psecondary flex flex-col gap-4 p-6">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/assets/images/project-4-340x250.jpg"
              alt="e-learning management system"
              width={600}
              height={400}
              className="transition-transform duration-200 ease-linear hover:scale-110"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <p className="text-primary font-montserrat text-xs font-semibold uppercase">
                Gallery
              </p>
              <div className="flex cursor-pointer gap-1 rounded-md bg-transparent px-1 py-2 transition-all duration-150 ease-linear hover:bg-slate-200"> 
                <Image
                  src="assets/icons/heart.svg"
                  alt="like icon"
                  width={15}
                  height={15}
                />
                <span className="text-xs font-normal">122</span>
              </div>
            </div>
            <Link
              href={"/"}
              className="hover:text-primary group font-montserrat text-[23px] font-bold transition-colors duration-300 ease-linear">
              Empowering Education with Virtutor Online{" "}
              <Image
                src="assets/icons/arrow-up-right.svg"
                alt="Arrow up right icon"
                width={15}
                height={15}
                className="text-primary-svg inline-block origin-bottom-left scale-0 transition-transform duration-300 ease-linear group-hover:scale-150"
              />
            </Link>
          </div>
        </div>
        <div className="bg-psecondary flex flex-col gap-4 p-6">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/assets/images/project-4-340x250.jpg"
              alt="e-learning management system"
              width={600}
              height={400}
              className="transition-transform duration-200 ease-linear hover:scale-110"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <p className="text-primary font-montserrat text-xs font-semibold uppercase">
                Gallery
              </p>
              <div className="flex cursor-pointer gap-1 rounded-md bg-transparent px-1 py-2 transition-all duration-150 ease-linear hover:bg-slate-200"> 
                <Image
                  src="assets/icons/heart.svg"
                  alt="like icon"
                  width={15}
                  height={15}
                />
                <span className="text-xs font-normal">122</span>
              </div>
            </div>
            <Link
              href={"/"}
              className="hover:text-primary group font-montserrat text-[23px] font-bold transition-colors duration-300 ease-linear">
              Empowering Education with Virtutor Online{" "}
              <Image
                src="assets/icons/arrow-up-right.svg"
                alt="Arrow up right icon"
                width={15}
                height={15}
                className="text-primary-svg inline-block origin-bottom-left scale-0 transition-transform duration-300 ease-linear group-hover:scale-150"
              />
            </Link>
          </div>
        </div>
        <div className="bg-psecondary flex flex-col gap-4 p-6">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/assets/images/project-4-340x250.jpg"
              alt="e-learning management system"
              width={600}
              height={400}
              className="transition-transform duration-200 ease-linear hover:scale-110"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <p className="text-primary font-montserrat text-xs font-semibold uppercase">
                Gallery
              </p>
              <div className="flex cursor-pointer gap-1 rounded-md bg-transparent px-1 py-2 transition-all duration-150 ease-linear hover:bg-slate-200"> 
                <Image
                  src="assets/icons/heart.svg"
                  alt="like icon"
                  width={15}
                  height={15}
                />
                <span className="text-xs font-normal">122</span>
              </div>
            </div>
            <Link
              href={"/"}
              className="hover:text-primary group font-montserrat text-[23px] font-bold transition-colors duration-300 ease-linear">
              Empowering Education with Virtutor Online{" "}
              <Image
                src="assets/icons/arrow-up-right.svg"
                alt="Arrow up right icon"
                width={15}
                height={15}
                className="text-primary-svg inline-block origin-bottom-left scale-0 transition-transform duration-300 ease-linear group-hover:scale-150"
              />
            </Link>
          </div>
        </div>
        <div className="bg-psecondary flex flex-col gap-4 p-6">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/assets/images/project-4-340x250.jpg"
              alt="e-learning management system"
              width={600}
              height={400}
              className="transition-transform duration-200 ease-linear hover:scale-110"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <p className="text-primary font-montserrat text-xs font-semibold uppercase">
                Gallery
              </p>
              <div className="flex cursor-pointer gap-1 rounded-md bg-transparent px-1 py-2 transition-all duration-150 ease-linear hover:bg-slate-200"> 
                <Image
                  src="assets/icons/heart.svg"
                  alt="like icon"
                  width={15}
                  height={15}
                />
                <span className="text-xs font-normal">122</span>
              </div>
            </div>
            <Link
              href={"/"}
              className="hover:text-primary group font-montserrat text-[23px] font-bold transition-colors duration-300 ease-linear">
              Empowering Education with Virtutor Online{" "}
              <Image
                src="assets/icons/arrow-up-right.svg"
                alt="Arrow up right icon"
                width={15}
                height={15}
                className="text-primary-svg inline-block origin-bottom-left scale-0 transition-transform duration-300 ease-linear group-hover:scale-150"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
