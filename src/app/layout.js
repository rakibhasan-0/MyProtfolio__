import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rakib's Portfolio",
  description: "Rakib's Portfolio and Blog",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`h-full ${inter.className}`}>
        <div className="flex flex-col min-h-screen overflow-hidden text-neutral-300 antialiased selection:bg-cyan-200 selection:text-cyan-600">
          {children}
          <div className="fixed inset-0 z-[-1] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
      </body>
    </html>
  );
}

