import React from 'react'
import Slider from './Slider';

const Projects = () => {
  return (
    <section id="#projects" className="max-container flex w-full px-4">
        <div className='flex w-full flex-col items-center justify-center gap-6 font-montserrat'>
        <h1 className='text-primary text-sm font-normal uppercase tracking-wide'>Explore my creations</h1>
        <h2 className='text-6xl font-bold leading-10 text-slate-800 max-lg:text-4xl max-lg:leading-6'>Featured Projects</h2>
        <div className='bg-secondary flex w-full'>
            <Slider />
        </div>
        </div>
    </section>
  )
}

export default Projects;