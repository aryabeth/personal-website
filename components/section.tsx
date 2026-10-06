import { cn } from "@/lib/utils";

interface Props {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export default function Section({ title, children, className }: Props) {
    return (
        <section id={title.toLowerCase()} className={cn("flex flex-col md:flex-row items-center justify-center md:items-start gap-8 w-full max-w-4xl mx-auto mt-28", className)}>
            <p className="text-xl text-center md:text-left md:text-lg font-medium pt-3 w-full md:max-w-42">{title}</p>
            {children}
        </section>
    );
}