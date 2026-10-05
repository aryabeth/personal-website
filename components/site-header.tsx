import ThemeSwitch from "@/components/theme-switch";

const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
    return (
        <header className="fixed top-0 inset-x-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-md dark:border-gray-800/70 dark:bg-gray-950/80">
            <nav className="flex flex-wrap items-center justify-between gap-y-1 w-full max-w-4xl mx-auto px-4 py-2 sm:h-14 sm:py-0">
                <a href="#top" className="order-1 font-semibold uppercase text-base text-gray-800 dark:text-gray-100">
                    Aryabeth
                </a>
                <ul className="order-3 sm:order-2 w-full sm:w-auto sm:ml-auto flex items-center justify-center gap-4 md:gap-7 text-[13px] md:text-sm text-gray-500 dark:text-gray-400">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="hover:text-gray-800 transition dark:hover:text-gray-100">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="order-2 sm:order-3 flex sm:ml-6">
                    <ThemeSwitch />
                </div>
            </nav>
        </header>
    );
}
