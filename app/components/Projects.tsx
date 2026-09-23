import ProjectCard from "./ProjectCard";

type Project = {
    title: string,
    description: string,
    technologies: string[];
    githubUrl: string;
    playStoreUrl?: string;
    images: string[];
};

const projects: Project[] = [
    {
        title: "Ugrand",
        description: "Ugrand? (formerly MoodTracker) is a Jetpack Compose Android app that helps users log their mood, reflect on their emotions, and receive AI-powered journaling prompts — built as a demonstration of production-grade Android architecture.",
        technologies: ["Kotlin", "Jetpack Compose", "Room", "Gemini", "MVVM"],
        githubUrl: "https://github.com/OddzMint-Net/MoodTracker",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.odwa.moodtracker&hl=en",
        images: ["/projects/new_ugrand.png","/projects/ugrand_dark.png"],
    },
    {
        title: "ActionPilotAI",
        description: "AI-powered Android application that converts natural-language requests into structured actions using Gemini, MVI, and a modular action-handling architecture.",
        technologies: ["Kotlin", "Jetpack Compose", "Gemini", "MVI"],
        githubUrl: "https://github.com/OddzMint-Net/ActionPilotAI",
        images: ["/projects/create_event1.png","/projects/create_event_dark.png"],

    },
    {
        title: "WeatherApp",
        description: "Production-quality Android weather application showcasing Clean Architecture, Kotlin Flow, Room persistence, and Jetpack Compose.",
        technologies: ["Kotlin", "Jetpack Compose", "Room", "MVVM"],
        githubUrl: "https://github.com/OddzMint-Net",
        images: ["/projects/weather_1.png","/projects/weather_2.png"],
    },
    {
        title: "Little Lemon App",
        description: "Modern Android restaurant application built with Jetpack Compose, featuring menu search, sorting, remote data retrieval with Ktor, and local persistence with Room.",
        technologies: ["Kotlin", "Ktor", "Room", "Jetpack Compose", "MVVM"],
        githubUrl: "https://github.com/OddzMint-Net",
        images: ["/projects/lemon_1.png","/projects/lemon_2.png"],
    }
]

export default function Projects() {
    return (
        <section
            id="projects"
            className="mx-auto max-w-6xl px-6 py-16">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-purple-600 dark:text-purple-400">
                Projects
            </p>
            <h3 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-white">
                Personal Stuff
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        githubUrl={project.githubUrl}
                        playStoreUrl={project.playStoreUrl}
                        images={project.images}
                    />
                ))}
            </div>
        </section>
    );
}