
import Experiences from "@/components/Experiences";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

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
      <section>Resume</section>
      <section>contact</section>
      <section>footer</section>
    </main>
  );
}
