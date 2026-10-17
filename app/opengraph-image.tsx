import { ImageResponse } from "next/og";

export const alt = "Joylyn Gurure | UI/UX & Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#0b192b",
          padding: 80,
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 72,
            height: 72,
            borderRadius: 36,
            background: "#ffffff",
            color: "#0b192b",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 30,
          }}
        >
          JG
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#ff9aa8",
              fontFamily: "sans-serif",
            }}
          >
            Joylyn K. Gurure
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 76,
              lineHeight: 1.08,
              color: "#ffffff",
              maxWidth: 940,
            }}
          >
            Thoughtful interfaces. Better everyday experiences.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              color: "#93a3b8",
              fontFamily: "sans-serif",
            }}
          >
            UI/UX & Frontend Developer · Harare, Zimbabwe
          </div>
        </div>
      </div>
    ),
    size,
  );
}
