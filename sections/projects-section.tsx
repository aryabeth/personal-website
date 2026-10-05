import Section from "@/components/section";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";

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
            <div className="grid sm:grid-cols-2 gap-4 w-full">
                {projects.map((project) => (
                    <div key={project.title} className="flex flex-col hover:-translate-y-0.5 transition duration-300 border border-gray-200 rounded-xl overflow-hidden dark:border-gray-800">
                        {project.image && (
                            <Image
                                className="w-full aspect-video object-cover border-b border-gray-200 dark:border-gray-800"
                                src={project.image}
                                alt={`${project.title} website`}
                                width={640}
                                height={360}
                            />
                        )}
                        <div className="flex flex-col flex-1 p-5">
                            <div className="flex items-start justify-between gap-3">
                                <h3 className="text-base font-medium">
                                    {project.title}
                                </h3>
                                <span className="shrink-0 text-gray-500 pt-0.5 dark:text-gray-400">{project.year}</span>
                            </div>
                            <ul className="flex flex-wrap gap-1.5 mt-2">
                                {project.stack.map((tech) => (
                                    <li key={tech} className="border border-gray-200 text-gray-600 text-xs rounded-full px-2.5 py-0.5 dark:border-gray-700 dark:text-gray-300">
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                            {project.agency && (
                                <p className="mt-3 text-gray-500 dark:text-gray-400">
                                    Built at <span className="font-medium text-gray-800 dark:text-gray-100">{project.agency}</span>
                                </p>
                            )}
                            <dl className="mt-3 space-y-1.5 text-gray-500 dark:text-gray-400">
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
                                    className="group inline-flex items-center gap-1 mt-auto pt-4 font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                                >
                                    View live site
                                    <ArrowUpRightIcon className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
