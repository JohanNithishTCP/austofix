import Navbar from "@/app/_components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import SmoothAOS from "@/app/_components/SmoothAOS";
import { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});
export const metadata: Metadata = {
  title: "Austofix",
  description:
    "Austofix delivers advanced medical and clean room solutions with high precision and quality.",
  icons: {
    icon: "/austofixImages/austofix.png",
  },
};
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
