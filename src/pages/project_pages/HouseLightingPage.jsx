import MediaCarousel from "../../components/MediaCarousel";
import { cld } from "../../lib/cloudinary";

/* ── Media ──────────────────────────────────────────────────────────────── */
const heroMedia = [
  { type: "image", src: cld("card_img_house_light.png", { quality: "showcase" }) },
  { type: "image", src: cld("1fb2041b-bfec-4142-8f3b-978911154e90_rw_1200", { quality: "showcase" }) },
];

/* ── Page ───────────────────────────────────────────────────────────────── */

export const HouseLightingPage = () => (
  <div className="mx-auto max-w-8xl text-left text-foreground overflow-x-hidden">
    <MediaCarousel items={heroMedia} />

    <div className="container pt-6 max-w-5xl px-4 mx-auto">
      <span className="eyebrow">3D</span>
      <h1 className="t-hero text-7xl mt-2 mb-4">House Lighting</h1>
      <p className="eyebrow text-foreground/70 mb-8 normal-case">
        Tools:
        <span className="eyebrow normal-case text-foreground/70 border border-primary/20 rounded-sm px-2 py-1 ml-2">
          Maya
        </span>
        <span className="eyebrow normal-case text-foreground/70 border border-primary/20 rounded-sm px-2 py-1 ml-2">
          Arnold
        </span>
      </p>

      <p className="t-body text-foreground mb-14">
        A series of 3D lighting studies completed under the mentorship of
        Francesco Furneri, focused on developing a strong foundation in
        Arnold rendering. Each scene explores how light, color, and shadow
        can define mood, atmosphere, and environment.
      </p>

            <p className="t-body mb-14">
         Models assembled from Quixel Megascans.
       </p>
    </div>
  </div>
);