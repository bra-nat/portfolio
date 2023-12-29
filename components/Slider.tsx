import Image from "next/image";
import React from "react";


const Slider = () => {
  return (
    <div className="flex flex-col items-start gap-6 px-6 py-7 lg:flex-row">
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
  );
};

export default Slider;
