import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
const Main = () => {
  return (
    <main className="px-3 md:px-10">
      <Intro />
      <Skills />
      <Projects />
    </main>
  );
};

export default Main;
