import Section from "@/components/section";
import { TiltCard } from "@/components/ui/be-ui-tilt-card";
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
                {experience.map((item) => (
                    <TiltCard key={`${item.company}-${item.start}`} max={6} className="w-full border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900/60">
                        <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500 dark:text-gray-400">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 dark:bg-gray-800 dark:border-gray-700">
                                    <BriefcaseIcon className="size-5.5 text-gray-600 dark:text-gray-300" />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">{item.title}</h3>
                                    <div>{item.company} · {item.location}</div>
                                </div>
                            </div>
                            <div className="shrink-0">{item.start} – {item.end}</div>
                        </div>
                        <ul className="list-disc px-5 mt-6 text-gray-500 space-y-2 dark:text-gray-400">
                            {item.description.map((line) => (
                                <li key={line}>{line}</li>
                            ))}
                        </ul>
                    </TiltCard>
                ))}
            </div>
        </Section>
    );
}
