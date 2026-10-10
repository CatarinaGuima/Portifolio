import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Imagem de pré-visualização (WhatsApp, LinkedIn, etc.) no mesmo visual do site
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#09090b",
          backgroundImage:
            "radial-gradient(circle at 88% 12%, rgba(143,0,255,0.55), rgba(9,9,11,0) 55%), radial-gradient(circle at 70% 95%, rgba(0,141,255,0.35), rgba(9,9,11,0) 50%)",
          color: "#fafafa",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 148,
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
          }}
        >
          <span>{site.firstName}</span>
          <span>{site.lastName}</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 38,
          }}
        >
          <span style={{ color: "#a6d3ff", fontWeight: 700 }}>{site.role}</span>
          <span style={{ color: "#a1a1aa" }}>
            {site.url.replace("https://", "")}
          </span>
        </div>
      </div>
    ),
    size,
  );
}
