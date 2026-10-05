import Section from "@/components/section";

export default function SkillsSection() {
    const skills = [
        "WordPress",
        "Shopify",
        "Next.js",
        "Webflow",
        "Tailwind",
        "Payload",
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "PHP",
        "CodeIgniter",
        "MySQL",
        "Figma",
        "Adobe XD",
        "Performance optimisation",
        "SEO",
        "Git",
    ];

    return (
        <Section title="Skills">
            <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                    <p key={skill} className="border cursor-default border-gray-300 hover:bg-gray-100/70 text-gray-600 text-[13px] rounded-full px-5 py-1.5">
                        {skill}
                    </p>
                ))}
            </div>
        </Section>
    );
}
