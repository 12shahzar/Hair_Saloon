import localFont from "next/font/local";

export const futura = localFont({
  src: [
    {
      path: "./fonts/FuturaCyrillicBook.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/FuturaCyrillicBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-futura",
  display: "swap",
});

export const coveredByGrace = localFont({
  src: "./fonts/CoveredByYourGrace-Regular.ttf",
  variable: "--font-covered",
  display: "swap",
});
