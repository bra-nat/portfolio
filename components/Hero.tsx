import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="iam" className="max-container flex  min-h-screen w-full px-4 ">
      <div className="flex w-full flex-col items-start gap-10 lg:flex-row lg:gap-8">
        <div className="flex w-full flex-col gap-16 lg:w-[65%]">
          <div className="bg-psecondary px-8 pb-16 pt-6 transition-transform duration-75 ease-in hover:-translate-y-2">
            <div className="flex items-center justify-start">
              <div className="bg-user rounded-full p-2 ">
                <div className="overflow-hidden rounded-full bg-[#fe0302] p-1 opacity-85">
                  <Image
                    src="/assets/icons/user.svg"
                    alt="user icon"
                    width={35}
                    height={35}
                    className="text-white-svg"
                  />
                </div>
              </div>
            </div>
            <h1 className="mt-4 text-5xl font-bold leading-tight">
              <span className="opacity-60">Hi I&apos;m </span>
              <br /> <span className="text-primary opacity-90">Nathaniel</span>
            </h1>
            <p className="pt-4 font-montserrat text-base">
              Empowering Brands with User-Centric Web Design and Development
              Solutions
            </p>
            <div className="flex items-center justify-start gap-4 pt-10 font-montserrat text-base">
              <Image
                src="/assets/icons/note.svg"
                alt="document icon"
                width={25}
                height={28}
              />
              Web Designer & Developer
            </div>
            <div className="flex items-center justify-start gap-4 pt-4 font-montserrat text-base">
              <Image
                src="/assets/icons/mail.svg"
                alt="mail-envelope icon"
                width={25}
                height={25}
              />
              info@nathanielaidoo.com
            </div>
            <div className="flex items-center justify-start gap-4 pt-4 font-montserrat text-base">
              <Image
                src="/assets/icons/location.svg"
                alt="location"
                width={25}
                height={30}
              />{" "}
              57 Trako Street, Accra - Ghana
            </div>
          </div>
          <div className="bg-psecondary flex flex-col items-start gap-4 p-6 font-montserrat text-base ">
            <p>Download my curriculum vitae:</p>
            <div className="flex flex-col items-center justify-center gap-4 xl:flex-row xl:gap-6">
              {/* Add a download link <a href="/test.svg/>" download="Logo" */}
              <Link
                href="/assets/images/Curriculum_Vitae_Nathaniel Aidoo_Updated_V2.0i.pdf"
                download="CV">
                <Button
                  label="Download CV"
                  extraClasses="px-8 py-5 mb-4 lg:mb-0 whitespace-nowrap font-normal"
                />
              </Link>
              <Link href="#contact">
              <Button
                label="Contact me"
                extraClasses="px-8 py-5 font-normal whitespace-nowrap"
              />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-psecondary w-full overflow-hidden border border-b-[18px] border-r-[18px] border-white">
          <Image
            src="/assets/images/nathaniel.png"
            alt="Nathaniel's picture"
            width={600}
            height={600}
            className="flex w-full flex-1 transition-transform duration-200 ease-linear hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
