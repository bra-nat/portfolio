import React from "react";
import Image from "next/image";
import { projects } from "@/constants";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


const Portfolio = () => {
  return (
    <section className="max-container flex flex-col gap-5">
      <h1 className="text-primary mt-12 text-center text-sm font-normal uppercase tracking-wide">
        Browse through some of my projects
      </h1>
      <h2 className="mb-12 text-center text-6xl font-bold text-slate-800 max-lg:text-4xl max-lg:leading-6">
        My Portfolio
      </h2>

      <Dialog>
      <DialogTrigger>
        
      <div className="grid w-full gap-6 p-4 font-montserrat max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-psecondary flex flex-col gap-4 p-6">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={project.imageSrc}
                alt={project.alt}
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
                  <span className="text-xs font-normal">{project.likeCount}</span>
                </div>
              </div>
              <h2
                className="hover:text-primary group text-start font-montserrat text-[23px] font-bold transition-colors duration-300 ease-linear"
              >
                {project.title}{" "}
                <Image
                  src="assets/icons/arrow-up-right.svg"
                  alt="Arrow up right icon"
                  width={15}
                  height={15}
                  className="text-primary-svg inline-block origin-bottom-left scale-0 transition-transform duration-300 ease-linear group-hover:scale-150"
                />
              </h2>
            </div>
          </div>
        ))}
      </div>

      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Built Portfolio Website with HTML, CSS, JS, ThreeJS and SASS</DialogTitle>
          <DialogDescription>
          During my venture into web development, I constructed a comprehensive portfolio website from the ground up. By employing HTML, CSS, JavaScript, ThreeJS, and SASS, this project not only showcases my practical skills but also represents a pivotal milestone in my development journey.”
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>

      
    </section>
  );
};

export default Portfolio;
