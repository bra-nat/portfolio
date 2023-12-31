import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Education from "./Education";

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

          <Tabs defaultValue="account" className="w-full flex flex-col">
            <TabsList className="bg-secondary mb-4 h-full flex flex-col lg:flex-row">
              <TabsTrigger
                value="education"
                className="bg-secondary focus:text-primary hover:text-primary w-full py-8 text-base">
                Education
              </TabsTrigger>
              <TabsTrigger
                value="professional-skills"
                className="hover:bg-secondary focus:text-primary hover:text-primary w-full py-8 text-base">
                Professional Skills
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className=" bg-secondary focus:text-primary hover:text-primary w-full  py-8 text-base">
                Work Experience
              </TabsTrigger>
              <TabsTrigger
                value="projects"
                className="bg-secondary focus:text-primary hover:text-primary w-full  py-8 text-base">
                Projects
              </TabsTrigger>
            </TabsList>
            <TabsContent value="education"><Education /></TabsContent>
            <TabsContent value="professional-skills">
              Professional Skills
            </TabsContent>
            <TabsContent value="experience">Experiences</TabsContent>
            <TabsContent value="projects">Projects</TabsContent>
          </Tabs>
        </div>
      </section>
  );
};

export default Resume;
