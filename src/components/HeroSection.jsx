import { ChevronDown } from "lucide-react";
import { cldVideo } from "../lib/cloudinary";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden bg-background">
      <video autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-96"
      >
        <source src={cldVideo("HeroVideo", { quality: "showcase" })} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,hsl(var(--background)/0)_40%,hsl(var(--background)/0.1)_50%,hsl(var(--background)/0.25)_60%,hsl(var(--background)/0.6)_85%,hsl(var(--background)/1)_100%)]" />

      <div className="relative z-10 min-h-screen flex flex-col justify-end pb-24 md:pb-28 px-6 md:px-16">
        <div className="container max-w-8xl mx-auto w-full text-left">

          <h1 className="t-hero text-left lg:font-extralight md:font-light sm:font-light font-normal">
            Alana<br />Dubie
          </h1>

          <div className="mt-6 mb-10">
            <p className="eyebrow">Software Engineer · Tools Developer · Technical Artist</p>
          </div>

          <div className="h-px bg-primary/12" />
        </div>
      </div>

      <a href="#projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/35 hover:text-primary transition-colors z-10"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
};