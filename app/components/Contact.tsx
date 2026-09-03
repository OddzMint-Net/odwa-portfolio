import {FaEnvelope, FaLinkedin, FaGithub} from "react-icons/fa";

const contactLinks = [
    {
        href: "mailto:odwamtatambi@gmail.com",
        label: "Email me",
        Icon: FaEnvelope,
        variant: "primary" as const,
    },
    {
        href: "https://www.linkedin.com/in/odwa-mtatambi-ab7022104",
        label: "LinkedIn",
        Icon: FaLinkedin,
        variant: "secondary" as const,
    },

    {
        href: "https://github.com/OddzMint-Net/",
        label: "GitHub",
        Icon: FaGithub,
        variant: "secondary" as const,
    },
];
export default function Contact() {
    return (
        <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
            <div
                className="rounded-2xl border border-zinc-200 bg-whitw p-10 text-center shadow-lg dark:border-zinc-800 dark:bg-zinc-900 sm:p-16">
                <p className="mb-3 text-sm font-medium uppercase tracking-widest text-purple-600 dark:text-purple-400">
                    Contact
                </p>
                <h2 className="mb-3 text-3xl font-bold text-zinc-900 dark:text-white">
                    Let&#39;s build something together
                </h2>
                <p className="mx-auto mb-8 max-w-md text-zinc-600 dark:text-zinc-300">
                    Open to new opportunities and freelance work. Reach out through any of these.
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                    {contactLinks.map(({href, label, Icon, variant}) => (
                        <a
                            key={label}
                            href={href}
                            target={variant == "secondary" ? "_blank" : undefined}
                            rel={variant == "secondary" ? "noopener noreferrer" : undefined}
                            className={
                                variant == "primary"
                                    ? "inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
                                    : "inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
                            }
                        >
                            <Icon className="h-4 w-4"/>
                            {label}
                        </a>

                    ))}
                </div>
            </div>
        </section>
    )
}