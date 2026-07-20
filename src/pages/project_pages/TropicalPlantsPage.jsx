import MediaCarousel from "../../components/MediaCarousel";
import { ParamTable } from "../../components/ParamTable";
import { EditorialGrid } from "../../components/EditorialGrid";
import { cld, cldVideo } from "../../lib/cloudinary";

/* ── Media ──────────────────────────────────────────────────────────────── */
const heroMedia = [
  {
    type: "videoFile",
    src: cldVideo("palm_turnaround", { quality: "original" }),
    thumb: cld("card_img_plant_tool.png", { width: 300 }),
  },
  { type: "image", src: cld("palm_render.png", { quality: "original" }) },
  {
    type: "video",
    src: "https://www.youtube.com/embed/bwpmfcf_J-U?rel=0&modestbranding=1",
  },
  { type: "image", src: cld("palm_ex_full.png", { quality: "original" }) },
  { type: "image", src: cld("lp_render.png", { quality: "showcase" }) },
  {
    type: "video",
    src: "https://www.youtube.com/embed/sLKzQJxow_0?rel=0&modestbranding=1",
  },
  { type: "image", src: cld("lp_ex_full.png", { quality: "showcase" }) },
];

const palmImages = [
  cld("palm_ex1.png", { quality: "original", width: 500 }),
  cld("palm_ex2.png", { quality: "original", width: 500 }),
  cld("palm_ex3.png", { quality: "original", width: 500 }),
  cld("palm_ex4.png", { quality: "original", width: 500 }),
  cld("palm_ex5.png", { quality: "original", width: 500 }),
];

const layeredImages = [
  cld("lp_ex1.png", { quality: "original", width: 500 }),
  cld("lp_ex2.png", { quality: "original", width: 500 }),
  cld("lp_ex3.png", { quality: "original", width: 500 }),
  cld("lp_ex4.png", { quality: "original", width: 500 }),
  cld("lp_ex5.png", { quality: "original", width: 500 }),
];

/* ── Page ───────────────────────────────────────────────────────────────── */

