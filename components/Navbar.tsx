"use client";
import { navlinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef<HTMLDivElement | null>(null);

  // handle scroll event
  const handleScroll = (elTopOffset: any, elHeight: any) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
  
      const header = headerRef.current?.getBoundingClientRect();

      const handleScrollEvent = () => {
        if(header) {
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
      } top-0 z-40 w-full border-b border-slate-300 px-[45px] py-[12px]`}>
      <nav className="mx-auto flex w-full max-w-[1440px] items-center justify-between ">
        <Link href="/">
          <Image
            src={"/assets/icons/logo-white.png"}
            width={140}
            height={140}
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
                extraClasses="px-6 py-3.5 max-lg:px-8 max-lg:py-5"
              />
            </Link>
          </div>
          <div className="hidden max-lg:block">
            <div className="bg-p_primary-rounded ml-5 p-4 hover:scale-105">
              <Image
                src={"/assets/icons/hamburger.svg"}
                width={25}
                height={25}
                alt="Logo"
                className="text-primary-svg"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
