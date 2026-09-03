"use client"
import Image from "next/image";
import {FaGithub, FaGooglePlay} from "react-icons/fa";
import {useEffect, useState} from "react";

type ProjectCardProps = {
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    projectUrl?: string;
    playStoreUrl?: string;
    image: string;
};

export default function ProjectCard(
    {
        title,
        description,
        technologies,
        githubUrl,
        playStoreUrl,
        projectUrl,
        image,
    }: ProjectCardProps) {

    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        if (!isExpanded) return;
        document.body.style.overflow = "hidden";
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key == "Escape") setIsExpanded(false);

        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflow = "";
            window.addEventListener("keydown", handleKeyDown);
        }
    }, [isExpanded]);
    return (
        <>
            <article
                onClick={() => setIsExpanded(true)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-lg transition hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-900">
                {/* Background image */}
                <div className="relative h-56 w-full overflow-hidden">
                    <Image
                        src={image}
                        alt={`${title} screenshot`}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                    />
                    {/* Dark gradient overlay so text stays readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10"/>
                </div>

                {/* Floating content */}
                <div className="p-5">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                        {title}
                    </h3>

                    <ul className="mt-3 flex flex-wrap gap-2">
                        {technologies.map((technology) => (
                            <li
                                key={technology}
                                className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                                {technology}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-2">
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                        >
                            <span className="flex h-4 w-4 items-center justify-center">
                            <FaGithub className="h-4 w-4"/>
                            </span>
                            View on GitHub
                        </a>
                        {playStoreUrl && (
                            <a
                                href={playStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                aria-label="Get it on Google Play"
                                title="Get it on Google Play"
                                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-green-600 dark:text-zinc-400 dark:hover:text-green-400"
                            >
                                <span className="flex h-4 w-4 items-center justify-center">
                                <FaGooglePlay className="h-3.5 w-3.5"/>
                                </span>
                                Get it on Google Play
                            </a>
                        )}
                    </div>
                </div>
            </article>

            {isExpanded && (
                <div onClick={() => setIsExpanded(false)}
                     className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6">
                    <button
                        type="button"
                        onClick={() => setIsExpanded(false)}
                        aria-label="Close"
                        className="absolute top-6 right-6 text-3xl text-white"
                    >
                        ×
                    </button>

                    <div className="relative h-full max-h-[85vh] w-full max-w-4xl">
                        <Image src={image}
                               alt={`${title} screenshot full size`}
                               fill
                               className="object-contain"/>
                    </div>
                </div>
            )}
        </>
    );
}
