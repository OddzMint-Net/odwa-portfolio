export default function Footer() {
    return (
        <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
                <p>
                    © {new Date().getFullYear()} Odwa Mtatambi. All rights reserved.
                </p>
            </div>
        </footer>
    );
}