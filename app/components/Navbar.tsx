"use client";
import {useState} from "react"
import {FaLinkedin, FaGithub, FaMedium, FaTag, FaDownload} from "react-icons/fa";

const CV_PATH = "/cv/OdwaMtatambi_Curriculum_Vitae.pdf";

const navLinks = [
    {href: "#home", label: "Home"},
    {href: "#projects", label: "Projects"},
    {href: "#skills", label: "Skills"},
    {href: "#highlights", label: "Highlights"},
    {href: "#contact", label: "Contact"}
];

const socialLinks = [
    {href: "https://www.linkedin.com/in/odwa-mtatambi-ab7022104", label: "LinkedIn", Icon: FaLinkedin},
    {href: "https://github.com/OddzMint-Net/", label: "GitHub", Icon: FaGithub},
    {href: "https://medium.com/@odwamtatambi", label: "Medium", Icon: FaMedium},
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-white dark:bg-zinc-900">
            <div className="mx-auto grid max-w-6xl grid-cols-2 items-center px-6 py-4 md:grid-cols-3">
                <a
                    href="#home"
                    className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-white">
                    <FaTag className="h-4 w-4 text-purple-600 dark:text-purple-400"/>
                    Odwa Mtatambi
                </a>

                <div className="hidden justify-center gap-2 md:flex">
                    {navLinks.map(({href, label}) => (
                        <a
                            key={label}
                            href={href}
                            className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-600 transtion hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white">
                            {label}
                        </a>
                    ))}
                </div>

                <div className="flex items-center justify-end gap-8">
                    <div className="hidden items-center gap-8 md:flex">
                        {socialLinks.map(({href, label, Icon}) => (
                            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                               className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                                <Icon className={"h-6 w-auto"}/>
                            </a>
                        ))}

                        <a
                            href={CV_PATH}
                            download="Odwa-Mtatambi-CV.pdf"
                            aria-label="Download CV"
                            className="inline-flex w-fit items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 transtion-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700">
                            <FaDownload className="h-3.5 w-3.5"/>
                            CV
                        </a>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-2xl text-zinc-900 dark:text-white md:hidden"
                        aria-label="Toggle navigation menu"
                    >
                        {isOpen ? "X" : "☰"}
                    </button>
                </div>
            </div>

            {
                isOpen && (
                    <div
                        className="flex flex-col gap-4 border-t border-zinc-200 px-6 pt-4 pb-4 md:hidden dark:border-zinc-800">

                        {navLinks.map(({href, label}) => (
                            <a
                                key={label}
                                href={href}
                                onClick={() => setIsOpen(false)}
                                className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                                {label}
                            </a>

                        ))}

                        <a
                            href={CV_PATH}
                            download="Odwa-Mtatambi-CV.pdf"
                            aria-label="Download CV"
                            onClick={() => setIsOpen(false)}
                            className="inline-flex w-fit items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 transtion-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700">
                            <FaDownload className="h-3.5 w-3.5"/>
                            CV
                        </a>

                        <div
                            className="flex gap-6 pt-2">
                            {socialLinks.map(({href, label, Icon}) => (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                                   aria-label={label} className="text-zinc-600 dark:text-zinc-400">
                                    <Icon className="h-6 w-auto"/>
                                </a>
                            ))}
                        </div>
                    </div>)
            }
        </nav>
    )

}