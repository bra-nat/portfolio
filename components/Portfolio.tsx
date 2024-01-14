"use client";
import React, { useState } from "react";
import Image from "next/image";
import { projects, projectsData } from "@/constants";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import { projectsData } from '@/constants';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  title: string;
  description: string;
  imageSrc: string;
  children?: React.ReactNode;
}

const ProjectItem = ({ title, description, imageSrc }: Props) => (
  <CarouselItem>
    <div className="flex flex-col items-start gap-6 py-7">
      <div className="w-full">
        <Image
          src={imageSrc}
          alt="Project Image"
          width={500}
          height={400}
          className="w-full rounded-lg"
        />
      </div>
      <div className="w-[80%] font-montserrat max-lg:order-last">
        <h2 className="mb-6 text-2xl font-bold">{title}</h2>
        <p className="mb-9 text-base leading-7">{description}</p>
        <p>Fully responsive. SEO optimized. WordPress</p>
      </div>
    </div>
  </CarouselItem>
);

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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
              <div
                key={index}
                className="bg-psecondary flex flex-col gap-4 p-6"
                onClick={() => setSelectedProject(index)}
                style={{ cursor: 'pointer' }}
              >
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
                      <span className="text-xs font-normal">
                        {project.likeCount}
                      </span>
                    </div>
                  </div>
                  <h2 className="hover:text-primary group text-start font-montserrat text-[23px] font-bold transition-colors duration-300 ease-linear">
                    {project.title}{' '}
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
        <DialogContent className="bg-psecondary">
          <DialogHeader>
            <DialogTitle>
              <div className="bg-psecondary flex w-full px-14">
                <Carousel className="w-full">
                  <CarouselContent>
                    {selectedProject !== null && (
                      <ProjectItem
                        title={projects[selectedProject].title}
                        description={projects[selectedProject].description}
                        imageSrc={projects[selectedProject].imageSrc}
                        gallery={projects[selectedProject].gallery}
                      />
                    )}
                  </CarouselContent>
                  <CarouselPrevious className="cursor-pointer bg-gradient-to-r from-[#e2e8ec] to-[#ffffff] shadow-lg" />
                  <CarouselNext className="cursor-pointer bg-gradient-to-r from-[#e2e8ec] to-[#ffffff] shadow-lg" />
                </Carousel>
              </div>
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
