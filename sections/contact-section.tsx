import Section from "@/components/section";

export default function ContactSection() {
    const contacts = [
        { label: "Email", value: "aryabwidyatmika@gmail.com", href: "mailto:aryabwidyatmika@gmail.com" },
        { label: "Phone", value: "+62 831-1428-5234", href: "http://wa.me/6283114285234" },
        { label: "LinkedIn", value: "linkedin.com/in/aryabeth", href: "https://www.linkedin.com/in/aryabeth" },
        { label: "Location", value: "Badung, Bali, Indonesia" },
    ];

    return (
        <Section title="Contact">
            <table className="table-auto mr-auto">
                <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact.label}>
                            <td className="pr-4 py-2">{contact.label}:</td>
                            <td className="py-2 text-gray-500 dark:text-gray-400">
                                {contact.href ? (
                                    <a href={contact.href} target="_blank" className="hover:text-gray-800 transition dark:hover:text-gray-100">
                                        {contact.value}
                                    </a>
                                ) : (
                                    contact.value
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Section>
    );
}
