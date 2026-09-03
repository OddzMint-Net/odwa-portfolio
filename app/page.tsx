import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Highlights from "./components/Highlights";

export default function Home() {
    return (
        <main>
            <Navbar/>
            <Hero name="Odwa Mtatambi"
                  role="Software Engineer"
                  title="Android Software Engineer building AI-powered experiences"
                  description="Software Engineer with 5+ years delivering production Android applications across banking, and enterprise environments. I combine mobile engineering with AI, workflow automation, and scalable architecture — writing clean, maintainable code and shipping products people actually use."
                  highlight="AI Engineering"
                  location="Johannesburg, Gauteng"
            />

            <Projects/>
            <Highlights/>
            <Skills/>
            <Contact/>
            <Footer/>
        </main>
    );
}