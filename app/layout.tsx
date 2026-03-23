import Navbar from "@/components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import SmoothAOS from "@/components/SmoothAOS";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={poppins.className}>
        <Navbar />
        <SmoothAOS />
        {children}
      </body>
    </html>
  );
}
