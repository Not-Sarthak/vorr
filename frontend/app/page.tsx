import Image from "next/image";
import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { How } from "@/components/sections/how";
import { AboutDesktop } from "@/components/sections/about-desktop";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <div>
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-20">
        <Navbar />
      </div>
      <div id="hero" className="h-[100vh] relative">
        <video
          src="/small-video.mp4"
          autoPlay
          muted
          loop
          className="h-full object-cover absolute -top-20 md:top-0 left-0 -z-10 lg:hidden flex"
        />
        <video
          src="/rotate.mp4"
          autoPlay
          muted
          loop
          className="w-full aspect-video object-cover absolute -top-20 md:top-0 left-0 -z-10 hidden lg:flex"
        />
        <div className="relative z-10">
          <Hero />
        </div>
        <div className="absolute bottom-20 right-32 hidden lg:flex">
          <Image src="/logo.svg" alt="vorr-logo" width={100} height={100} />
        </div>
      </div>
      <div id="about" className="lg:hidden">
        <About />
      </div>
      <div id="about" className="hidden lg:flex lg:flex-col">
        <AboutDesktop />
      </div>
      <div id="how">
        <How />
      </div>
      <Footer />
    </div>
  );
}
