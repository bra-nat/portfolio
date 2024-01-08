import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Education from "./Education";
import ProfessionalSkills from "./ProfessionalSkills";
import Jobs from "./Jobs";
import Portfolio from "./Portfolio";

const Resume = () => {
  return (
      <section className="max-container flex w-full px-14">
        <div className="flex w-full flex-col items-center justify-center gap-6 font-montserrat">
          <h1 className="text-primary text-sm font-normal uppercase tracking-wide">
            7+ years of professional experience
          </h1>
          <h2 className="text-6xl font-bold leading-10 text-slate-800 max-xl:text-4xl max-lg:leading-6">
            My Resume
          </h2>

          <Tabs defaultValue="account" className="flex w-full flex-col">
            <TabsList className="bg-psecondary mb-4 flex h-full flex-col lg:flex-row">
              <TabsTrigger
                value="education"
                className="bg-psecondary focus:text-primary hover:text-primary w-full py-8 text-base">
                Education
              </TabsTrigger>
              <TabsTrigger
                value="professional-skills"
                className="bg-psecondary focus:text-primary hover:text-primary w-full py-8 text-base">
                Professional Skills
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className=" bg-psecondary focus:text-primary hover:text-primary w-full  py-8 text-base">
                Work Experience
              </TabsTrigger>
              <TabsTrigger
                value="portfolio"
                className="bg-psecondary focus:text-primary hover:text-primary w-full  py-8 text-base">
                Portfolio
              </TabsTrigger>
            </TabsList>
            <TabsContent value="education"><Education /></TabsContent>
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
