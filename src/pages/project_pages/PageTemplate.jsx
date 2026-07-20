import MediaCarousel from "../../components/MediaCarousel";
import { ParamTable } from "../../components/ParamTable";
import { EditorialGrid } from "../../components/EditorialGrid";
import { cld } from "../../lib/cloudinary";

/* ── Media ──────────────────────────────────────────────────────────────── */
/* Populate with this project's turnaround/renders. Delete entries you don't
   need — carousel works fine with just a couple of images. */

const heroMedia = [
  { type: "image", src: cld("PLACEHOLDER_hero_render.png", { quality: "showcase" }) },
  // { type: "videoFile", src: cldVideo("PLACEHOLDER_turnaround", { quality: "showcase" }), thumb: cld("PLACEHOLDER_thumb.png", { width: 300 }) },
  // { type: "video", src: "https://www.youtube.com/embed/PLACEHOLDER" },
];

/* Example gallery set — EditorialGrid expects 3-5 image URLs */
const galleryImages = [
  cld("PLACEHOLDER_ex1.png", { width: 500 }),
  cld("PLACEHOLDER_ex2.png", { width: 500 }),
  cld("PLACEHOLDER_ex3.png", { width: 500 }),
];

/* ── Page ───────────────────────────────────────────────────────────────── */

export const PageTemplate = () => (
  <div className="mx-auto max-w-8xl text-left text-foreground overflow-x-hidden">

    <MediaCarousel items={heroMedia} />

    <div className="container pt-6 max-w-5xl px-4 mx-auto">

      <span className="eyebrow">Category · Subcategory</span>
      <h1 className="t-hero text-7xl mt-2 mb-4">Title</h1>
      <p className="eyebrow text-foreground/70 mb-8 normal-case">
        Tools:
        <span className="eyebrow normal-case text-foreground/70 border border-primary/20 rounded-sm px-2 py-1 ml-2">
          Houdini
        </span>
        <span className="eyebrow normal-case text-foreground/70 border border-primary/20 rounded-sm px-2 py-1 ml-2">
          Maya
        </span>
      </p>

      <p className="t-body text-foreground mb-14">
        Overview paragraph — what this project is, the goal, and any relevant
        context (mentorship, class, club, etc.).
      </p>

      <div className="h-px bg-primary/10 mt-6 mb-14" />

      {/* ── Results / Gallery ── */}
      <section id="results" className="mb-14 scroll-mt-8">
        <h2 className="t-h1 mb-4">Results</h2>
        <p className="t-body mb-6">
          Short description of what's shown below.
        </p>
        <EditorialGrid images={galleryImages} alt="Variation" />
      </section>

      <hr className="border-primary/10 mb-14" />

      {/* ── Breakdown / Process ── */}
      <section id="breakdown" className="mb-14 scroll-mt-8">
        <span className="eyebrow">Tool 01</span>
        <h2 className="t-h1 mt-2 mb-5">Breakdown Section Title</h2>
        <p className="t-body mb-8">
          Detailed explanation of the technical approach.
        </p>

        <span className="eyebrow block">Network / Diagram</span>
        <img
          src={cld("PLACEHOLDER_network.png", { width: 900 })}
          className="w-full rounded-sm border border-primary/10 mt-3 mb-2"
          alt="Network diagram"
        />
        <p className="caption-text normal-case text-foreground/40 mb-10">
          Caption describing the diagram.
        </p>

        <h3 className="t-h2 mb-3">Sub-section</h3>
        <p className="t-body mb-4">
          Description of a specific part of the system.
        </p>
        <ParamTable
          params={[
            ["parameter name", "what it controls"],
            ["parameter name", "what it controls"],
          ]}
        />
      </section>

    </div>
  </div>
);