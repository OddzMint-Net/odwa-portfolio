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
        title: "SlipStash",
        description: "SlipStash is an offline-first expense tracker for Android. Record an expense and snap a receipt, and it saves instantly on the phone, even with no signal. A background job then syncs everything to Firebase when a connection returns, retrying automatically if anything fails. Each expense shows a live status (Queued, Syncing, Synced or Retry). Built with Jetpack Compose and Clean Architecture, with WorkManager for background sync and Firestore security rules so every user can only access their own data.",
        technologies: [
            "Kotlin",
            "Jetpack Compose",
            "Clean Architecture",
            "MVVM",
            "Hilt",
            "Room",
            "WorkManager",
            "Firebase Auth",
            "Cloud Firestore",
            "Coroutines & Flow",
        ],
        githubUrl: "https://github.com/OddzMint-Net/SlipStash",
        images: ["/projects/synced.jpg", "/projects/summary.jpg", "/projects/add_expense.png"],
    },
    {
        title: "NewsOutletApp",
        description: "A South African news app built with Jetpack Compose and Clean Architecture, delivering the latest headlines, instant search, and offline-ready bookmarks — all in one place.",
        technologies: ["Jetpack DataStore (onboarding state)", "Pagination — Jetpack Paging 3", "Image Loading — Coil 3"],
        githubUrl: "https://github.com/OddzMint-Net/NewsOutletApp",
        images: ["/projects/news2.png", "/projects/news1.jpeg", "/projects/news_details.jpeg"]
    },
    {
        title: "Ugrand",
        description: "Ugrand? (formerly MoodTracker) is a Jetpack Compose Android app for quick, honest mood check-ins. Tap a mood, or type how you feel in your own words, and get a short AI-generated reflection from the Gemini API, personalised with your recent mood history. Includes a first-run onboarding flow, local history with Room, and offline fallback messages. Built with Clean Architecture and published on Google Play.",
        technologies: [ "Kotlin", "Jetpack Compose", "Clean Architecture", "MVVM", "Hilt", "Room", "DataStore", "Coroutines & Flow","Gemini API"],
        githubUrl: "https://github.com/OddzMint-Net/MoodTracker",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.odwa.moodtracker&hl=en",
        images: ["/projects/onboard1.png", "/projects/onboard2.png", "/projects/onboard3.png"],
    },
    {
        title: "ActionPilotAI",
        description: "AI-powered Android application that converts natural-language requests into structured actions using Gemini, MVI, and a modular action-handling architecture.",
        technologies: ["Kotlin", "Jetpack Compose", "Gemini", "MVI"],
        githubUrl: "https://github.com/OddzMint-Net/ActionPilotAI",
        images: ["/projects/create_event1.png", "/projects/create_event_dark.png", "/projects/event_calendar.png"],

    },
    {
        title: "WeatherApp",
        description: "Production-quality Android weather application showcasing Clean Architecture, Kotlin Flow, Room persistence, and Jetpack Compose.",
        technologies: ["Kotlin", "Jetpack Compose", "Room", "MVVM"],
        githubUrl: "https://github.com/OddzMint-Net",
        images: ["/projects/weather_1.png", "/projects/weather_2.png", "/projects/clear_weather.png"],
    },
    {
        title: "Little Lemon App",
        description: "Modern Android restaurant application built with Jetpack Compose, featuring menu search, sorting, remote data retrieval with Ktor, and local persistence with Room.",
        technologies: ["Kotlin", "Ktor", "Room", "Jetpack Compose", "MVVM"],
        githubUrl: "https://github.com/OddzMint-Net",
        images: ["/projects/lemon_1.png", "/projects/lemon_2.png", "/projects/search_list.png"],
    }
]

export default function Projects() {
    return (
        <section
            id="projects"
            className="mx-auto max-w-6xl px-6 py-16">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-purple-600 dark:text-purple-400">
                Projects😎
            </p>
            <h3 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-white">
                Personal Projects ✌️
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