import localFont from "next/font/local";

export const futura = localFont({
  src: [
    { path: "./fonts/FuturaPTLight.otf", weight: "300", style: "normal" },
    { path: "./fonts/FuturaPTLightOblique.otf", weight: "300", style: "italic" },
    { path: "./fonts/FuturaPTBook.otf", weight: "400", style: "normal" },
    { path: "./fonts/FuturaPTBookOblique.otf", weight: "400", style: "italic" },
    { path: "./fonts/FuturaPTMedium.otf", weight: "500", style: "normal" },
    { path: "./fonts/FuturaPTMediumOblique.otf", weight: "500", style: "italic" },
    { path: "./fonts/FuturaPTDemi.otf", weight: "600", style: "normal" },
    { path: "./fonts/FuturaPTDemiOblique.otf", weight: "600", style: "italic" },
    { path: "./fonts/FuturaPTBold.otf", weight: "700", style: "normal" },
    { path: "./fonts/FuturaPTBoldOblique.otf", weight: "700", style: "italic" },
    { path: "./fonts/FuturaPTExtraBold.otf", weight: "800", style: "normal" },
    { path: "./fonts/FuturaPTExtraBoldOblique.otf", weight: "800", style: "italic" },
    { path: "./fonts/FuturaPTHeavy.otf", weight: "900", style: "normal" },
    { path: "./fonts/FuturaPTHeavyOblique.otf", weight: "900", style: "italic" }
  ],
  variable: "--font-futura",
  display: "swap",
});

export const coveredByGrace = localFont({
  src: "./fonts/CoveredByYourGrace-Regular.ttf",
  variable: "--font-covered",
  display: "swap",
});
