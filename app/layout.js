import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

import "@/app/_style/globals.css";
import Header from "@/app/_components/Header";
import { Josefin_Sans } from "next/font/google";
import ReservationProvider from "./_components/ReservationProvider";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 antialiased text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 p-8 grid ">
          <ReservationProvider>
            <main className="max-w-7xl mx-auto w-full">{children}</main>
          </ReservationProvider>
        </div>
      </body>
    </html>
  );
}
