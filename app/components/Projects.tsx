import ProjectCard from "./ProjectCard";

type Project = {
    title: string,
    description: string,
    technologies: string[];
    githubUrl: string;
    projectUrl?: string;
    playStoreUrl?:string;
    image: string;
};

const projects: Project[] = [
    {
        title: "ActionPilotAI",
        description: "AI-powered Android application that converts natural-language requests into structured actions using Gemini, MVI, and a modular action-handling architecture.",
        technologies: ["Kotlin", "Jetpack Compose", "Gemini", "MVI"],
        githubUrl: "https://github.com/OddzMint-Net/ActionPilotAI",
        projectUrl: "https://github.com/OddzMint-Net/ActionPilotAI",
        image: "/projects/actionpilotai.jpeg"

    }, {
        title: "Ugrand? (formerly MoodTracker)",
        description: "Offline-first Android mood tracking application with local persistence and AI-powered reflective responses designed to encourage meaningful self-reflection.",
        technologies: ["Kotlin", "Jetpack Compose", "Room", "Gemini","MVVM"],
        githubUrl: "https://github.com/OddzMint-Net/MoodTracker",
        playStoreUrl:"https://play.google.com/store/apps/details?id=com.odwa.moodtracker&hl=en",
        projectUrl: "https://play.google.com/store/apps/details?id=com.odwa.moodtracker&hl=en",
        image: "/projects/ugrand.jpg"
    },
    {
        title: "WeatherApp",
        description: "Production-quality Android weather application showcasing Clean Architecture, Kotlin Flow, Room persistence, and Jetpack Compose.",
        technologies: ["Kotlin", "Jetpack Compose", "Room", "MVVM"],
        githubUrl: "https://github.com/OddzMint-Net",
        projectUrl: "https://github.com/OddzMint-Net/WeatherApp",
        image: "/projects/weather.jpeg"
    },
    {
        title: "Little Lemon App",
        description: "Modern Android restaurant application built with Jetpack Compose, featuring menu search, sorting, remote data retrieval with Ktor, and local persistence with Room.",
        technologies: ["Kotlin", "Ktor", "Room", "Jetpack Compose", "MVVM"],
        githubUrl: "https://github.com/OddzMint-Net",
        projectUrl: "https://github.com/OddzMint-Net/LittleLemonApp",
        image: "/projects/littlelemon.jpeg"
    }
]

export default function Projects() {
    return (
        <section
            id="projects"
            className="mx-auto max-w-6xl px-6 py-16">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-purple-600 darkk:text-purple-400">
                Projects
            </p>
            <h2 className="mb-8 text-3xl font-bold text-zincc-900 dark:text-white">
                Selected work
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        githubUrl={project.githubUrl}
                        playStoreUrl={project.playStoreUrl}
                        projectUrl={project.projectUrl}
                        image={project.image}
                    />
                ))}
            </div>
        </section>
    );
}