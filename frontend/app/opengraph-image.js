import { ImageResponse } from "next/og";

export const alt = "Mơ Kitchen — Bánh tươi và những món ngon lành";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "72px",
        background: "#fff8f1",
        color: "#423a39",
        fontFamily: "serif"
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", maxWidth: "680px" }}>
        <div style={{ fontSize: 32, color: "#c77869", letterSpacing: "8px" }}>BẾP NHỎ · NIỀM VUI TO</div>
        <div style={{ fontSize: 88, lineHeight: 1.12, marginTop: 32 }}>Mơ Kitchen</div>
        <div style={{ fontSize: 34, lineHeight: 1.5, color: "#817875", marginTop: 24 }}>
          Bánh tươi, cà phê và những món ngon lành mỗi ngày.
        </div>
      </div>
      <div
        style={{
          width: 280,
          height: 280,
          borderRadius: 160,
          background: "#f4d9d0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 150
        }}
      >
        🥐
      </div>
    </div>,
    size
  );
}
