import Section from "@/components/section";
import { TiltCard } from "@/components/ui/be-ui-tilt-card";
import { ArrowUpRightIcon } from "lucide-react";

interface Project {
    title: string;
    year: string;
    stack: string[];
    /** What you personally did on the project. */
    role: string;
    /** Who else worked on it, e.g. "Design by Kesato design team". */
    team?: string;
    /** Agency or company the project was built at. */
    agency?: string;
    /** Public live site. */
    url?: string;
    /** Screenshot in /public, e.g. "/assets/projects/villa-seminyak.png" (16:9). */
    image?: string;
}

export default function ProjectsSection() {
    const projects: Project[] = [
        // Template for Kesato work — copy, fill in, and uncomment:
        // {
        //     title: "Client Name",
        //     year: "2024",
        //     stack: ["WordPress", "Custom theme"],
        //     agency: "Kesato & Co Digital Agency",
        //     role: "Front-end & WordPress development, performance optimisation",
        //     team: "Design by Kesato design team, project management by Kesato",
        //     url: "https://example.com",
        //     image: "/assets/projects/client-name.png",
        // },
        {
            title: "Hospital Management System (SIMRS)",
            year: "2015 – 2016",
            stack: ["CodeIgniter", "PHP", "MySQL"],
            role: "Freelance developer for Datu Rantau Hospital",
        },
        {
            title: "Futsal Court Booking",
            year: "2015 – 2016",
            stack: ["PHP", "MySQL", "JavaScript", "CodeIgniter"],
            role: "Full-stack developer as Freelance",
        },
        {
            title: "UKDW Online Voting",
            year: "2015 – 2016",
            stack: ["PHP", "MySQL", "CodeIgniter"],
            role: "Developer of the online voting system for the FTI & BEMU UKDW student elections",
        },
        {
            title: "Course Recommendation System",
            year: "2016",
            stack: ["CodeIgniter", "JavaScript", "PHP"],
            role: "Thesis project using genetic algorithms and constraint satisfaction",
        },
    ];

    return (
        <Section title="Projects">
            <div className="space-y-6 w-full">
                {projects.map((project) => (
                    <TiltCard key={project.title} max={6} className="w-full border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900/60">
                        <div className="flex items-start justify-between gap-3">
                            <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">{project.title}</h3>
                            <span className="shrink-0 text-gray-500 dark:text-gray-400">{project.year}</span>
                        </div>
                        <ul className="flex flex-wrap gap-1.5 mt-3">
                            {project.stack.map((tech) => (
                                <li key={tech} className="border border-gray-200 text-gray-600 text-xs rounded-full px-2.5 py-0.5 dark:border-gray-700 dark:text-gray-300">
                                    {tech}
                                </li>
                            ))}
                        </ul>
                        <dl className="mt-4 space-y-1.5 text-gray-500 dark:text-gray-400">
                            {project.agency && (
                                <div>
                                    <dt className="inline font-medium text-gray-800 dark:text-gray-100">Built at: </dt>
                                    <dd className="inline">{project.agency}</dd>
                                </div>
                            )}
                            <div>
                                <dt className="inline font-medium text-gray-800 dark:text-gray-100">My role: </dt>
                                <dd className="inline">{project.role}</dd>
                            </div>
                            {project.team && (
                                <div>
                                    <dt className="inline font-medium text-gray-800 dark:text-gray-100">Team: </dt>
                                    <dd className="inline">{project.team}</dd>
                                </div>
                            )}
                        </dl>
                        {project.url && (
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-1 mt-4 font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                            >
                                View live site
                                <ArrowUpRightIcon className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        )}
                    </TiltCard>
                ))}
            </div>
        </Section>
    );
}
