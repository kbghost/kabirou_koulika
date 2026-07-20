import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Services } from "@/components/sections/services";
import { Projects } from "@/components/sections/projects";
import { Testimonials } from "@/components/sections/testimonials";
import { Education } from "@/components/sections/education";
import { Certifications } from "@/components/sections/certifications";
import { GithubStats } from "@/components/sections/github-stats";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Education />
      <Certifications />
      <GithubStats />
      <Faq />
      <Contact />
    </>
  );
}
