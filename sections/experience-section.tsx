import Section from "@/components/section";
import { BriefcaseIcon } from "lucide-react";

export default function ExperienceSection() {
    const experience = [
        {
            title: "Web Developer",
            company: "Kesato & Co Digital Agency",
            location: "Bali",
            start: "2020",
            end: "Present",
            description: [
                "Build and launch client websites using WordPress, Shopify and Next.js.",
                "Convert Figma and Adobe XD designs into pixel-accurate, responsive front-ends.",
                "Maintain and optimise live client sites, improving page speed and uptime.",
            ],
        },
        {
            title: "Head of IT Division & Web Developer",
            company: "Total Bali & Api Pacific",
            location: "Bali",
            start: "2016",
            end: "2020",
            description: [
                "Led development and maintenance of a portfolio of 20+ company websites across villa rental, insurance and retail.",
                "Managed the full stack for each site, from hosting and deployment through to front-end updates.",
                "Oversaw office network and internet infrastructure.",
            ],
        },
        {
            title: "Freelance Web Developer",
            company: "Self-employed",
            location: "Yogyakarta",
            start: "2015",
            end: "2016",
            description: [
                "Built a hospital management information system (SIMRS) for Datu Rantau Hospital using CodeIgniter.",
                "Developed a futsal court booking platform as full-stack developer.",
                "Built the online voting system for the FTI & BEMU UKDW student elections.",
            ],
        },
    ];

    return (
        <Section title="Experience">
            <div className="space-y-6 w-full">
                {experience.map((experience) => (
                    <div key={experience.title} className="w-full border border-gray-200 p-6 rounded-xl dark:border-gray-800">
                        <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500 dark:text-gray-400">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 dark:bg-gray-900 dark:border-gray-800">
                                    <BriefcaseIcon className="size-5.5 text-gray-600 dark:text-gray-300" />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                                        {experience.title}
                                    </h3>
                                    <div>{experience.company} · {experience.location}</div>
                                </div>
                            </div>
                            <div className="shrink-0">{experience.start} - {experience.end}</div>
                        </div>
                        <ul className="list-disc px-5 mt-6 text-gray-500 space-y-2 dark:text-gray-400">
                            {experience.description.map((description) => (
                                <li key={description}>{description}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}
