import MediaCarousel from "../../components/MediaCarousel";
import { ParamTable } from "../../components/ParamTable";
import { cld, cldVideo} from "../../lib/cloudinary";

/* ── Media ──────────────────────────────────────────────────────────────── */
const heroMedia = [
  {
    type: "videoFile",
    src: cldVideo("UnderwaterDemo", { quality: "showcase", endOffset: 3 }),
  },

]

const galleryImages = [
  cld("4e59edf0-615e-4246-8ea6-c7e14715fcfc_rw_1200.png", { quality: "original" }),
  cld("58032e2d-1a42-43a1-ae72-4ed3dc0e8dd0_rw_1200.png", { quality: "original" }),
  cld("card_img_underwater_scene.jpg", { quality: "original" }),
];

/* ── Page ───────────────────────────────────────────────────────────────── */
export const UnderwaterScenePage = () => (
 <div className="mx-auto max-w-8xl text-left text-foreground overflow-x-hidden">
 
     <MediaCarousel items={heroMedia} />
 
     <div className="container pt-6 max-w-5xl px-4 mx-auto -mt-12">
 
       <span className="eyebrow">3D</span>
       <h1 className="t-hero text-7xl mt-2 mb-4">Underwater Temple</h1>
       <p className="eyebrow text-foreground/70 mb-8 normal-case">
         Tools:
         <span className="eyebrow normal-case text-foreground/70 border border-primary/20 rounded-sm px-2 py-1 ml-2">
           Maya
         </span>
         <span className="eyebrow normal-case text-foreground/70 border border-primary/20 rounded-sm px-2 py-1 ml-2">
           Arnold
         </span>
         <span className="eyebrow normal-case text-foreground/70 border border-primary/20 rounded-sm px-2 py-1 ml-2">
           Nuke
         </span>
       </p>

       <p className="t-body text-foreground mb-14">
         A project where I developed and executed art design concepts to guide the visual direction, crafting a 3D underwater environment inspired by Greco-Roman architecture. 
         <br/><br/>
         Contributed across lighting, asset assembly, animation, and compositing.
       </p>
 
       <div className="h-px bg-primary/10 mt-6 mb-14" />
       {/* ── Concept & References ── */}
      <section id="refs" className="mb-14 scroll-mt-8">
        <h2 className="t-h1 mb-5">Concept & References</h2>
        <img
          src={cld("Underwater_Ref", { quality: "original" })}
          alt="Underwater scene references"
          className="w-full h-auto border border-primary/10 mb-6"
        />
      </section>
 
       {/* ── Renders / Gallery ── */}
       <section id="results" className="mb-3 scroll-mt-8">
        <h2 className="t-h1 mb-5">Renders</h2>
         <div className="grid grid-cols-1 gap-1">
        {galleryImages.map((src, i) => (
            <img
            key={src}
            src={src}
            alt={`Underwater scene ${i + 1}`}
            className="w-full h-auto border border-primary/10"
            />
        ))}
        </div>
       </section>

       <p className="t-body mb-14">
         Models assembled from Quixel Megascans, lighting and caustics created in Arnold, and compositing in Nuke. 
       </p>
 
 
     </div>
   </div>
);
    