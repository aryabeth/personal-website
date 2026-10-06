import Section from "@/components/section";
import { TiltCard } from "@/components/ui/be-ui-tilt-card";
import Image from "next/image";

export default function EducationSection() {
    const education = [
        {
            degree: "Bachelor of Technology, Informatics Engineering",
            school: "Duta Wacana Christian University",
            logo: "/assets/duta-wacana-logo.png",
            start: "2012",
            end: "2016",
            description: "Thesis: course-taking recommendation system using genetic algorithms and constraint satisfaction (CodeIgniter, JavaScript).",
        },
        {
            degree: "Vocational High School, Software Engineering (RPL)",
            school: "SMK N 1 Denpasar",
            logo: "/assets/smkn1-denpasar-logo.png",
            start: "2009",
            end: "2012",
        },
    ];

    return (
        <Section title="Education">
            <div className="space-y-6 w-full">
                {education.map((item) => (
                    <TiltCard key={item.school} max={6} className="w-full border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900/60">
                        <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500 dark:text-gray-400">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                {/* Logos are full-colour on white, so the tile stays white in dark mode too. */}
                                <div className="bg-white border border-gray-200 rounded-lg p-1 dark:border-gray-700">
                                    <Image src={item.logo} alt={`${item.school} logo`} width={80} height={80} className="size-10 object-contain" />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">{item.degree}</h3>
                                    <div>{item.school}</div>
                                </div>
                            </div>
                            <div className="shrink-0">{item.start} – {item.end}</div>
                        </div>
                        {item.description && <p className="mt-6 text-gray-500 dark:text-gray-400">{item.description}</p>}
                    </TiltCard>
                ))}
            </div>
        </Section>
    );
}
