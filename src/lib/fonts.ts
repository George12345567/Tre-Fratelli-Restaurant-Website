import { Montserrat, Playfair_Display } from "next/font/google";

// Downloaded at build time and served locally. Only regular, Latin variable fonts.
export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-playfair",
  display: "swap",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-montserrat",
  display: "swap",
});
