import appConfig from "@/lib/config";
import { ImageResponse } from "next/og";

export const alt = "AgroTree Ledger";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const fontData = await fetch(
    "https://kcaxhjlvvpenmyrfonpc.supabase.co/storage/v1/object/public/fonts/SansPosterBold.ttf"
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "row",
          flexWrap: "nowrap",
          backgroundColor: "#083624",
          fontFamily: "SansPosterBold",
          color: "white",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "left",
            flex: "1",
            padding: "24px",
          }}
        >
          <div tw="flex overflow-hidden bg-white shadow-md w-[450px] h-[450px] rounded-lg justify-center">
            <div tw="flex justify-center overflow-hidden rounded-lg p-4">
              <div tw="flex w-full items-center justify-center rounded-lg bg-gray-100">
                <img
                  // src={`${appConfig.appBaseUrl}/brand/logo-dark.png`}
                  src={
                    "https://kcaxhjlvvpenmyrfonpc.supabase.co/storage/v1/object/public/assets/logo-dark.png"
                  }
                  alt={"logo"}
                  width={450}
                  height={450}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            flex: "1",
            padding: "24px",
          }}
        >
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            {appConfig.appTitle}
          </h2>
          <p
            style={{
              fontSize: "18px",
              marginBottom: "40px",
              lineHeight: "1.5",
            }}
          >
            {appConfig.appDescription}
          </p>
        </div>
      </div>
    ),
    {
      ...size,
      emoji: "twemoji",
      fonts: [
        {
          name: "SansPosterBold",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
