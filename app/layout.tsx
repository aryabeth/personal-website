import type { Metadata } from "next";
import { Poppins, Sorts_Mill_Goudy } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/lenis";
import { site } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
    variable: "--font-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const sortsMillGoudy = Sorts_Mill_Goudy({
    variable: "--font-mono",
    subsets: ["latin"],
    weight: ["400"],
});

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: site.title,
    description: site.description,
    keywords: ["web developer", "WordPress developer", "Shopify developer", "Next.js developer", "Bali", "Indonesia"],
    authors: [{ name: site.name, url: site.url }],
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        url: "/",
        siteName: site.name,
        title: site.title,
        description: site.description,
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: site.title,
        description: site.description,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <LenisScroll />
                {children}
                <Analytics />
            </body>
        </html>
    );
}
