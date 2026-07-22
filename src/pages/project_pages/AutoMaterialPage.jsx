import MediaCarousel from "../../components/MediaCarousel";
import { ParamTable } from "../../components/ParamTable";
import { cld, cldVideo, cldThumb } from "../../lib/cloudinary";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import python from "react-syntax-highlighter/dist/esm/languages/hljs/python";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

SyntaxHighlighter.registerLanguage("python", python);

const CodeBlock = ({ code }) => (
  <SyntaxHighlighter
    language="python"
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
  {
    type: "videoFile",
    src: cldVideo("AlanaMatVideo", { quality: "original" }),
    thumb: cldThumb("AlanaMatVideo.png"),
  },
];

/* ── Page ───────────────────────────────────────────────────────────────── */

export const AutoMaterialPage = () => (
  <div className="mx-auto max-w-8xl text-left text-foreground overflow-x-hidden">
    <MediaCarousel items={heroMedia} />

    <div className="container pt-6 max-w-5xl px-4 mx-auto">
      <span className="eyebrow">Procedural · Python · Maya API</span>
      <h1 className="t-hero text-7xl mt-2 mb-4">Auto-Material Tool</h1>
      <p className="eyebrow text-foreground/70 mb-8 normal-case">
        Tools:
        <span className="eyebrow normal-case text-foreground/70 border border-primary/20 rounded-sm px-2 py-1 ml-2">
          Maya
        </span>
        <span className="eyebrow normal-case text-foreground/70 border border-primary/20 rounded-sm px-2 py-1 ml-2">
          Python
        </span>
        <span className="eyebrow normal-case text-foreground/70 border border-primary/20 rounded-sm px-2 py-1 ml-2">
          PySide6
        </span>
      </p>

      <p className="t-body text-foreground mb-8">
        Imported FBX and OBJ assets often come with missing or incomplete
        materials. Rebuilding each shader manually requires creating file
        nodes, connecting textures, setting color spaces, and assigning
        materials one mesh at a time.
        <br /><br />
        I built this Maya tool with Python to automate that workflow. It
        detects PBR maps (base color, normal, roughness) and builds Arnold
        surface materials with the correct color spaces and node
        connections, then automatically assigns them to meshes. A
        keyword-based matching system handles inconsistent naming and shared
        textures. The PySide6 interface allows artists to review, correct,
        and batch-process material assignments.
        <br /><br />
        Built during the ASWF Summer Learning Program while following Dhruv
        Govil's <em className="not-italic font-semibold">Python for Maya:
          Artist-Friendly Programming</em> course.
      </p>

      <a
        href="https://github.com/AlanaDubie/AutoMatLinker"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-14 eyebrow normal-case border border-primary/20 rounded-sm px-4 py-2 text-primary/70 hover:text-primary hover:border-primary/50 transition-colors inline-flex items-center gap-2"
      >
        View on GitHub
      </a>

      <div className="h-px bg-primary/10 mt-6 mb-14" />

      {/* ── 01. Finding Textures ── */}
      <section id="finding-textures" className="mb-14 scroll-mt-8">
        <span className="eyebrow">01</span>
        <h2 className="t-h1 mt-2 mb-5">Finding Textures</h2>
        <p className="t-body mb-4">
          Instead of relying on fixed filenames, each texture type is
          defined once as data: its naming aliases, shader destination,
          color space, and any additional nodes it requires. The tool first
          searches for textures that match the mesh name, then falls back
          to shared textures for assets that reuse the same material.
        </p>
        <p className="t-body mb-4">
          To make the shared search more reliable, each candidate is scored
          by the number of keywords it shares with the mesh name. Rather
          than selecting the first match, the tool picks the texture with
          the highest score.
        </p>

        <span className="eyebrow block">Shared Texture Matching</span>
        <CodeBlock
          code={`def find_shared_texture(self, mesh_name, aliases):
    keywords = mesh_name.split('_')
    best_match = None
    highest_match_count = 0

    for file_name in os.listdir(self.texture_dir):
        if not file_name.startswith("shared_"):
            continue
        if not any(alias in file_name for alias in aliases):
            continue

        match_count = sum(1 for word in keywords if word in file_name)
        if match_count > highest_match_count:
            highest_match_count = match_count
            best_match = file_name

    return os.path.join(self.texture_dir, best_match) if best_match else None`}
        />

        <p className="t-body mb-6">
          Mesh instance suffixes such as{" "}
          <code className="text-primary/80">_01</code> and{" "}
          <code className="text-primary/80">_02</code> are removed before
          matching so duplicated meshes resolve to the same texture set.
        </p>
      </section>

      <hr className="border-primary/10 mb-14" />

      {/* ── 02. Building Materials ── */}
      <section id="building-materials" className="mb-14 scroll-mt-8">
        <span className="eyebrow">02</span>
        <h2 className="t-h1 mt-2 mb-5">Building Materials</h2>
        <p className="t-body mb-4">
          Different texture types require different node networks. Normal
          maps connect through a <code className="text-primary/80">bump2d</code>{" "}
          node in tangent space, roughness maps pass through{" "}
          <code className="text-primary/80">remapValue</code>, and color
          spaces are assigned automatically (<code className="text-primary/80">sRGB</code>{" "}
          for color maps and <code className="text-primary/80">Raw</code>{" "}
          for data maps).
        </p>
        <p className="t-body mb-4">
          Rather than hardcoding this logic, every texture type is described
          in a single configuration. Each entry defines how the texture is
          found and how its node network should be built, making it easy to
          support additional maps and other configurations.
        </p>

        <span className="eyebrow block">Texture Type Configuration</span>
        <CodeBlock
          code={`self.texture_types = {
    "normal": {
        "aliases": ["normal", "nrm"],
        "shaderAttr": "normalCamera",
        "colorSpace": "Raw",
        "outputAttr": "outAlpha",
        "node": "bump2d",
        "nodeInput": "bumpValue",
        "nodeOutput": "outNormal"
    },
    "roughness": {
        "aliases": ["roughness", "rough"],
        "shaderAttr": "specularRoughness",
        "colorSpace": "Raw",
        "outputAttr": "outAlpha",
        "node": "remapValue",
        "nodeInput": "inputValue",
        "nodeOutput": "outValue"
    },
}`}
        />

        <p className="t-body mb-8">
          Every file node is also connected to its own{" "}
          <code className="text-primary/80">place2dTexture</code> node so UV
          tiling and offsets work correctly.
        </p>

        <img
          src={cld("hypershade_node", { width: 1400 })}
          className="w-full rounded-sm border border-primary/10 mt-3 mb-2"
          alt="Hypershade node network"
          loading="lazy"
          decoding="async"
        />
        <p className="caption-text mt-3 normal-case text-foreground/40 mb-10">
          Hypershade view of the chinese_tea_table asset with roughness,
          normal, and albedo nodes connected after using the tool to assign.
        </p>
      </section>

      <hr className="border-primary/10 mb-14" />

      {/* ── 03. Assigning Materials ── */}
      <section id="assigning-materials" className="mb-14 scroll-mt-8">
        <span className="eyebrow">03</span>
        <h2 className="t-h1 mt-2 mb-5">Assigning Materials</h2>
        <p className="t-body mb-4">
          The tool processes all selected meshes in a single pass. For each
          selected mesh, it finds the matching textures, builds the shader
          network, creates a shading group, and assigns the finished
          material automatically.
        </p>
        <p className="t-body mb-8">
          It can also inspect existing materials by tracing Maya's
          dependency graph from a mesh through its shading group, shader,
          utility nodes, and file nodes. This allows the interface to
          display the current material state and lets artists replace
          individual textures without rebuilding the entire material.
        </p>

        <video
          src={cldVideo("texture_check_demo", { quality: "original" })}
          poster={cldThumb("texture_check_demo")}
          className="w-full rounded-sm border border-primary/10 mb-3"
          autoPlay
          loop
          muted
          playsInline
          loading="lazy"
        />
        <p className="caption-text mt-3 normal-case text-foreground/40 mb-10">
          piece_rook_white_01, part of a shared material set, with all three
          shared textures already resolved and connected.
        </p>
      </section>

      <hr className="border-primary/10 mb-14" />

      {/* ── 04. Artist Interface ── */}
      <section id="artist-interface" className="mb-14 scroll-mt-8">
        <span className="eyebrow">04</span>
        <h2 className="t-h1 mt-2 mb-5">Artist Interface</h2>
        <p className="t-body mb-4">
          The tool uses a PySide6 interface to provide a simple workflow
          inside Maya. Users can browse for a texture directory, review
          every selected mesh, inspect which textures were found, and
          identify any missing maps before assigning materials.
        </p>
        <p className="t-body mb-8">
          After a material is created, the interface displays the connected
          textures for each mesh. If a texture is incorrect or missing, it
          can be replaced individually without rebuilding the rest of the
          shader network.
        </p>

        <div className="flex flex-col items-center">
          <img
            src={cld("UI", { width: 1400 })}
            className="w-2xl rounded-sm border border-primary/10 mt-3 mb-2"
            alt="Auto-Material Tool interface"
            loading="lazy"
            decoding="async"
          />

          <p className="caption-text mt-3 normal-case text-foreground/40 mb-10">
            Interface view of the chess_board mesh with all three texture maps
            detected and connected, shown alongside the rest of the selected
            set.
          </p>
        </div>


      </section>

      <hr className="border-primary/10 mb-14" />

      {/* ── 05. Validation & Logging ── */}
      <section id="validation-logging" className="mb-14 scroll-mt-8">
        <span className="eyebrow">05</span>
        <h2 className="t-h1 mt-2 mb-5">Validation & Logging</h2>
        <p className="t-body mb-4">
          Each run reports the shaders that were created, the textures that
          were connected, and any missing maps. If no meshes are selected or
          no texture directory is provided, the tool stops with a warning
          instead of failing silently.
        </p>
        <p className="t-body mb-8">
          The interface also highlights missing textures per mesh, making it
          easy to fix only the assets that need attention instead of
          rerunning the entire batch.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
          <img
            src={cld("no_folder_error", { width: 500 })}
            className="w-full rounded-sm border border-primary/10"
            alt="Missing texture directory warning"
            loading="lazy"
            decoding="async"
          />
          <img
            src={cld("texture_error", { width: 500 })}
            className="w-full rounded-sm border border-primary/10"
            alt="No shader or textures found warning"
            loading="lazy"
            decoding="async"
          />
          <img
            src={cld("texture_connected", { width: 500 })}
            className="w-full rounded-sm border border-primary/10"
            alt="Unresolved texture maps warning"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="caption-text mt-3 normal-case text-foreground/40 mb-10">
          Warning states for a missing texture directory, an object with no
          shader, and unresolved texture maps.
        </p>
      </section>
    </div>
  </div>
);