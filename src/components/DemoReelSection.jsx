import { cldVideo } from "../lib/cloudinary";

export const DemoReelSection = () => {
  return (
    <section id="reel" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-8xl">

        <p className="eyebrow text-center mb-3">Demo Reel</p>
        <h2 className="t-h1 text-center mb-12">A Quick Look</h2>

        <div className="max-w-5xl mx-auto">
          <div className="relative w-full rounded-sm overflow-hidden border border-primary/10 shadow-lg shadow-background" style={{ aspectRatio: "16/9" }}>
            <video
              src={cldVideo("HeroVideo", { quality: "showcase" })}
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
            />
          </div>
        </div>

      </div>
    </section>
  );
};