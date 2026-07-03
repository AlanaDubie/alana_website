import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden bg-background">
      <video autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-96"
      >
        <source src="assets/HeroVideo.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,hsl(var(--background)/0)_0%,hsl(var(--background)/0.08)_30%,hsl(var(--background)/0.3)_60%,hsl(var(--background)/0.7)_90%,hsl(var(--background)/1)_100%)]" />

      <div className="relative z-10 min-h-screen flex flex-col justify-end pb-24 md:pb-28 px-6 md:px-16">
        <div className="container max-w-8xl mx-auto w-full">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
            <h1 className="t-hero text-left lg:font-extralight md:font-light sm:font-light font-normal">
              Alana<br />
              Dubie
            </h1>

            <div className="lg:pb-3 lg:max-w-xs text-left">
              {/* eyebrow = section label tier */}
              <p className="eyebrow mb-5">Technical Artist</p>
              {/* caption-text = metadata tier */}
              <p className="caption-text">Games &amp; Animation</p>
            </div>
          </div>

          <div className="mt-10 h-px bg-primary/12" />
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