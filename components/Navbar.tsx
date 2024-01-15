"use client";
import { navlinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (elTopOffset: any, elHeight: any) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  useEffect(() => {
    const header = headerRef.current?.getBoundingClientRect();

    const handleScrollEvent = () => {
      if (header) {
        handleScroll(header.top, header.height);
      }
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <header
      id="sticky-header"
      ref={headerRef}
      className={`${
        sticky.isSticky ? "stickyNav shadowNav border-none bg-white " : ""
      } top-0 z-40 w-full border-b border-slate-300 px-[45px] py-[12px] max-sm:px-4`}>
      <nav className="mx-auto flex w-full max-w-[1440px] items-center justify-between ">
        <Link href="/">
          <Image
            src={"/assets/icons/logo-white.png"}
            width={120}
            height={120}
            alt="Logo"
          />
        </Link>
        <div className=" items-center max-lg:flex">
          <div className="flex gap-8">
            <ul className="flex items-center gap-8 max-lg:hidden">
              {navlinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.route}
                    className="hover:text-primary font-montserrat text-sm font-light uppercase transition-colors duration-200 ease-in ">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="#contact">
              <Button
                label="Hire Me"
                extraClasses="px-6 py-3.5 max-lg:px-2 max-lg:py-2"
              />
            </Link>
          </div>
          <div className="hidden max-lg:block">
            <Sheet>
              <SheetTrigger>
                <div className="bg-p_primary-rounded ml-5 p-2 hover:scale-105">
                  <Image
                    src={"/assets/icons/hamburger.svg"}
                    width={25}
                    height={25}
                    alt="Logo"
                    className="text-primary-svg"
                  />
                </div>
              </SheetTrigger>
              <SheetContent className="bg-white px-10" side={"left"}>
                <SheetHeader>
                  <Link href="/">
                    <Image
                      src={"/assets/icons/logo-white.png"}
                      width={140}
                      height={140}
                      alt="Logo"
                    />
                  </Link>
                </SheetHeader>
                <SheetTitle className="mb-6 border-b border-slate-300 py-5 font-montserrat text-base font-normal leading-8">
                  Hi, there! This is Nathaniel, a web developer ready with
                  current tools and technologies to help build your dream
                  website which is responsive across all media devices. Get in
                  touch, let&apos;s work together.
                </SheetTitle>
                <SheetDescription>
                  <nav className="flex ">
                    <div className=" items-center max-lg:flex">
                      <div className="flex gap-8">
                        <ul className="flex flex-col items-start justify-start gap-4">
                          {navlinks.map((link) => (
                            <li key={link.label}>
                              <Link
                                href={link.route}
                                className="hover:text-primary font-montserrat text-sm font-normal uppercase transition-colors duration-200 ease-in ">
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </nav>
                </SheetDescription>
                <SheetFooter className="mt-12 ">
                  <div className="mr-auto flex flex-col items-start gap-4 ">
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
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
