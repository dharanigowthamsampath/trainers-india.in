import { SpeedInsights } from "@vercel/speed-insights/next";
import NaviagtionMenu from "@/components/nav-menu";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="w-full h-full flex justify-center">
          <div className="w-[1280px]">
            <div className="flex flex-col w-full h-full">
              <NaviagtionMenu />
              <SpeedInsights />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
