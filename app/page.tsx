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
                  role="Android Software Engineer"
                  title="Android engineer building reliable, offline-first apps with Kotlin and Jetpack Compose"
                  description="Android Software Engineer with 6 years delivering production apps across banking and enterprise environments. I build with Kotlin, Jetpack Compose and Clean Architecture, and I care about the parts that make an app dependable: testing, CI/CD, and sync that works when the network doesn't."
                  highlight="offline-first"
                  location="Johannesburg, Gauteng"/>

            <Projects/>
            <Highlights/>
            <Skills/>
            <Contact/>
            <Footer/>
        </main>
    );
}