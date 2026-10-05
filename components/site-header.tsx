const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
    return (
        <header className="fixed top-0 inset-x-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-md">
            <nav className="flex items-center justify-between w-full max-w-4xl mx-auto h-14 px-4">
                <a href="#top" className="font-semibold text-base text-gray-800">
                    Arya
                </a>
                <ul className="flex items-center gap-4 md:gap-7 text-[13px] md:text-sm text-gray-500">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="hover:text-gray-800 transition">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
