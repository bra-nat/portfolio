"use client";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="max-container flex w-full px-14">
      <div className="flex w-full flex-col items-center justify-center gap-6 font-montserrat">
        <h1 className="text-primary mb-2 text-sm font-normal uppercase tracking-wide">
          Contact
        </h1>
        <h2 className="mb-12 text-6xl font-bold leading-10 text-slate-800 max-xl:text-4xl max-lg:leading-6">
          Get in Touch.
        </h2>
        <div className="flex w-full flex-col gap-5 xl:flex-row">
          <div className="bg-psecondary flex w-full max-w-md flex-col justify-start gap-6 p-8">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/assets/images/contact-me.webp"
                alt="image for contact us section"
                width={600}
                height={400}
                className="rounded-lg transition-transform duration-300 ease-linear hover:scale-110"
              />
            </div>
            <h2 className="text-3xl font-bold">Nathaniel Aidoo</h2>
            <p className="font-montserrat text-sm font-normal">
              Front-end Engineer
            </p>
            <p className=" text-lg font-normal">
              I am available for freelance work, Part-time, Full-Time. Connect
              with me and let&apos;s build amazing projects together.
            </p>
            <div className="">
              <p>
                Phone:
                <Link href={"/"} className="group ml-2 inline-block">
                  <span className="hover:text-primary transition-colors duration-300 ease-linear">
                    +233 240701457
                  </span>
                  <div className="mt-[-2px] h-[1px] w-0 transition-all duration-300 ease-linear group-hover:w-full group-hover:bg-[#fe0302]"></div>
                </Link>
              </p>
              <p>
                Email:
                <Link href={"/"} className="group ml-2 inline-block">
                  <span className="hover:text-primary transition-colors duration-300 ease-linear">
                    admin@nathanielaidoo.com
                  </span>
                  <div className="mt-[-2px] h-[1px] w-0 transition-all duration-300 ease-linear group-hover:w-full group-hover:bg-[#fe0302]"></div>
                </Link>
              </p>
            </div>
            <p className="text-base uppercase">Find me</p>
            <div className="flex gap-4 ">
              <div className="bg-p_primary group flex items-center justify-center p-4">
                <Image
                  src="/assets/icons/xa.svg"
                  alt="Twitter Logo"
                  width={20}
                  height={20}
                  className="group-hover:text-white-svg"
                />
              </div>
              <div className="bg-p_primary group flex items-center justify-center p-4">
                <Image
                  src="/assets/icons/linkedin-a.svg"
                  alt="LinkedIn Logo"
                  width={20}
                  height={20}
                  className="group-hover:text-white-svg"
                />
              </div>
              <div className="bg-p_primary group flex items-center justify-center p-4">
                <Image
                  src="/assets/icons/github.svg"
                  alt="GitHub Logo"
                  width={20}
                  height={20}
                  className="group-hover:text-white-svg"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-5"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
