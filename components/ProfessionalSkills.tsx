"use client";

import { Progress } from "@/components/ui/progress";
import { designSkills, developmentSkills } from "@/constants";
import { useEffect, useState } from "react";

interface Skill {
  name: string;
  percent: number;
}

interface SkillSectionProps {
  title: string;
  skills: Skill[];
}

const SkillSection = ({ title, skills }: SkillSectionProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(skills[1].percent), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full">
      <h3 className="text-primary mt-4 text-xs font-normal uppercase tracking-wide">
        Professional Skills
      </h3>
      <h4 className="mt-4 text-4xl font-bold leading-10 text-slate-800">
        {title}
      </h4>

      {skills.map((skill, index) => (
        <div
          key={index}
          className="mb-3 mt-8 flex flex-col font-montserrat font-light">
          <div className="flex justify-between">
            <p>{skill.name}</p>
            <span>{skill.percent}%</span>
          </div>
          <Progress
            key={index}
            value={progress}
            className=" rounded-full border-[3px] border-slate-300 bg-slate-300"
          />
        </div>
      ))}
    </section>
  );
};

const ProfessionalSkills = () => {
  return (
    <article className="max-container flex w-full flex-col gap-8 lg:flex-row">
      <SkillSection title="Design Skill" skills={designSkills} />
      <SkillSection title="Development Skill" skills={developmentSkills} />
    </article>
  );
};

export default ProfessionalSkills;
