import MediaCarousel from "../../components/MediaCarousel";
import { cld, cldVideo, cldThumb } from "../../lib/cloudinary";

/* ── Media ──────────────────────────────────────────────────────────────── */
const heroMedia = [
  { type: "image", src: cld("card_img_builder_beavers.png", { quality: "original" }) },
  {
    type: "videoFile",
    src: cldVideo("SLP_Game_Dev_Demo_Day", { quality: "original" }),
    thumb: cldThumb("SLP_Game_Dev_Demo_Day"),
  },
];

/* ── Page ───────────────────────────────────────────────────────────────── */

export const BuilderBeaversPage = () => (
  <div className="mx-auto max-w-8xl text-left text-foreground overflow-x-hidden">
    <MediaCarousel items={heroMedia} />

    <div className="container pt-6 max-w-5xl px-4 mx-auto">
      <span className="eyebrow">Gameplay · Lead · Unity</span>
      <h1 className="t-hero text-7xl mt-2 mb-4">Builder Beavers</h1>
      <p className="eyebrow text-foreground/70 mb-8 normal-case">
        Tools:
        <span className="eyebrow normal-case text-foreground/70 border border-primary/20 rounded-sm px-2 py-1 ml-2">
          Unity
        </span>
        <span className="eyebrow normal-case text-foreground/70 border border-primary/20 rounded-sm px-2 py-1 ml-2">
          C#
        </span>
      </p>

      <p className="t-body text-foreground mb-8">
        A 2D pixel art tower defense game built for She's Code's semester-long
        project (SLP), where players control a team of beavers defending
        their river home from pollution and human threats. By building and
        repairing dams, clearing trash, and surviving natural disasters,
        players work to restore the river's balance and protect nature from
        harm.
        <br /><br />
        As team lead, I coordinated a team of eight throughout development
        while contributing directly to the game's design and core gameplay
        systems. The team presented the finished project to faculty judges
        during Demo Day.
      </p>

      <a
        href="https://github.com/Aizhenii/SLP-Game-Dev-25"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-14 eyebrow normal-case border border-primary/20 rounded-sm px-4 py-2 text-primary/70 hover:text-primary hover:border-primary/50 transition-colors inline-flex items-center gap-2"
      >
        View on GitHub
      </a>


      <div className="h-px bg-primary/10 mt-6 mb-14" />

      {/* ── Leadership ── */}
      <section id="leadership" className="mb-14 scroll-mt-8">
        <span className="eyebrow">Leadership</span>
        <h2 className="t-h1 mt-2 mb-5">Leading a SLP</h2>
        <p className="t-body mb-4">
          I wrote the game design document that established the project's
          direction and coordinated development throughout the semester. To
          prepare the team for collaborative development, I created a Unity
          and Git/GitHub onboarding tutorial and helped teammates resolve
          version control issues as the project grew.
        </p>
        <p className="t-body mb-10">
          I managed sprint planning and task tracking in{" "}
          <strong className="text-foreground/90 font-medium">Azure DevOps</strong>,
          coordinating tasks, monitoring progress, and supporting QA
          throughout development.
        </p>
      </section>

      <hr className="border-primary/10 mb-14" />

      {/* ── Game Mechanic ── */}
      <section id="game-mechanic" className="mb-14 scroll-mt-8">
        <span className="eyebrow">Game Mechanic</span>
        <h2 className="t-h1 mt-2 mb-5">Tower Placement and Currency Systems</h2>
        <p className="t-body mb-8">
          Alongside leading the team, I built core gameplay systems
          including a select-and-drag feature for placing towers, as well as
          the tower shop and currency system. Players earn resources
          throughout enemy waves and use them to purchase and place defenses
          to protect the river.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
          <img
            src={cld("prototype", { width: 800 })}
            className="w-full rounded-sm border border-primary/10"
            alt="Prototype tower UI"
            loading="lazy"
            decoding="async"
          />
          <img
            src={cld("card_img_builder_beavers", { width: 800 })}
            className="w-full rounded-sm border border-primary/10"
            alt="Final tower UI"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="caption-text mt-3 normal-case text-foreground/40 mb-10">
          Prototype UI vs final.
        </p>
      </section>
    </div>
  </div>
);