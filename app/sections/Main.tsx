import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Main = () => {
    return (
        <main className="px-3 md:px-10">
            <Hero />
            <Intro />
            <Skills />
            <Projects />
            <Contact />
        </main>
    );
};

export default Main;
