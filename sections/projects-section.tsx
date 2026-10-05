import Section from "@/components/section";

export default function ProjectsSection() {
    const projects = [
        {
            title: "Hospital Management System (SIMRS)",
            description: "Hospital management information system for Datu Rantau Hospital, built with CodeIgniter.",
        },
        {
            title: "Futsal Court Booking",
            description: "Full-stack booking platform for futsal courts.",
        },
        {
            title: "UKDW Online Voting",
            description: "Online voting system for the FTI & BEMU UKDW student elections.",
        },
        {
            title: "Course Recommendation System",
            description: "Thesis project using genetic algorithms and constraint satisfaction (CodeIgniter, JavaScript).",
        },
    ];

    return (
        <Section title="Projects">
            <div className="grid sm:grid-cols-2 gap-4 w-full">
                {projects.map((project) => (
                    <div key={project.title} className="hover:-translate-y-0.5 transition duration-300 border border-gray-200 rounded-xl p-5">
                        <h3 className="text-base font-medium">
                            {project.title}
                        </h3>
                        <p className="text-gray-500 mt-1">
                            {project.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
