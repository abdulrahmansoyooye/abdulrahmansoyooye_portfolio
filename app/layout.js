import { Titillium_Web, Bree_Serif, DM_Sans, Inika, Aleo } from "next/font/google";
import "./globals.css";

const titillium_Web = Aleo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],

  display: "swap",
  variable: "--font-tillium",
});
export const bree_Serif = Inika({
  subsets: ["latin"],
  weight: ["400", "700"],

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
