import MediaCarousel from "../../components/MediaCarousel";
import { EditorialGrid } from "../../components/EditorialGrid";
import { cld } from "../../lib/cloudinary";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import cpp from "react-syntax-highlighter/dist/esm/languages/hljs/cpp";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

SyntaxHighlighter.registerLanguage("cpp", cpp);

const CodeBlock = ({ code }) => (
    <SyntaxHighlighter
        language="cpp"
        style={atomOneDark}
        showLineNumbers
        customStyle={{
            borderRadius: "4px",
            fontSize: "1rem",
            lineHeight: "1.55",
            padding: "1.25rem 1.5rem",
            marginTop: "0.75rem",
            marginBottom: "2.5rem",
            fontFamily: "'JetBrains Mono', monospace",
            border: "1px solid rgba(255,255,255,0.06)",
        }}
        lineNumberStyle={{
            color: "rgba(255,255,255,0.18)",
            minWidth: "2.5em",
            paddingRight: "1.5em",
            userSelect: "none",
        }}
    >
        {code}
    </SyntaxHighlighter>
);

/* ── Media ──────────────────────────────────────────────────────────────── */
const heroMedia = [
    { type: "image", src: cld("card_img_macromoss", { quality: "original" }) },
    { type: "image", src: cld("render1", { quality: "original" }) },
    { type: "image", src: cld("moss_concept", { quality: "original" }) },
    { type: "image", src: cld("preview1", { quality: "original" }) },


];
const networkComparison = [
    cld("wirefram1", { quality: "original", width: 700 }),
    cld("wirefram2", { quality: "original", width: 700 }),
];

/* ── Page ───────────────────────────────────────────────────────────────── */

