import MediaCarousel from "../../components/MediaCarousel";

const heroMedia = [
  {
    type: "videoFile",
    src: "assets/projects/tropical_plants/palm_turnaround.mp4",
    thumb: "assets/projects/tropical_plants/card_img_plant_tool.png",
  },
  { type: "image", src: "assets/projects/tropical_plants/palm_render.png" },
  { type: "video", src: "https://www.youtube.com/embed/bwpmfcf_J-U?rel=0&modestbranding=1" },
  { type: "image", src: "assets/projects/tropical_plants/palm_ex_full.png" },
  { type: "image", src: "assets/projects/tropical_plants/lp_render.png" },
  { type: "video", src: "https://www.youtube.com/embed/sLKzQJxow_0?rel=0&modestbranding=1" },
  { type: "image", src: "assets/projects/tropical_plants/lp_ex_full.png" },
];

const ParamTable = ({ params }) => (
  <div className="border border-primary/10 rounded-md overflow-hidden bg-card mb-4">
    {params.map(([name, desc], i) => (
      <div
        key={name}
        className={`flex items-baseline gap-4 px-4 py-3 hover:bg-primary/5 transition-colors ${
          i !== 0 ? "border-t border-primary/10" : ""
        }`}
      >
        <span className="font-mono text-xs text-primary/90 shrink-0 w-44">{name}</span>
        <span className="text-foreground/70 text-xs">{desc}</span>
      </div>
    ))}
  </div>
);

const JumpNav = () => (
  <nav className="flex flex-wrap gap-2 mb-10">
    {[
      ["#results",   "Results"],
      ["#refs",      "References"],
      ["#palm",      "Palm Tool"],
      ["#layered",   "Layered Plant"],
      ["#materials", "Materials"],
    ].map(([href, label]) => (
      <a
        key={href}
        href={href}
        className="font-mono text-[10px] tracking-[0.25em] uppercase border border-primary/10 rounded-sm px-3 py-1.5 text-foreground/50 hover:text-primary hover:border-primary/40 transition-colors"
      >
        {label}
      </a>
    ))}
  </nav>
);

