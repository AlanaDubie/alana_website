import MediaCarousel from "../../components/MediaCarousel";
import { cld } from "../../lib/cloudinary";

/* ── Media ──────────────────────────────────────────────────────────────── */
const heroMedia = [
  { type: "image", src: cld("v1783456119/c6f1406a-9583-4d90-9658-53e0c7c16a86_rw_1200", { quality: "showcase" }) },
  { type: "image", src: cld("v1783456114/de18ce29-53a6-4c27-a8ca-0fdf6fb4c705_rw_1200", { quality: "showcase" }) },
  { type: "image", src: cld("card_img_outside_dining", { quality: "showcase" }) },
  { type: "image", src: cld("4e369eec-aa72-4679-8910-815bc430f6a5_rw_1200", { quality: "showcase" }) },

];

/* ── Page ───────────────────────────────────────────────────────────────── */

export const OutsideDinePage = () => (
  <div className="mx-auto max-w-8xl text-left text-foreground overflow-x-hidden">
    <MediaCarousel items={heroMedia} />

    <div className="container pt-6 max-w-5xl px-4 mx-auto">
      <span className="eyebrow">3D</span>
      <h1 className="t-hero text-7xl mt-2 mb-4">Outside Dining</h1>
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
        An outdoor 3D environment study rendered in Maya using Arnold,
        exploring natural lighting conditions and physically-based
        texturing through Maya's shading network.
      </p>

      <p className="t-body mb-14">
         Models assembled from Quixel Megascans.
       </p>
    </div>
  </div>
);