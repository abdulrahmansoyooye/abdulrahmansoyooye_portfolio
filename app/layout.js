import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const gorteskfont = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],

  display: "swap",
});

export const metadata = {
  title: "Soyoye Abdulrahman",
  description: "Full stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gorteskfont.className}  antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
