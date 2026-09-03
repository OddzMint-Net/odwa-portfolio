import {FaBuilding, FaRocket, FaCheckSquare, FaPenNib} from "react-icons/fa";
import React from "react";

type Stat = {
    value: string;
    label: string
};

type Achievement = {
    icon: React.ElementType;
    text: string;
};

const stats: Stat[] = [
    {value: "5+", label: "Years experience"},
    {value: "Millions", label: "Of users reached"},
    {value: "1", label: "Cloud Practitioner certified"},
];

const achievements: Achievement[] = [
    {
        icon: FaBuilding,
        text: "Contributed to one of South Africa's largest retail banking apps, delivering insurance features under strict compliance constraints.",
    },
    {
        icon: FaRocket,
        text: "Designed and shipped an AI-powered wellness app to the Play Store end-to-end, from architecture through release.",
    },
    {
        icon: FaCheckSquare,
        text: "Led an automated UI testing strategy with Appium, improving release confidence both Android & iOS teams",
    },
    {
        icon: FaPenNib,
        text: "Publishes technical writing on Android architecture and engineering practices on Medium",
    },
];

export default function Highlights() {
    return (
        <section id="highlights" className="mx-auto max-w-6xl px-6 py-16">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-purple-600 dark:text-purple-400">
                Highlights
            </p>
            <h2 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-white">
                Proofs, not just claims
            </h2>

            <div className="grid grid-cols--2 gap-4 sm:grid-cols-4">
                {stats.map(({value, label}) => (
                    <div key={label}
                         className="rounded-2xl border border-zinc-2-- bg-white p-5 text-center shadpw-lg dark:border-zinc-800 dark:bg-zinc-900">
                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                            {value}
                        </div>
                        <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                            {label}
                        </div>

                    </div>
                ))}
            </div>

            <ul className="mt-10 flex flex-col gap-5">
                {achievements.map(({icon: Icon, text}) => (
                    <li key={text} className="flex items-start gap-3">
                        <Icon className="mt-1 h-5 w-5 flex-shrink-0 text-purple-600 dark:text-purple-400"/>
                        <p className="text-zinc-600 dark:text-zinc-300">{text}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}