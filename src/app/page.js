import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Technology } from "./components/Technology";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
   <main>
      <div className = "container mx-auto px-8">
        <Navbar />
        <Hero/>
        <Technology/>
        <Projects/>
      </div>  
   </main>
  );
}
