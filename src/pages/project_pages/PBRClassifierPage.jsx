import MediaCarousel from "../../components/MediaCarousel";
import { cld, cldVideo, cldThumb } from "../../lib/cloudinary";

/* ── Media ──────────────────────────────────────────────────────────────── */
const heroMedia = [
  {
    type: "videoFile",
    src: cldVideo("ml_demo", { quality: "original" }),
    thumb: cldThumb("ml_demo"),
  },
  { type: "image", src: cld("ml_render1", { quality: "original" }) },

  { type: "image", src: cld("ml_render3", { quality: "original" }) },


];


/* ── Page ───────────────────────────────────────────────────────────────── */

export const PBRClassifierPage = () => (
  <div className="mx-auto max-w-8xl text-left text-foreground overflow-x-hidden">
    <MediaCarousel items={heroMedia} />

    <div className="container pt-6 max-w-5xl px-4 mx-auto">
      <span className="eyebrow">Coding · ML · Pipeline</span>
      <h1 className="t-hero text-7xl mt-2 mb-4">PBR Material Classifier</h1>
      <p className="eyebrow text-foreground/70 mb-8 normal-case">
        Tools:
        <span className="eyebrow normal-case text-foreground/70 border border-primary/20 rounded-sm px-2 py-1 ml-2">
          Maya
        </span>
        <span className="eyebrow normal-case text-foreground/70 border border-primary/20 rounded-sm px-2 py-1 ml-2">
          Python
        </span>
        <span className="eyebrow normal-case text-foreground/70 border border-primary/20 rounded-sm px-2 py-1 ml-2">
          PyTorch
        </span>
        <span className="eyebrow normal-case text-foreground/70 border border-primary/20 rounded-sm px-2 py-1 ml-2">
          PySide6
        </span>
      </p>

      <p className="t-body text-foreground mb-8">
        VFX, animation, and game pipelines manage thousands of PBR textures
        and materials, often imported with inconsistent naming, missing
        metadata, or no organization at all. I built a Maya pipeline tool
        that automates this: it traverses shading networks to extract full
        material texture sets, classifies each one with a lightweight CNN
        trained in PyTorch, and publishes the results into structured,
        production-ready asset folders.
      </p>

      <a
        href="https://github.com/AlanaDubie/pbr-ml-classifier"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-14 eyebrow normal-case border border-primary/20 rounded-sm px-4 py-2 text-primary/70 hover:text-primary hover:border-primary/50 transition-colors inline-flex items-center gap-2"
      >
        View on GitHub
      </a>

      <div className="h-px bg-primary/10 mt-6 mb-14" />

      <p className="mb-14">More coming soon!</p>


    </div>
  </div>
);