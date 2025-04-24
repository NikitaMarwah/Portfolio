import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Resume from "./Resume";
import Skills from "./Skills";

function Home() {
    return (
        <div className="text-center">
            {/* <h1 className="text-4xl font-bold">Nikita Marwah</h1>
            <p className="text-xl text-gray-600 mt-2">Frontend Developer</p> */}
            <Hero />
            <About />
            <Skills />
            <Resume />
            <Contact />
        </div>
    );
}

export default Home;
