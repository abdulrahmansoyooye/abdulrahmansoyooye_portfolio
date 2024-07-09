import { Titillium_Web, Bree_Serif, DM_Sans } from "next/font/google";
import "./globals.css";

const titillium_Web = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],

  display: "swap",
  variable: "--font-tillium",
});
export const bree_Serif = Bree_Serif({
  subsets: ["latin"],
  weight: ["400"],

  display: "swap",
  variable: "--font-serif",
});
export const metadata = {
  title: "Soyoye Abdulrahman",
  description: "Full stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${titillium_Web.variable} ${bree_Serif.variable} `}>
        <main>{children}</main>
      </body>
    </html>
  );
}
