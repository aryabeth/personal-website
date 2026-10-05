import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
    const photo = await readFile(join(process.cwd(), "public/assets/user-image.jpeg"));
    const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 64,
                    padding: "0 96px",
                    background: "linear-gradient(135deg, #ffffff 0%, #eef2ff 100%)",
                    fontFamily: "sans-serif",
                }}
            >
                <img
                    src={photoSrc}
                    width={280}
                    height={280}
                    style={{ borderRadius: 9999, objectFit: "cover", border: "8px solid #fff" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: 64, fontWeight: 700, color: "#111827", lineHeight: 1.1 }}>
                        {site.name}
                    </div>
                    <div style={{ fontSize: 36, color: "#4f46e5", marginTop: 20 }}>
                        Web Developer · Bali, Indonesia
                    </div>
                    <div style={{ fontSize: 26, color: "#6b7280", marginTop: 28 }}>
                        WordPress · Shopify · Next.js · PHP
                    </div>
                    <div style={{ fontSize: 24, color: "#9ca3af", marginTop: 40 }}>
                        aryabeth.com
                    </div>
                </div>
            </div>
        ),
        size
    );
}
