import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projectsData } from "@/constants";

interface Props {
  title: string;
  description: string;
  imageSrc: string;
}

const ProjectItem = ({ title, description, imageSrc }: Props) => (
  <CarouselItem>
    <div className="flex flex-col items-start gap-6 py-7 lg:flex-row">
      <div className="w-[80%] font-montserrat max-lg:order-last">
        <h2 className="mb-6 max-sm:text-base text-2xl text-wrap whitespace-normal font-bold">
          {title}
        </h2>
        <p className="mb-9 text-base leading-7 whitespace-normal text-wrap">
          {description}
        </p>
        <p>Fully responsive. SEO optimized.</p>
      </div>
      <div className="w-full">
        <Image
          src={imageSrc}
          alt="Project Image"
          width={500}
          height={400}
          className="w-full rounded-lg"
        />
      </div>
    </div>
  </CarouselItem>
);

const Projects = () => {
  return (
    <section className="max-container flex w-full px-4">
      <div className="flex w-full flex-col items-center justify-center gap-6 font-montserrat">
        <h1 className="text-primary text-sm font-normal uppercase tracking-wide">
          Explore my creations
        </h1>
        <h2 className="text-6xl font-bold leading-10 text-slate-800 max-lg:text-4xl max-lg:leading-6">
          Featured Projects
        </h2>
        <div className="bg-psecondary flex w-full px-14 max-sm:px-8 ">
          <Carousel className="w-full ">
            <CarouselContent>
              {projectsData.map((project, index) => (
                <ProjectItem
                  key={index}
                  title={project.title}
                  description={project.description}
                  imageSrc={project.imageSrc}
                />
              ))}
            </CarouselContent>

            <CarouselPrevious className="cursor-pointer bg-gradient-to-r from-[#e2e8ec] to-[#ffffff] shadow-lg" />
            <CarouselNext className="cursor-pointer bg-gradient-to-r from-[#e2e8ec] to-[#ffffff] shadow-lg" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
