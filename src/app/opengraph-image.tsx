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
          background: "#130c26",
          color: "#f1ecff",
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
          <span style={{ color: "#b794ff", fontWeight: 700 }}>{site.role}</span>
          <span style={{ color: "#a89fcb" }}>
            {site.url.replace("https://", "")}
          </span>
        </div>
      </div>
    ),
    size,
  );
}
