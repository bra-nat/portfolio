
import Experiences from "@/components/Experiences";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

export default function Home() {

  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <section id="#iam" className="border-b border-slate-300 pb-20 pt-24 max-lg:py-8 ">
        <Hero />
      </section>
      <section id="projects" className="border-b border-slate-300 py-20 max-lg:py-8">
        <Projects />
      </section>
      <section id="experiences" className="border-b border-slate-300 py-20 max-lg:py-8">
        <Experiences />
      </section>
      <section id="resume" className="border-b border-slate-300 py-20 max-lg:py-8">
        <Resume />
      </section>
      <section id="#contact" className="border-b border-slate-300 py-20 max-lg:py-8">
        <Contact />
      </section>
      <section>footer</section>
    </main>
  );
}
