type SkillCategory = {
    title: string;
    skills: string[];
};

const skillCategories: SkillCategory[] = [
    {
        title: "Languages",
        skills: ["Kotlin", "TypeScript", "Java"],
    },
    {
        title: "Android & architecture",
        skills: [
            "Jetpack Compose",
            "Clean Architecture",
            "MVI",
            "MVVM",
            "Hilt",
            "Room",
            "Coroutines & Flow",
        ],
    },
    {
        title: "Web & frontend",
        skills: ["React", "Next.js", "Tailwind CSS"],
    },

    {
        title: "AI engineering",
        skills: ["Gemini API", "Tooling calling", "Prompt engineering", "Workflow automation"],
    },
    {
        title: "Networking & APIs",
        skills: ["Retrofit", "Ktor", "REST APIs", "OkHttp"],
    },
    {
        title: "Testing & quality",
        skills: ["Junit", "MocKK", "Appium", "GitHub Actions", "SonarClous"],
    },
    {
        title: "Tools & process",
        skills: ["Git", "Google Play Store", "Vercel", "Gradle", "Agile & Scrum"],
    }
];

export default function Skills() {
    return (
        <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-purple-600 dark:text-purple-400">
                Skills
            </p>
            <h2 className="mb-8 text-3xl font-bold text-zincc-900 dark:text-white">
                What I work with
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {skillCategories.map(({title, skills}) => (
                    <div
                        key={title}
                        className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                        <h3 className="mb-3 text-base font-semibold text-zinc-900 dark:text-white">
                            {title}
                        </h3>
                        <ul className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <li
                                    key={skill}
                                    className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}