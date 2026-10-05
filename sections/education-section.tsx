import Section from "@/components/section";
import Image from "next/image";

export default function EducationSection() {
    const education = [
        {
            degree: "Bachelor of Technology, Informatics Engineering",
            school: "Duta Wacana Christian University",
            start: "2012",
            end: "2016",
            description: "Thesis: course-taking recommendation system using genetic algorithms and constraint satisfaction (CodeIgniter, JavaScript).",
        },
        {
            degree: "Vocational High School, Software Engineering (RPL)",
            school: "SMK N 1 Denpasar",
            start: "2009",
            end: "2012",
        },
    ];

    return (
        <Section title="Education">
            <div className="space-y-6 w-full">
                {education.map((item) => (
                    <div key={item.school} className="w-full border border-gray-200 p-6 rounded-xl dark:border-gray-800">
                        <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500 dark:text-gray-400">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 dark:bg-gray-900 dark:border-gray-800">
                                    <Image
                                        src="/assets/education-image-1.png"
                                        alt="Education"
                                        width={25}
                                        height={25}
                                        className="size-5.5 dark:brightness-0 dark:invert"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                                        {item.degree}
                                    </h3>
                                    <div>{item.school}</div>
                                </div>
                            </div>
                            <div className="shrink-0">{item.start} - {item.end}</div>
                        </div>
                        {item.description && (
                            <p className="mt-6 text-gray-500 dark:text-gray-400">{item.description}</p>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
}
