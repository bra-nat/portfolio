import React from "react";
import { Progress } from "@/components/ui/progress";

const ProfessionalSkills = () => {
  return (
    <article className="max-container flex w-full flex-col gap-8 lg:flex-row">
      <section className="w-full">
        <h3 className="text-primary mt-4 text-xs font-normal uppercase tracking-wide">
          Professional Skills
        </h3>
        <h4 className="mt-4 text-4xl font-bold leading-10 text-slate-800">
          Design Skill
        </h4>
        <div className="mb-3 mt-8 flex items-center justify-between font-light font-montserrat">
          <p>Photoshop</p>
          <span>100%</span>
        </div>
        <Progress
          value={100}
          className=" rounded-full border-[3px] border-slate-300 bg-slate-300"
        />
        <div className="mb-3 mt-8 flex items-center justify-between font-light font-montserrat">
          <p>Adobe Illustrator</p>
          <span>90%</span>
        </div>
        <Progress
          value={90}
          className=" rounded-full border-[3px] border-slate-300 bg-slate-300"
        />
        <div className="mb-3 mt-8 flex items-center justify-between font-light font-montserrat">
          <p>FIGMA</p>
          <span>70%</span>
        </div>
        <Progress
          value={70}
          className=" rounded-full border-[3px] border-slate-300 bg-slate-300"
        />
        <div className="mb-3 mt-8 flex items-center justify-between font-light font-montserrat">
          <p>Wordpress</p>
          <span>100%</span>
        </div>
        <Progress
          value={100}
          className=" rounded-full border-[3px] border-slate-300 bg-slate-300"
        />
        <div className="mb-3 mt-8 flex items-center justify-between font-light font-montserrat">
          <p>Git</p>
          <span>90%</span>
        </div>
        <Progress
          value={90}
          className=" rounded-full border-[3px] border-slate-300 bg-slate-300"
        />
        <div className="mb-3 mt-8 flex items-center justify-between font-light font-montserrat">
          <p>Bootstrap</p>
          <span>100%</span>
        </div>
        <Progress
          value={100}
          className=" rounded-full border-[3px] border-slate-300 bg-slate-300"
        />
      </section>
      <section className="w-full">
        <h3 className="text-primary mt-4 text-xs font-normal uppercase tracking-wide">
          Professional Skills
        </h3>
        <h4 className="mt-4 text-4xl font-bold leading-10 text-slate-800">
          Development Skill
        </h4>
        <div className="mb-3 mt-8 flex items-center  justify-betwee font-lightn font-montserrat">
          <p>HTML</p>
          <span>100%</span>
        </div>
        <Progress value={100} className=" rounded-full border-[3px] border-slate-300 bg-slate-300" />
        <div className="mb-3 mt-8 flex items-center  justify-betwee font-lightn font-montserrat">
          <p>CSS</p>
          <span>100%</span>
        </div>
        <Progress value={100} className=" rounded-full border-[3px] border-slate-300 bg-slate-300" />
        <div className="mb-3 mt-8 flex items-center  justify-betwee font-lightn font-montserrat">
          <p>JavaScript</p>
          <span>90%</span>
        </div>
        <Progress value={90} className=" rounded-full border-[3px] border-slate-300 bg-slate-300" />
        <div className="mb-3 mt-8 flex items-center  justify-betwee font-lightn font-montserrat">
          <p>React</p>
          <span>90%</span>
        </div>
        <Progress value={90} className=" rounded-full border-[3px] border-slate-300 bg-slate-300" />
        <div className="mb-3 mt-8 flex items-center  justify-betwee font-lightn font-montserrat">
          <p>Tailwind CSS</p>
          <span>90%</span>
        </div>
        <Progress value={90} className=" rounded-full border-[3px] border-slate-300 bg-slate-300" />
        <div className="mb-3 mt-8 flex items-center  justify-betwee font-lightn font-montserrat">
          <p>TypeScript</p>
          <span>85%</span>
        </div>
        <Progress value={85} className=" rounded-full border-[3px] border-slate-300 bg-slate-300" />
        <div className="mb-3 mt-8 flex items-center  justify-betwee font-lightn font-montserrat">
          <p>NextJs 14</p>
          <span>90%</span>
        </div>
        <Progress value={90} className=" rounded-full border-[3px] border-slate-300 bg-slate-300" />
      </section>
    </article>
  );
};

export default ProfessionalSkills;