/* ── Reusable 3-top / 2-bottom editorial grid ─────────────────────────────
───────────────────────────────────────────────────────────────────────── */
const EditorialGrid = ({ images, alt = "" }) => {
  const top = images.slice(0, 3);
  const bottom = images.slice(3, 5);
  return (
    <div className="flex flex-col gap-1">

      {/* Top row — 3 equal 4:3 columns */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
        {top.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${alt} ${i + 1}`}
            className="w-full object-cover border border-primary/10"
            style={{
              aspectRatio: "4/3",
              borderRadius: i === 0 ? "4px 0 0 0" : i === 2 ? "0 4px 0 0" : "0",
            }}
          />
        ))}
      </div>

      {/* Bottom row — 2 columns, each 16:9, fills full width */}
      {bottom.length > 0 && (
        <div className={`grid gap-1 ${bottom.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}>
          {bottom.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${alt} ${top.length + i + 1}`}
              className="w-full object-cover object-top border border-primary/10"
              style={{
                aspectRatio: "16/11",
                borderRadius:
                  bottom.length === 1
                    ? "0 0 4px 4px"
                    : i === 0
                    ? "0 0 0 4px"
                    : "0 0 4px 0",
              }}
            />
          ))}
        </div>
      )}

    </div>
  );
};

const palmImages = [
  "assets/projects/tropical_plants/palm_section/palm_ex1.png",
  "assets/projects/tropical_plants/palm_section/palm_ex2.png",
  "assets/projects/tropical_plants/palm_section/palm_ex3.png",
  "assets/projects/tropical_plants/palm_section/palm_ex4.png",
  "assets/projects/tropical_plants/palm_section/palm_ex5.png",
];

const layeredImages = [
  "assets/projects/tropical_plants/layered_plant_section/lp_ex1.png",
  "assets/projects/tropical_plants/layered_plant_section/lp_ex2.png",
  "assets/projects/tropical_plants/layered_plant_section/lp_ex3.png",
  "assets/projects/tropical_plants/layered_plant_section/lp_ex4.png",
  "assets/projects/tropical_plants/layered_plant_section/lp_ex5.png",
];

export const TropicalPlantsPage = () => (
  <div className="mx-auto max-w-8xl text-left text-foreground overflow-x-hidden">

    {/* ── HERO ── */}
    <MediaCarousel items={heroMedia} />

    <div className="pt-6 container max-w-5xl mx-auto">

      {/* ── TITLE BLOCK ── */}
      <span className="eyebrow">
        Procedural · SOPS · COPs
      </span>
      <h1 className="text-foreground text-6xl font-serif font-light mt-2 mb-4">
        Tropical Plants
      </h1>
      <p className="text-foreground/60 text-base leading-relaxed mb-3 max-w-2xl">
        Two artist-friendly procedural vegetation tools built in Houdini, inspired by the
        stylized environments of Kingdom Hearts. The goal was to be able to generate a wide range of tropical
        plant variants through parameters alone, without going back to model everything from scratch.
      </p>
      <p className="text-foreground/40 text-xs font-mono uppercase tracking-widest mb-8">
        Tools:
        <span className="text-foreground/70 font-mono text-xs border border-primary/20 rounded-sm px-2 py-1 ml-2 tracking-wide normal-case">
          Houdini
        </span>
      </p>

      <JumpNav />

      {/* ══════════════════════════════════════════
          01 — PROCEDURAL RESULTS
      ══════════════════════════════════════════ */}
      <section id="results" className="mb-14 scroll-mt-8">
        <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-foreground/40">
          Procedural Results
        </span>
        <h2 className="text-3xl font-serif font-light mt-2 mb-4">Generated Plant Designs</h2>
        <p className="text-foreground/70 text-sm leading-relaxed mb-6 max-w-2xl">
          All the variations below come from just the two tools with no manual modeling involved. Tweaking things like seed, bend angle,
          leaf count, color ramp, and layer configuration is enough to get to a completely different looking plant.
          It made exploring plant designs feel fast and genuinely fun!
        </p>

        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/30 block mb-3">
          Palm Tree Tool
        </span>
        <EditorialGrid images={palmImages} alt="Palm variation" />

        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/30 block mb-3 mt-8">
          Layered Plant Tool
        </span>
        <EditorialGrid images={layeredImages} alt="Layered plant variation" />

        <p className="text-xs font-light text-foreground/40 italic mt-3">
          Variations of scatter seed, leaf count, bend angle, color ramp, and layer configuration.
        </p>
      </section>

      <hr className="border-primary/10 mb-14" />

      {/* ══════════════════════════════════════════
          CONCEPT & REFERENCES
      ══════════════════════════════════════════ */}
      <section id="refs" className="mb-14 scroll-mt-8">
        <span className="eyebrow">
          Inspiration
        </span>
        <h2 className="text-3xl font-serif font-light mt-2 mb-5">Concept & References</h2>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 items-start">
          <div className="text-foreground/70 text-sm leading-relaxed space-y-4">
            <p>
              The plants in Kingdom Hearts have simple silhouettes and vibrant colors reminiscent of Disney's 2D animations,
              giving the environments a feel like they were painted in <span className="shimmer-text">watercolor</span>.
            </p>
            <p>
              I pulled references from Destiny Islands to understand the art direction and grounded each plant in real tropical forms (palms, banana leaves)
              to make sure the shapes stayed accurate underneath the stylization. I focused on capturing leaf shape, frond
              bends, and bark structure based on real world forms.
            </p>
          </div>
          <img
            src="assets/projects/tropical_plants/references.png"
            className="w-full rounded-md border border-primary/10"
            alt="References"
          />
        </div>
      </section>

      <hr className="border-primary/10 mb-14" />

      {/* ══════════════════════════════════════════
          TOOL OVERVIEW CARDS
      ══════════════════════════════════════════ */}
      <section className="mb-14">
        <span className="eyebrow">
          Overview
        </span>
        <h2 className="text-3xl font-serif font-light mt-2 mb-5">The Two Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="#palm"
            className="group border border-primary/10 rounded-md p-5 bg-card hover:border-primary/30 transition-colors"
          >
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary/60 block mb-2">Tool 01</span>
            <h3 className="text-lg font-serif font-normal mb-2 group-hover:text-primary/90 transition-colors">
              Palm Tree Tool
            </h3>
            <div className="text-foreground/60 text-xs leading-relaxed">
              <p>Used for creating palm tree models.</p>
              <p>Provides control over trunk shape, leaf distribution, bend, and branch scatter. Structured as three sub-networks that merge at output.</p>
            </div>
          </a>
          <a
            href="#layered"
            className="group border border-primary/10 rounded-md p-5 bg-card hover:border-primary/30 transition-colors"
          >
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary/60 block mb-2">Tool 02</span>
            <h3 className="text-lg font-serif font-normal mb-2 group-hover:text-primary/90 transition-colors">
              Layered Plant Tool
            </h3>
            <div className="text-foreground/60 text-xs leading-relaxed">
              <p>Used for creating flowers and multi-leaf plants.</p>
              <p>Built using two leaf layers and a stem with independent control over shape, curvature, color, and rotation.</p>
            </div>
          </a>
        </div>
      </section>

      <hr className="border-primary/10 mb-14" />

      {/* ══════════════════════════════════════════
          PALM TREE PROCEDURAL
      ══════════════════════════════════════════ */}
      <section id="palm" className="mb-14 scroll-mt-8">
        <span className="eyebrow">
          Tool 01
        </span>
        <h2 className="text-3xl font-serif font-light mt-2 mb-5">Palm Tree Procedural</h2>
        <div className="text-foreground/70 text-sm leading-relaxed mb-8 space-y-3 max-w-2xl">
          <p>
            I broke the tool into three sections:{" "}
            <strong className="text-foreground/90 font-medium">trunk, leaves, and branches</strong>.
            Each one is its own sub-network and all merge at the end. Keeping everything
            separated made it easier to iterate on individual parts without affecting the rest,
            and made both tools more manageable to control through parameters.
          </p>
        </div>

        <div className="w-full aspect-video mb-8">
          <iframe
            src="https://www.youtube.com/embed/bwpmfcf_J-U?rel=0&modestbranding=1&controls=1"
            title="Palm Tree Tool Demo"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-md border border-primary/10"
          />
        </div>

        <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-foreground/40">SOP Network</span>
        <img
          src="assets/projects/tropical_plants/palm_section/palm_sop.png"
          className="w-xl rounded-md border border-primary/10 mt-3 mb-2"
          alt="Palm SOP network"
        />
        <p className="text-xs font-light text-foreground/40 italic mb-10">
          Full network. Green = leaf shape, tan = stem, dark yellow = palm trunk. Everything merges at the bottom before output.
        </p>

        <h3 className="text-lg font-serif font-normal mb-3">Trunk</h3>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start mb-10">
          <div>
            <div className="text-foreground/70 text-sm leading-relaxed mb-4 space-y-2">
              <p>
                The trunk starts as a curve that defines the overall shape, which is then swept
                into a tube. I flatten the UVs before subdivision so the bark texture doesn't
                stretch when the curve is deformed. After that, I use noise to
                break up the surface and add variation.
              </p>
            </div>
            <ParamTable params={[
              ["thickness", "controls the overall width of the trunk"],
            ]} />
          </div>
          <img
            src="assets/projects/tropical_plants/palm_section/trunk_sop.png"
            className="rounded-md border border-primary/10 w-36 shrink-0"
            alt="Trunk SOP"
          />
        </div>

        <h3 className="text-lg font-serif font-normal mb-3">Leaves</h3>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start mb-10">
          <div>
            <div className="text-foreground/70 text-sm leading-relaxed mb-4 space-y-2">
              <p>
                The leaf and stem are built separately, then merged. Two bend nodes control
                the main droop and side-to-side curl independently. A match size node keeps
                proportions consistent so changing branch length doesn't throw off the overall look.
              </p>
            </div>
            <ParamTable params={[
              ["leaves count", "how many leaves are generated"],
              ["bend angle",   "controls how upright or droopy the leaves are"],
              ["width",        "individual leaf width"],
              ["length",       "individual leaf length"],
              ["scatter seed", "randomizes placement"],
            ]} />
          </div>
          <img
            src="assets/projects/tropical_plants/palm_section/leaves_sop.png"
            className="rounded-md border border-primary/10 w-36 shrink-0"
            alt="Leaves SOP"
          />
        </div>

        <h3 className="text-lg font-serif font-normal mb-3">Branches</h3>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start mb-10">
          <div>
            <p className="text-foreground/70 text-sm leading-relaxed mb-4">
              Generated in the stem network using a sweep, then combined with the leaves.
            </p>
            <ParamTable params={[
              ["branch thickness", "thickness of each stem"],
              ["branch length",    "how far the stems extend from the trunk"],
              ["branch angle",     "how the stems fan out from the trunk"],
            ]} />
          </div>
          <img
            src="assets/projects/tropical_plants/palm_section/branch_sop.png"
            className="rounded-md border border-primary/10 w-36 shrink-0"
            alt="Branch SOP"
          />
        </div>
      </section>

      <hr className="border-primary/10 mb-14" />

      {/* ══════════════════════════════════════════
          LAYERED PLANT PROCEDURAL
      ══════════════════════════════════════════ */}
      <section id="layered" className="mb-14 scroll-mt-8">
        <span className="eyebrow">
          Tool 02
        </span>
        <h2 className="text-3xl font-serif font-light mt-2 mb-5">Layered Plant Procedural</h2>
        <div className="text-foreground/70 text-sm leading-relaxed mb-8 space-y-3 max-w-2xl">
          <p>
            This one is built around multiple leaf layers and a stem, all independently controlled or toggleable.
            I focused on giving as much control over each leaf layer (shape,
            curvature, color, and rotation) so a wide range of unique plant designs.
          </p>
        </div>

        <div className="w-full aspect-video mb-8">
          <iframe
            src="https://www.youtube.com/embed/sLKzQJxow_0?rel=0&modestbranding=1&controls=1"
            title="Layered Plant Tool Demo"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-md border border-primary/10"
          />
        </div>

        <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-foreground/40">SOP Network</span>
        <img
          src="assets/projects/tropical_plants/layered_plant_section/lp_sop.png"
          className="w-full rounded-md border border-primary/10 mt-3 mb-2"
          alt="Layered plant SOP network"
        />
        <p className="text-xs font-light text-foreground/40 italic mb-10">
          Top leaves layer (left), bottom leaves layer (center), stem (right).
        </p>

        <h3 className="text-lg font-serif font-normal mb-3">Leaf Layers (Top and Bottom)</h3>
        <div className="text-foreground/70 text-sm leading-relaxed mb-6 space-y-2 max-w-2xl">
          <p>
            Both layers use the same setup. Two bend nodes control curvature in different directions to help shape the leaves and petals.
            Noise is kept toward the center to avoid distorting the edges too much. Color is handled per layer,
            and the top layer can be turned off if needed.
          </p>
        </div>

        <h4 className="text-sm font-serif font-normal text-foreground mb-2">Bend</h4>
        <ParamTable params={[
          ["leaves bend (x direction)", "curvature along the x axis"],
          ["leaves bend (y direction)", "curvature along the y axis"],
        ]} />

        <h4 className="text-sm font-serif font-normal text-foreground mb-2">Scaling</h4>
        <ParamTable params={[
          ["leaf count",     "how many petals in the layer"],
          ["leaf width",     "width of each petal"],
          ["plant scale",    "uniform scale of the full layer"],
          ["leaf angle",     "how open or closed the flower looks"],
          ["plant rotation", "rotates the layer — offset top and bottom so petals don't stack directly on each other"],
        ]} />

        <h4 className="text-sm font-serif font-normal text-foreground mb-2">Coloring</h4>
        <ParamTable params={[
          ["hue shift",          "shifts the layer hue"],
          ["brightness",         "overall brightness"],
          ["saturation",         "color saturation"],
          ["leaves texture",     "blends in the texture map"],
          ["color pattern type", "radial or other modes — drives center-to-edge gradient on petals"],
          ["color ramp",         "fully editable ramp with B-spline interpolation"],
        ]} />

        <img
          src="assets/projects/tropical_plants/layered_plant_section/lp_leaves.png"
          className="w-4xl rounded-md border border-primary/10 mt-2 mb-10"
          alt="Leaf layer network"
        />

        <h3 className="text-lg font-serif font-normal mb-3">Stem</h3>
        <div className="text-foreground/70 text-sm leading-relaxed mb-4 space-y-2 max-w-2xl">
          <p>
            Built in its own sub-network and toggleable. A sort node is used to find the top point of
            the plant and a blast node isolates it so the stem always connects at the correct
            position (regardless of how the plant is transformed). Noise is added at the end
            for surface variation.
          </p>
        </div>
        <ParamTable params={[
          ["stem length",    "length of the stem"],
          ["stem thickness", "thickness of swept tube"],
          ["branch angle",   "how much the stem curves"],
        ]} />
        <img
          src="assets/projects/tropical_plants/layered_plant_section/lp_stem.png"
          className="w-xl rounded-md border border-primary/10 mt-4 mb-10"
          alt="Stem network"
        />
      </section>

      <hr className="border-primary/10 mb-14" />

      {/* ══════════════════════════════════════════
          COPS MATERIAL
      ══════════════════════════════════════════ */}
      <section id="materials" className="mb-14 scroll-mt-8">
        <span className="eyebrow">
          03
        </span>
        <h2 className="text-3xl font-serif font-light mt-2 mb-5">COPs Material</h2>
        <div className="text-foreground/70 text-sm leading-relaxed mb-8 space-y-3 max-w-2xl">
          <p>All PBR maps were built procedurally inside Houdini COPs.</p>
          <p>
            One of the main advantages of this approach is that textures stay fully tied to
            the geometry (so if the model changes, re-cooking the network updates the textures
            automatically!)
          </p>
          <p>
            I used this as an opportunity to build a full PBR workflow from scratch and really
            understand how each map contributes to the final look.
          </p>
        </div>

        <h3 className="text-lg font-serif font-normal mb-4">Leaves Material</h3>
        <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-foreground/40">Base Color — 2 variants</span>
        <img src="assets/projects/tropical_plants/cops_section/cops_leaves_base.png" className="w-full rounded-md border border-primary/10 mt-3 mb-6" alt="Leaves base color" />
        <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-foreground/40">Roughness · Normal · Opacity</span>
        <img src="assets/projects/tropical_plants/cops_section/cops_leaves_rno.png" className="w-full rounded-md border border-primary/10 mt-3 mb-10" alt="Leaves roughness normal opacity" />

        <h3 className="text-lg font-serif font-normal mb-4">Trunk Material</h3>
        <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-foreground/40">Base Color</span>
        <img src="assets/projects/tropical_plants/cops_section/cops_trunk_base.png" className="w-full rounded-md border border-primary/10 mt-3 mb-6" alt="Trunk base color" />
        <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-foreground/40">Roughness</span>
        <img src="assets/projects/tropical_plants/cops_section/cops_trunk_rough.png" className="w-full rounded-md border border-primary/10 mt-3 mb-6" alt="Trunk roughness" />
        <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-foreground/40">Normal</span>
        <img src="assets/projects/tropical_plants/cops_section/cops_trunk_normal.png" className="w-xl rounded-md border border-primary/10 mt-3 mb-8" alt="Trunk normal" />
      </section>

    </div>
  </div>
);