import MediaCarousel from "../../components/MediaCarousel";
import { ParamTable } from "../../components/ParamTable";
import { cld, cldThumb, cldVideo } from "../../lib/cloudinary";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import csharp from "react-syntax-highlighter/dist/esm/languages/hljs/csharp";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

SyntaxHighlighter.registerLanguage("csharp", csharp);

const CodeBlock = ({ code }) => (
  <SyntaxHighlighter
    language="csharp"
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
    type: "image",
    src: cld("card_img_asteroid_gen.png", { quality: "original" }),
  },
  {
    type: "image",
    src: cld("card_img_asteroid_map.jpg", { quality: "original" }),
  },
  {
    type: "videoFile",
    src: cldVideo("asteroid_demo_param", { quality: "original" }),
    thumb: cldThumb("asteroid_demo_param"),
  },
  { type: "image", src: cld("spacebackground.png", { quality: "original" }) },
  { type: "image", src: cld("concept_ref.png", { quality: "original" }) },
  {
    type: "videoFile",
    src: cldVideo("asteroid_spawn", { quality: "original" }),
    thumb: cldThumb("asteroid_spawn"),
  },
];

export const AsteroidSpawnerPage = () => (
  <div className="mx-auto max-w-8xl text-left text-foreground overflow-x-hidden">
    <MediaCarousel items={heroMedia} />

    <div className="container pt-6 max-w-5xl px-4 mx-auto">
      <span className="eyebrow">Procedural · COPs · Game Dev</span>
      <h1 className="t-hero text-7xl mt-2 mb-4">
        Space Game — Asteroid System
      </h1>
      <p className="eyebrow text-foreground/70 mb-8 normal-case">
        Tools:
        <span className="eyebrow normal-case text-foreground/70 border border-primary/20 rounded-sm px-2 py-1 ml-2">
          Houdini
        </span>
        <span className="eyebrow normal-case text-foreground/70 border border-primary/20 rounded-sm px-2 py-1 ml-2">
          Unity
        </span>
        <span className="eyebrow normal-case text-foreground/70 border border-primary/20 rounded-sm px-2 py-1 ml-2">
          C#
        </span>
      </p>

      <p className="t-body text-foreground mb-14">
        This project started as a group game development club project a space
        blaster game called “The Last Frontier” where players navigate a ship
        through an asteroid field. I was responsible for the asteroid system
        from start to finish: designing the procedural asset and space backdrop
        in Houdini, then building the asteroid spawner system in Unity.
      </p>

      <hr className="border-primary/10 mb-14" />

      {/* ── Concept & References ── */}
      <section id="refs" className="mb-14 scroll-mt-8">
        <h2 className="t-h1 mb-5">Concept & References</h2>
        <p className="t-body mb-8">
          The team wanted the asteroids to feel low-poly and stylized with a
          backdrop full of star clusters and galaxies. I pulled references from
          games like Everspace to get a clear visual target before jumping into
          Houdini and the team loved the direction.
        </p>

        <img
          src={cld("concept_ref.png", { width: 1200 })}
          className="w-full rounded-sm border border-primary/10"
          alt="References"
          loading="lazy"
          decoding="async"
        />
      </section>

      <hr className="border-primary/10 mb-14" />

      {/* ── Procedural Asteroid ── */}
      <section className="mb-14">
        <span className="eyebrow">01</span>
        <h2 className="t-h1 mt-2 mb-5">Procedural Asteroid</h2>
        <p className="t-body mb-8">
          The asteroid is built using layered noise and displacement to generate
          non-repeating rock forms with natural erosion and fracture detail.
          Surface breakup, scale, and deformation are all parameterized so a
          wide range of variations can be produced without rebuilding the
          network. Craters are also generated procedurally with control over
          count, size range, and spread.
        </p>

        <div className="flex flex-col items-center">
          <img
            src={cld("card_img_asteroid_gen.png", { width: 800 })}
            className="w-lg rounded-sm border border-primary/10"
            alt="asteroid generation"
            loading="lazy"
            decoding="async"
          />
          <p className="caption-text mt-3 normal-case text-foreground/40 mb-10">
            A single asteroid variant generated from the procedural network
          </p>
        </div>

        <span className="eyebrow block">Node Network</span>
        <p className="t-body mt-3 mb-4">
          The network splits into two branches. The mesh and texture creation on
          the right, and a polycount-reduction branch on the left (currently set
          to 500 and can be adjustable).
        </p>

        <video
          src={cldVideo("asteroid_showcase", {
            quality: "original",
          })}
          poster={cldThumb("asteroid_showcase")}
          className="w-4xl rounded-sm border border-primary/10 mb-8"
          autoPlay
          loop
          loading="lazy"
          decoding="async"
        />

        <div className="flex flex-col items-center">
          <img
            src={cld("asteroid_node.png", { width: 800 })}
            alt="Asteroid node network"
            className="w-lg rounded-sm border border-primary/10"
            loading="lazy"
            decoding="async"
          />
          <p className="caption-text mt-3 normal-case text-foreground/40 mb-10">
            Full SOP network, texture/mesh branch (right) and
            polycount-reduction branch (left).
          </p>
        </div>

        <span className="eyebrow block">Asteroid Model Generator</span>
        <video
          src={cldVideo("asteroid_demo_param", { quality: "original" })}
          poster={cldThumb("asteroid_demo_param")}
          className="w-5xl rounded-sm border border-primary/10 mt-3 mb-10"
          autoPlay
          loop
          loading="lazy"
          decoding="async"
        />

        <h4 className="eyebrow normal-case text-foreground mb-2">Parameters</h4>
        <ParamTable
          params={[
            [
              "rock shape seed",
              "randomizes the overall silhouette of the rock",
            ],
            ["crater count", "how many craters are generated on the surface"],
            ["crater min size", "minimum size of each crater"],
            ["crater max size", "maximum size of each crater"],
            [
              "crater spread seed",
              "randomizes where the craters are distributed",
            ],
          ]}
        />

        <h3 className="t-h2 mb-4">Color Correcting & Texturing</h3>
        <p className="t-body mb-4">
          All color correction and texturing for the asteroid was done
          procedurally in Houdini COPs.
        </p>
        <img
          src={cld("Color_correct_node.png", { width: 1200 })}
          alt="Color correcting and texturing"
          className="w-3xl rounded-sm border border-primary/10 mt-3"
          loading="lazy"
          decoding="async"
        />
      </section>

      <hr className="border-primary/10 mb-14" />

      {/* ── Space Backdrop ── */}
      <section className="mb-14">
        <span className="eyebrow">02</span>
        <h2 className="t-h1 mt-2 mb-5">Space Backdrop</h2>
        <p className="t-body mb-8">
          The space background that includes stars, galaxy clusters, and nebula
          color were all built entirely from scratch inside Houdini COPs. For
          these effects, I used noise and blend nodes to get the layered depth
          of a real starfield. It was genuinely fun to experiment with how much
          personality you can get out of just a few nodes!
        </p>

        <img
          src={cld("spacebackground.png", { width: 1200 })}
          alt="Space background result"
          className="w-full rounded-sm border border-primary/10"
          loading="lazy"
          decoding="async"
        />
        <p className="caption-text mt-3 normal-case text-foreground/40 mb-10">
          Final space backdrop render.
        </p>

        <img
          src={cld("space_nodes.png", { width: 2000 })}
          alt="Space background nodes"
          className="w-full rounded-sm border border-primary/10"
          loading="lazy"
          decoding="async"
        />
        <p className="caption-text mt-3 normal-case text-foreground/40 mb-10">
          COPs network generating the star and nebula layers.
        </p>
      </section>

      <hr className="border-primary/10 mb-14" />

      {/* ── Unity Spawner ── */}
      <section className="mb-14">
        <span className="eyebrow">03</span>
        <h2 className="t-h1 mt-2 mb-5">Unity Spawner</h2>

        <p className="t-body mb-8">
          I built the asteroid spawning system, which populates the scene at
          runtime by placing asteroids at randomized positions within a defined
          sphere volume. Before each spawn, the system runs a physics sphere
          check to confirm the space is clear, preventing asteroids from
          overlapping or clipping into each other.
        </p>

        <video
          src={cldVideo("asteroid_spawn", { quality: "original" })}
          poster={cldThumb("asteroid_spawn")}
          className="w-full rounded-sm border border-primary/10 mt-3 mb-10"
          autoPlay
          loop
          loading="lazy"
          decoding="async"
        />

        <p className="t-body mb-8">
          Each asteroid is instantiated with a random rotation and a uniformly
          randomized scale within a set min and max range, keeping the field
          feeling natural and varied without manual placement. The spawn count,
          asteroid radius, and size variation are all exposed as serialized
          fields in the Unity Inspector, making it easy for the team to tweak
          the feel of the field without touching the code.
        </p>

        <span className="eyebrow block">Fields</span>
        <CodeBlock
          code={`public class AsteroidSpawner : MonoBehaviour
  {
      [Header("Spawn Area Sphere")]
      public Transform spawnSphere;        // reference to your sphere object

      [Header("Asteroid Settings")]
      public GameObject asteroidPrefab;
      public int asteroidCount = 50;       // Total number of asteroids to spawn
      public float asteroidRadius = 2f;    // Size of the asteroid collision/spacing check

      [Header("Asteroid Size Variation")]
      public float asteroidMinScale = 0.5f;
      public float asteroidMaxScale = 2f;

      void Start()
      {
          for (int i = 0; i < asteroidCount; i++)
          {
              TrySpawnAsteroid();
          }
      }
  }`}
        />

        <span className="eyebrow block">Spawn Logic</span>
        <CodeBlock
          code={`private void TrySpawnAsteroid()
  {
      // get radius from the sphere's scale
      float radius = spawnSphere.localScale.x * 0.5f;

      // pick a random point inside the sphere
      Vector3 randomOffset = Random.insideUnitSphere * radius;
      Vector3 spawnPosition = spawnSphere.position + randomOffset;

      // check if the space is free using a sphere check
      bool spaceFree = !Physics.CheckSphere(spawnPosition, asteroidRadius);

      if (spaceFree)
      {
          // spawn asteroid with random rotation
          GameObject asteroid = Instantiate(asteroidPrefab, spawnPosition, Random.rotation);

          // random uniform scale
          Vector3 originalScale = asteroidPrefab.transform.localScale;
          float scale = Random.Range(asteroidMinScale, asteroidMaxScale);
          asteroid.transform.localScale = originalScale * scale;
      }
      else
      {
          Debug.Log("Spawn blocked: asteroid too close to another one.");
      }
  }`}
        />

        <a
          href="https://github.com/Its-Cryptic/CS4700-Semester-Project/blob/asteroid_spawner/Assets/AsteroidSpawner/Scripts/AsteroidSpawner.cs"
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow normal-case border border-primary/20 rounded-sm px-4 py-2 text-primary/70 hover:text-primary hover:border-primary/50 transition-colors inline-flex items-center gap-2"
        >
          View on GitHub
        </a>
      </section>
    </div>
  </div>
);
