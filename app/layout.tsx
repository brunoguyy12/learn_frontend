// import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
// import { Navbar } from "@/components/ShadcnNavbar";
import Navbar from "@/components/Navbar";
import ClientOnly from "@/components/ClientOnly";
import MenuComponent from "@/components/MenuComponent";

// const inter = Inter({ subsets: ["latin"] });
// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["900", "800", "400", "100"],
// });
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tamasa Consulting",
  description: "The Best Agricultural Consulting Firm in Kenya",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` text-black 
        bg-no-repeat bg-cover bg-opacity-30`}
      >
        {/* <ClientOnly>
          <Navbar />
        </ClientOnly> */}
        {children}
      </body>
    </html>
  );
}