export const MacroMossPage = () => (
    <div className="mx-auto max-w-8xl text-left text-foreground overflow-x-hidden">
        <MediaCarousel items={heroMedia} />

        <div className="container pt-6 max-w-5xl px-4 mx-auto">
            <span className="eyebrow">Procedural</span>
            <h1 className="t-hero text-7xl mt-2 mb-4">Macro Moss</h1>
            <p className="eyebrow text-foreground/70 mb-8 normal-case">
                Tools:
                <span className="eyebrow normal-case text-foreground/70 border border-primary/20 rounded-sm px-2 py-1 ml-2">
                    Houdini
                </span>
            </p>

            <p className="t-body text-foreground mb-14">
                In this project, I explored Houdini's workflow and delved into VEX
                scripting. The goal was to craft a detailed procedural of the
                Comatricha Nigra, a type of slime mold, receiving valuable guidance
                from my mentor Albert Szostkiewicz during the Women in Animation
                Mentorship. HDRI and log asset imported from Megascans.
            </p>

            <div className="h-px bg-primary/10 mt-6 mb-14" />

            {/* ── References ── */}
            <section id="refs" className="mb-14 scroll-mt-8">
                <h2 className="t-h1 mb-5">References</h2>

                <div className="grid grid-cols-2 gap-3 mb-3">
                    {networkComparison.map((src) => (
                        <img
                            key={src}
                            src={src}
                            className="w-full rounded-sm border border-primary/10"
                            alt="Wireframe render"
                            loading="lazy"
                            decoding="async"
                        />
                    ))}
                </div>
                <img
                    src={cld("preview1", { width: 1400 })}
                    className="w-full rounded-sm border border-primary/10 mt-3"
                    alt="Rendered web detail"
                    loading="lazy"
                    decoding="async"
                />
                <p className="caption-text mt-3 normal-case text-foreground/40 mb-10">
                    Wireframe passes and rendered web detail, alongside the moodboard
                    below.
                </p>

                <img
                    src={cld("moss_concept", { width: 1400 })}
                    className="w-full rounded-sm border border-primary/10"
                    alt="Comatricha Nigra reference moodboard"
                    loading="lazy"
                    decoding="async"
                />
                <p className="caption-text mt-3 normal-case text-foreground/40 mb-10">
                    MacroMoss — Comatricha Nigra references.
                </p>
            </section>

            <hr className="border-primary/10 mb-14" />

            {/* ── 1. Stem Creation ── */}
            <section id="stem-creation" className="mb-14 scroll-mt-8">
                <span className="eyebrow">01</span>
                <h2 className="t-h1 mt-2 mb-5">Stem Creation</h2>
                <p className="t-body mb-8">
                    Started off with a polywire and used a scatter node to distribute
                    points across the log's geometry.
                </p>

                <span className="eyebrow block">Node Network</span>
                <img
                    src={cld("stem_node", { width: 500 })}
                    className="w-sm rounded-sm border border-primary/10 mt-3 mb-10"
                    alt="Stem shape and color network"
                    loading="lazy"
                    decoding="async"
                />

                <span className="eyebrow block">Thickness & Shape</span>
                <CodeBlock
                    code={`f@trunk_r = chf("Stem_Trunk_Radius");
f@tip_r = chf("Stem_Tip_Radius");

// random thickness multiplier to each stem
float ramp_position = fit(float(@ptnum), 0, @numpt, 0, 1);
float mult = chramp("Stem_Shape_Thickness", ramp_position);

// stem shape (thinner top, thicker bottom)
float ramp_vector = 1 - v@uv.x;
f@width = fit01(chramp("Stem_Shape", ramp_vector), f@tip_r, f@trunk_r) * mult;`}
                />

                <p className="t-body mb-4">
                    Implemented a variable thickness multiplier for each stem,
                    allowing customization through a ramp with different position
                    values. The thickness value is then multiplied, which also allows
                    control over the overall shape and thickness of the stems.
                </p>
                <p className="t-body mb-10">
                    The overall shape of the stem, extending from its top to bottom
                    trunk, can be modified through a ramp of varying position values.
                    The curve of the stem is formed by defining two points on the
                    ramp (the first representing the tip, and the second the trunk)
                    and applying B-spline interpolation.
                </p>

                <img
                    src={cld("stem_slider", { width: 800 })}
                    className="w-lg rounded-sm border border-primary/10 mt-3 mb-10"
                    alt="Stem shape and color network"
                    loading="lazy"
                    decoding="async"
                />

                <img
                    src={cld("stem_slider2", { width: 800 })}
                    className="w-lg rounded-sm border border-primary/10 mt-3 mb-10"
                    alt="Stem shape and color network"
                    loading="lazy"
                    decoding="async"
                />

                <h3 className="t-h2 mb-3">Color</h3>
                <p className="t-body mb-4">
                    Used a ramp to create a color gradient transition in the stem.
                </p>
                <span className="eyebrow block">Stem Color Ramp</span>
                <CodeBlock code={`v@Cd = chramp("Stem_Color_Ramp", v@uv.x);`} />

                <img
                    src={cld("color_ramp", { width: 800 })}
                    className="w-lg rounded-sm border border-primary/10 mt-3 mb-10"
                    alt="Stem shape and color network"
                    loading="lazy"
                    decoding="async"
                />

                <h3 className="t-h2 mb-3">Vector</h3>
                <p className="t-body mb-4">
                    Determining the vector along the stem helps us obtain specific
                    values to locate points on the stem's upper section. These
                    derived values are then used for positioning the head on the
                    stem.
                </p>
                <img
                    src={cld("vector_node", { width: 500 })}
                    className="w-sm rounded-sm border border-primary/10 mt-3 mb-10"
                    alt="Locates top point of stem's vector network"
                    loading="lazy"
                    decoding="async"
                />

                <h3 className="t-h2 mb-3">Length Randomization</h3>
                <p className="t-body mb-4">
                    Randomizes stem lengths and adjusts individual point sizes on
                    stems using a ramp, with each point's scale influenced by random
                    values.
                </p>
                <img
                    src={cld("stem_length", { width: 500 })}
                    className="w-xl rounded-sm border border-primary/10 mt-3"
                    alt="Stem length ramp"
                    loading="lazy"
                    decoding="async"
                />
            </section>

            <hr className="border-primary/10 mb-14" />

            {/* ── 2. Head Creation ── */}
            <section id="head-creation" className="mb-14 scroll-mt-8">
                <span className="eyebrow">02</span>
                <h2 className="t-h1 mt-2 mb-5">Head Creation</h2>
                <p className="t-body mb-8">
                    Started with a spherical shape and introduced variations in head
                    size using a ramp with several value points. Applied the mountain
                    node to create noise on the head's surface.
                </p>

                <span className="eyebrow block">Head Size Randomization</span>
                <CodeBlock code={`f@pscale = chramp("remap", rand(@ptnum));`} />

                <img
                    src={cld("head_slider", { width: 500 })}
                    className="w-sm rounded-sm border border-primary/10 mt-3"
                    alt="Head shape network"
                    loading="lazy"
                    decoding="async"
                />
            </section>

            <hr className="border-primary/10 mb-14" />

            {/* ── 3. Web Creation ── */}
            <section id="web-creation" className="mb-14 scroll-mt-8">
                <span className="eyebrow">03</span>
                <h2 className="t-h1 mt-2 mb-5">Web Creation</h2>
                <p className="t-body mb-4">
                    Used attribute wrangles to identify the log and stem mesh, as
                    these areas serve as the connection points for the web.
                </p>
                <p className="t-body mb-8">
                    Assigned a density attribute to the log asset for web creation,
                    connecting adjacent pieces to establish points. Webs are later
                    shaped and smoothed using fuse and smooth nodes, then polywired.
                </p>

                <img
                    src={cld("web_node", { width: 800 })}
                    className="w-sm rounded-sm border border-primary/10"
                    alt="Web creation network"
                    loading="lazy"
                    decoding="async"
                />
            </section>
        </div>
    </div>
);