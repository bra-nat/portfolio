import React from 'react'
import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const Projects = () => {
  return (
    <section className="max-container flex w-full px-4">
        <div className='flex w-full flex-col items-center justify-center gap-6 font-montserrat'>
        <h1 className='text-primary text-sm font-normal uppercase tracking-wide'>Explore my creations</h1>
        <h2 className='text-6xl font-bold leading-10 text-slate-800 max-lg:text-4xl max-lg:leading-6'>Featured Projects</h2>
        <div className='bg-secondary flex w-full px-14 '>
        <Carousel className=' w-full'>
        <CarouselContent>
          <CarouselItem>
      <div className="flex flex-col items-start gap-6 py-7 lg:flex-row">
      <div className="w-[80%] font-montserrat max-lg:order-last">
        <h2 className="mb-6 text-2xl font-bold ">
          Empowering Education with Virtutor Online
        </h2>
        <p className="mb-9 text-base leading-7">
          I designed and built a variety of custom features to create a unique
          visual framework and strategy that seamlessly spans across the entire
          Virtutor Online learning platform.
        </p>
        <p>Fully responsive. SEO optimized. WordPress</p>
      </div>
      <div className="w-full">
        <Image
          src="/assets/images/project-2-1220x686.jpg"
          alt="Learning Management System Website"
          width={500}
          height={400}
          className="w-full rounded-lg "
        />
      </div>
    </div>
          </CarouselItem>
          <CarouselItem>
          <div className="flex flex-col items-start gap-6 py-7 lg:flex-row">
      <div className="w-[80%] font-montserrat max-lg:order-last">
        <h2 className="mb-6 text-2xl font-bold ">
          Empowering Education with Virtutor Online
        </h2>
        <p className="mb-9 text-base leading-7">
          I designed and built a variety of custom features to create a unique
          visual framework and strategy that seamlessly spans across the entire
          Virtutor Online learning platform.
        </p>
        <p>Fully responsive. SEO optimized. WordPress</p>
      </div>
      <div className="w-full">
        <Image
          src="/assets/images/project-2-1220x686.jpg"
          alt="Learning Management System Website"
          width={500}
          height={400}
          className="w-full rounded-lg "
        />
      </div>
    </div>
          </CarouselItem>
          <CarouselItem>
          <div className="flex flex-col items-start gap-6 py-7 lg:flex-row">
      <div className="w-[80%] font-montserrat max-lg:order-last">
        <h2 className="mb-6 text-2xl font-bold ">
          Empowering Education with Virtutor Online
        </h2>
        <p className="mb-9 text-base leading-7">
          I designed and built a variety of custom features to create a unique
          visual framework and strategy that seamlessly spans across the entire
          Virtutor Online learning platform.
        </p>
        <p>Fully responsive. SEO optimized. WordPress</p>
      </div>
      <div className="w-full">
        <Image
          src="/assets/images/project-2-1220x686.jpg"
          alt="Learning Management System Website"
          width={500}
          height={400}
          className="w-full rounded-lg "
        />
      </div>
    </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className='cursor-pointer bg-gradient-to-r from-[#e2e8ec] to-[#ffffff] shadow-lg' />
        <CarouselNext className='cursor-pointer bg-gradient-to-r from-[#e2e8ec] to-[#ffffff] shadow-lg' />
      </Carousel>
        </div>
        </div>
    </section>
  )
}

export default Projects;