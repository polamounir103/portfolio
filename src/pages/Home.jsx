import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import LandingPage from "../components/LandingPage";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function Home() {
  return (
    <div className="">
      <LandingPage />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