export const TropicalPlantsPage = () => (
  <div className="mx-auto max-w-8xl text-left text-foreground overflow-x-hidden">
    <MediaCarousel items={heroMedia} />

    <div className="container pt-6 max-w-5xl px-4 mx-auto">
      <span className="eyebrow">Procedural · SOPs · COPs</span>
      <h1 className="t-hero text-7xl mt-2 mb-4">Tropical Plants</h1>
      <p className="eyebrow text-foreground/70 mb-8 normal-case">
        Tools:
        <span className="eyebrow normal-case text-foreground/70 border border-primary/20 rounded-sm px-2 py-1 ml-2">
          Houdini
        </span>
      </p>

      <p className="t-body text-foreground mb-14">
        Two artist-friendly procedural vegetation tools built in Houdini,
        inspired by the stylized environments of Kingdom Hearts. The goal was to
        generate a wide range of tropical plant variants through parameters
        alone, without going back to model everything from scratch.
      </p>

      <div className="h-px bg-primary/10 mt-6 mb-14" />

      {/* ── Generated Plant Designs ── */}
      <section id="results" className="mb-14 scroll-mt-8">
        <h2 className="t-h1 mb-4">Generated Plant Designs</h2>
        <p className="t-body mb-6">
          All variations below come from the{" "}
          <a
            href="#palm"
            className="font-semibold underline hover:text-primary transition-colors"
          >
            Palm Tree Tool
          </a>{" "}
          and{" "}
          <a
            href="#layered"
            className="font-semibold underline hover:text-primary transition-colors"
          >
            Layered Plant Tool
          </a>
          . Designs are made by tweaking seed, bend angle, leaf count, color
          ramp, and layer configurations.
        </p>
        <span className="eyebrow block mb-3">Palm Tree Tool</span>
        <EditorialGrid images={palmImages} alt="Palm variation" />

        <span className="eyebrow block mb-3 mt-8">Layered Plant Tool</span>
        <EditorialGrid images={layeredImages} alt="Layered plant variation" />

        <p className="caption-text mt-3 normal-case text-foreground/40">
          Variations of scatter seed, leaf count, bend angle, color ramp, and
          layer configuration.
        </p>
      </section>

      <hr className="border-primary/10 mb-14" />

      {/* ── Concept & References ── */}
      <section id="refs" className="mb-14 scroll-mt-8">
        <h2 className="t-h1 mb-5">Concept & References</h2>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 items-start">
          <div className="space-y-4">
            <p className="t-body">
              The plants in Kingdom Hearts have simple silhouettes and vibrant
              colors reminiscent of Disney's 2D animations, giving the
              environments a feel like they were painted in watercolor.
            </p>
            <p className="t-body">
              I pulled references from Destiny Islands to understand the art
              direction and grounded each plant in real tropical forms (palms,
              banana leaves) to make sure the shapes stayed accurate underneath
              the stylization.
            </p>
          </div>
          <img
            src={cld("references.png", { width: 800 })}
            className="w-full rounded-sm border border-primary/10"
            alt="References"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <hr className="border-primary/10 mb-14" />

      {/* ── Palm Tree Tool ── */}
      <section id="palm" className="mb-14 scroll-mt-8">
        <span className="eyebrow">Tool 01</span>
        <h2 className="t-h1 mt-2 mb-5">Palm Tree Procedural</h2>
        <p className="t-body mb-8">
          I broke the tool into three sections:{" "}
          <strong className="text-foreground/90 font-medium">
            trunk, leaves, and branches
          </strong>
          . Each is its own sub-network that merges at the end, making it easy
          to iterate on individual parts without affecting the rest.
        </p>

        <div className="w-full aspect-video mb-8">
          <iframe
            src="https://www.youtube.com/embed/bwpmfcf_J-U?rel=0&modestbranding=1&controls=1"
            title="Palm Tree Tool Demo"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-sm border border-primary/10"
          />
        </div>

        <span className="eyebrow block">SOP Network</span>
        <img
          src={cld("palm_sop.png", { width: 700 })}
          className="w-xl rounded-sm border border-primary/10 mt-3 mb-2"
          alt="Palm SOP network"
          loading="lazy"
          decoding="async"
        />
        <p className="caption-text normal-case text-foreground/40 mb-10">
          Green = leaf shape, tan = stem, dark yellow = palm trunk. Everything
          merges at the bottom before output.
        </p>

        {[
          {
            title: "Trunk",
            body: "The trunk starts as a curve that defines the overall shape, swept into a tube. UVs are flattened before subdivision so the bark texture doesn't stretch when the curve is deformed. Noise breaks up the surface afterward.",
            img: cld("trunk_sop.png", { width: 300 }),
            alt: "Trunk SOP",
            params: [["thickness", "controls the overall width of the trunk"]],
          },
          {
            title: "Leaves",
            body: "The leaf and stem are built separately, then merged. Two bend nodes control the main droop and side-to-side curl independently. A match size node keeps proportions consistent when branch length changes.",
            img: cld("leaves_sop.png", { width: 300 }),
            alt: "Leaves SOP",
            params: [
              ["leaves count", "how many leaves are generated"],
              ["bend angle", "controls how upright or droopy the leaves are"],
              ["width", "individual leaf width"],
              ["length", "individual leaf length"],
              ["scatter seed", "randomizes placement"],
            ],
          },
          {
            title: "Branches",
            body: "Generated in the stem network using a sweep, then combined with the leaves.",
            img: cld("branch_sop.png", { width: 300 }),
            alt: "Branch SOP",
            params: [
              ["branch thickness", "thickness of each stem"],
              ["branch length", "how far the stems extend from the trunk"],
              ["branch angle", "how the stems fan out from the trunk"],
            ],
          },
        ].map(({ title, body, img, alt, params }) => (
          <div
            key={title}
            className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start mb-10"
          >
            <div>
              <h3 className="t-h2 mb-3">{title}</h3>
              <p className="t-body mb-4">{body}</p>
              <ParamTable params={params} />
            </div>
            <img
              src={img}
              alt={alt}
              loading="lazy"
              decoding="async"
              className="rounded-sm border border-primary/10 w-36 shrink-0"
            />
          </div>
        ))}
      </section>

      <hr className="border-primary/10 mb-14" />

      {/* ── Layered Plant Tool ── */}
      <section id="layered" className="mb-14 scroll-mt-8">
        <span className="eyebrow">Tool 02</span>
        <h2 className="t-h1 mt-2 mb-5">Layered Plant Procedural</h2>
        <p className="t-body mb-8">
          Built around multiple leaf layers and a stem, all independently
          controlled or toggleable. Each layer has full control over shape,
          curvature, color, and rotation, enabling a wide range of plant designs
          from one tool.
        </p>

        <div className="w-full aspect-video mb-8">
          <iframe
            src="https://www.youtube.com/embed/sLKzQJxow_0?rel=0&modestbranding=1&controls=1"
            title="Layered Plant Tool Demo"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-sm border border-primary/10"
          />
        </div>

        <span className="eyebrow block">SOP Network</span>
        <img
          src={cld("lp_sop.png", { quality: "original", width: 900 })}
          className="w-full rounded-sm border border-primary/10 mt-3 mb-2"
          alt="Layered plant SOP network"
          loading="lazy"
          decoding="async"
        />
        <p className="caption-text normal-case text-foreground/40 mb-10">
          Top leaves layer (left), bottom leaves layer (center), stem (right).
        </p>

        <h3 className="t-h2 mb-3">Leaf Layers (Top and Bottom)</h3>
        <p className="t-body mb-6">
          Both layers use the same setup. Two bend nodes control curvature in
          different directions. Noise is kept toward the center to avoid
          distorting the edges. Color is handled per layer, and the top layer
          can be toggled off.
        </p>

        {[
          {
            heading: "Bend",
            params: [
              ["leaves bend (x direction)", "curvature along the x axis"],
              ["leaves bend (y direction)", "curvature along the y axis"],
            ],
          },
          {
            heading: "Scaling",
            params: [
              ["leaf count", "how many petals in the layer"],
              ["leaf width", "width of each petal"],
              ["plant scale", "uniform scale of the full layer"],
              ["leaf angle", "how open or closed the flower looks"],
              [
                "plant rotation",
                "rotates the layer — offset top and bottom so petals don't stack directly",
              ],
            ],
          },
          {
            heading: "Coloring",
            params: [
              ["hue shift", "shifts the layer hue"],
              ["brightness", "overall brightness"],
              ["saturation", "color saturation"],
              ["leaves texture", "blends in the texture map"],
              [
                "color pattern type",
                "radial or other modes — drives center-to-edge gradient on petals",
              ],
              ["color ramp", "fully editable ramp with B-spline interpolation"],
            ],
          },
        ].map(({ heading, params }) => (
          <div key={heading}>
            <h4 className="eyebrow normal-case text-foreground mb-2">
              {heading}
            </h4>
            <ParamTable params={params} />
          </div>
        ))}

        <img
          src={cld("lp_leaves.png", { width: 1000 })}
          className="w-4xl rounded-sm border border-primary/10 mt-2 mb-10"
          alt="Leaf layer network"
          loading="lazy"
          decoding="async"
        />

        <h3 className="t-h2 mb-3">Stem</h3>
        <p className="t-body mb-4">
          Built in its own sub-network and toggleable. A sort node finds the top
          point of the plant and a blast node isolates it so the stem always
          connects at the correct position regardless of transform. Noise is
          added at the end for surface variation.
        </p>
        <ParamTable
          params={[
            ["stem length", "length of the stem"],
            ["stem thickness", "thickness of swept tube"],
            ["branch angle", "how much the stem curves"],
          ]}
        />
        <img
          src={cld("lp_stem.png", { width: 700 })}
          className="w-xl rounded-sm border border-primary/10 mt-4 mb-10"
          alt="Stem network"
          loading="lazy"
          decoding="async"
        />
      </section>

      <hr className="border-primary/10 mb-14" />

      {/* ── COPs Material ── */}
      <section id="materials" className="mb-14 scroll-mt-8">
        <span className="eyebrow">03</span>
        <h2 className="t-h1 mt-2 mb-5">COPs Material</h2>
        <div className="space-y-3 mb-8">
          <p className="t-body">
            All PBR maps were built procedurally inside Houdini COPs.
          </p>
          <p className="t-body">
            The main advantage of this approach is that textures stay tied to
            the geometry — if the model changes, re-cooking the network updates
            them automatically.
          </p>
          <p className="t-body">
            I used this as an opportunity to build a full PBR workflow from
            scratch and really understand how each map contributes to the final
            look.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="t-h2 mb-4">Leaves Material</h3>

          <div className="mb-6">
            <span className="eyebrow block">Base Color — 2 variants</span>
            <img
              src={cld("cops_leaves_base.png", { quality: "original" })}
              alt="Leaves base color"
              className="w-full rounded-sm border border-primary/10 mt-3"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="mb-6">
            <span className="eyebrow block">Roughness · Normal · Opacity</span>
            <img
              src={cld("cops_leaves_rno.png", { quality: "original" })}
              alt="Leaves roughness normal opacity"
              className="w-full rounded-sm border border-primary/10 mt-3"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="mb-10">
          <h3 className="t-h2 mb-4">Trunk Material</h3>

          <div className="mb-6">
            <span className="eyebrow block">Base Color</span>
            <img
              src={cld("cops_trunk_base.png", { quality: "original" })}
              alt="Trunk base color"
              className="w-full rounded-sm border border-primary/10 mt-3"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="mb-6">
            <span className="eyebrow block">Roughness</span>
            <img
              src={cld("cops_trunk_rough.png", { quality: "original" })}
              alt="Trunk roughness"
              className="w-full rounded-sm border border-primary/10 mt-3"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="mb-6">
            <span className="eyebrow block">Normal</span>
            <img
              src={cld("cops_trunk_normal.png", { quality: "original" })}
              alt="Trunk normal"
              className="w-xl rounded-sm border border-primary/10 mt-3"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
);
