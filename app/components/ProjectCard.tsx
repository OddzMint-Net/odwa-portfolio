"use client"
import Image from "next/image";
import {FaGithub, FaGooglePlay} from "react-icons/fa";
import {useEffect, useState} from "react";

type ProjectCardProps = {
    title: string;
    technologies: string[];
    description: string;
    githubUrl: string;
    playStoreUrl?: string;
    images: string[];
};

export default function ProjectCard(
    {
        title,
        technologies,
        description,
        githubUrl,
        playStoreUrl,
        images,
    }: ProjectCardProps) {

    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    useEffect(() => {
        if (expandedIndex === null) return;
        document.body.style.overflow = "hidden";
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key == "Escape") setExpandedIndex(null);

        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, [expandedIndex]);
    return (
        <>
            <article
                className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                <div className="grid gap-2 p-3"
                     style={{gridTemplateColumns: `repeat(${Math.min(images.length, 3)},minmax(0,1fr))`}}>
                    {images.map((src, i) => (
                        <div
                            key={src}
                            onClick={() => setExpandedIndex(i)}
                            className="relative overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800 cursor-pointer"
                            style={{aspectRatio: "9 /16"}}
                        >
                            <Image
                                src={src}
                                alt={`${title} screenshot ${i + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>

                <div className="p-5">
                    <p className={
                        playStoreUrl
                            ? "text-xs font-medium tracking-wide text-emerald-600 dark:text-emerald-400"
                            : "text-xs font-medium tracking-wide text-zinc-400 dark:text-zinc-500"
                    }>
                        {playStoreUrl ? "Production" : "GitHub"}
                    </p>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                        {title}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                        {description}
                    </p>

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
                            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
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
                                aria-label="Get it on PlayStore"
                                title="Get it on PlayStore"
                                className="inline-flex items-center gap-2 text-sm font-medium text-green-600 transition hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
                            >
                                <span className="flex h-4 w-4 items-center justify-center">
                                <FaGooglePlay className="h-3.5 w-3.5"/>
                                </span>
                                Get it on PlayStore
                            </a>
                        )}
                    </div>
                </div>
            </article>

            {expandedIndex !== null && (
                <div
                    onClick={() => setExpandedIndex(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
                >
                    <button
                        type="button"
                        onClick={() => setExpandedIndex(null)}
                        aria-label="Close"
                        className="absolute top-6 right-6 text-3xl text-white"
                    >
                        ×
                    </button>
                    <div className="relative h-full max-h-[85vh] w-full max-w-4xl">
                        <Image
                            src={images[expandedIndex]}
                            alt={`${title} screenshot full size`}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
