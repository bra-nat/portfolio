import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Education from "./Education";
import ProfessionalSkills from "./ProfessionalSkills";
import Jobs from "./Jobs";
import Portfolio from "./Portfolio";

const Resume = () => {
  return (
    <section className="max-container flex w-full px-14 max-sm:px-4">
      <div className="flex w-full flex-col items-center justify-center gap-6 font-montserrat">
        <h1 className="text-primary text-sm font-normal uppercase tracking-wide">
          7+ years of professional experience
        </h1>
        <h2 className="text-6xl font-bold leading-10 text-slate-800 max-xl:text-4xl max-lg:leading-6">
          My Resume
        </h2>

        <Tabs defaultValue="education" className="mt-12 flex w-full flex-col">
          <TabsList className="bg-psecondary mb-4 flex h-full flex-col lg:flex-row">
            <TabsTrigger
              value="education"
              className="focus:text-primary hover:text-primary w-full py-8 text-base data-[state=active]:rounded-[8px] data-[state=active]:shadow-lg">
              Education
            </TabsTrigger>
            <TabsTrigger
              value="professional-skills"
              className="focus:text-primary hover:text-primary w-full py-8 text-base data-[state=active]:rounded-[8px] data-[state=active]:shadow-lg">
              Professional Skills
            </TabsTrigger>
            <TabsTrigger
              id="experiencedetails"
              value="experience"
              className=" focus:text-primary hover:text-primary w-full py-8 text-base  data-[state=active]:rounded-[8px] data-[state=active]:shadow-lg">
              Work Experience
            </TabsTrigger>
            <TabsTrigger
              value="portfolio"
              className="focus:text-primary hover:text-primary w-full py-8 text-base  data-[state=active]:rounded-[8px] data-[state=active]:shadow-lg">
              Portfolio
            </TabsTrigger>
          </TabsList>
          <TabsContent value="education">
            <Education />
          </TabsContent>
          <TabsContent value="professional-skills">
            <ProfessionalSkills />
          </TabsContent>
          <TabsContent value="experience">
            <Jobs />
          </TabsContent>
          <TabsContent value="portfolio">
            <Portfolio />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Resume;
