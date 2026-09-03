"use client";
import Image from "next/image";
import {FaMapMarkerAlt} from "react-icons/fa";

type HeroProps = {
    name: string;
    title: string;
    description: string;
    highlight?: string;
    role?: string;
    location?: string;
    available?: boolean;
};

function renderTitle(title: string, highlight?: string) {
    if (!highlight) return title;
    const parts = title.split(highlight);
    if (parts.length === 1) return title;
    return (
        <>
            {parts[0]}
            <span className="bg-gradient-to-r from-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
                {highlight}
            </span>
            {parts[1]}
        </>
    );
}

export default function Hero({
                                 title,
                                 description,
                                 highlight,
                                 role = "Software engineer",
                                 location = "Johannesburg /Remote",
                                 available = true
                             }: HeroProps) {
    return (
        <section
            className="relative overflow-hidden bg-white px-6 pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-32 dark:bg-zinc-900">

            <div
                className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(24,24,27,0.06),_transparent_40%]"/>
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div>
                    <span
                        className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-xs font-medium tracking-wide text-purple-700 dark:border-purple-800 dark:bg-purple-950 dark:text-purple-300">
                        {role}
                    </span>

                    <h2 className="mt-4 text-2xl font-semibold text-zinc-600 sm:text-3xl dark:text-zinc-300">
                        {renderTitle(title, highlight)}
                    </h2>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                        {description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <span
                            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                            <FaMapMarkerAlt className="h-3 w-3"/>
                            {location}
                        </span>
                        {available && (
                            <span
                                className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-xs font-medium text-green-700 dark:border-green-800 dark:bg-green-950 dark:text-green-300">

                                <span className="relative flex h-1.5 w-1.5">
                                    <span
                                        className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"/>
                                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500"/>
                                </span>
                                    Available for work
                            </span>
                        )}

                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600">
                            View my work
                            <span aria-hidden="true">→</span>
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800">
                            Let&#39;s talk
                        </a>
                    </div>
                </div>

                <div
                    className="relative order-first mx-auto h-64 w-64 overflow-hidden rounded-full lg:order-none lg:h-96 lg:w-96">
                    <Image
                        src="/projects/odwaz.jpeg"
                        alt="Odwa"
                        fill
                        className="object-cover object-[center_20%]"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}