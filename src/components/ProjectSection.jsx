import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import {ProjectFilter} from "./ProjectFilter";
import { cld } from "../lib/cloudinary";

import { TropicalPlantsPage }   from "../pages/project_pages/TropicalPlantsPage";
import { AsteroidSpawnerPage }  from "../pages/project_pages/AsteroidSpawnerPage";
import { MacroMossPage }        from "../pages/project_pages/MacroMossPage";
import { AutoMaterialPage }     from "../pages/project_pages/AutoMaterialPage";
import { ElectricShiftPage }    from "../pages/project_pages/ElectricShift";
import { BuilderBeaversPage }   from "../pages/project_pages/BuilderBeaversPage";
import { HouseLightingPage }    from "../pages/project_pages/HouseLightingPage";
import { OutsideDinePage }      from "../pages/project_pages/OutsideDinePage";
import { UnderwaterScenePage }  from "../pages/project_pages/UnderwaterScenePage";
import { PBRClassifierPage } from "../pages/project_pages/PBRClassifierPage.jsx";
import { NotFound }             from "../pages/NotFound.jsx";

const projects = [
  { id: 1,  title: "Tropical Plants",                     description: "Houdini Digital Asset",     image: cld("card_img_plant_tool.png", { width: 600 }),       tags: ["Procedural"], detailComponent: <TropicalPlantsPage /> },
  { id: 2,  title: "Macro-Moss",                          description: "Houdini Digital Asset",     image: cld("card_img_macromoss.png", { width: 600 }),        tags: ["Procedural"], detailComponent: <MacroMossPage /> },
  { id: 3,  title: "Auto-Material Tool",                  description: "Maya Python Script",        image: cld("card_img_mat_tool.png", { width: 600 }),         tags: ["Coding"],     detailComponent: <AutoMaterialPage /> },
  { id: 4,  title: "Space Game – Asteroid Spawner",       description: "Unity Space Game Level",    image: cld("card_img_asteroid_map.jpg", { width: 600 }),     tags: ["Coding", "Procedural"],     detailComponent: <AsteroidSpawnerPage /> },
  { id: 5,  title: "Electric Shift",                      description: "VR Game",                   image: cld("card_img_electric_shift.png", { width: 600 }),  tags: ["Coding"],     detailComponent: <ElectricShiftPage /> },
  { id: 6,  title: "Builder Beavers",                     description: "2D Tower Defense Game",     image: cld("card_img_builder_beavers.png", { width: 600 }), tags: ["Coding"],     detailComponent: <BuilderBeaversPage /> },
  { id: 7,  title: "House Lighting",                      description: "3D Lighting Studies",       image: cld("card_img_house_light.png", { width: 600 }),     tags: ["3D"],         detailComponent: <HouseLightingPage /> },
  { id: 8,  title: "Outside Dining",                      description: "3D Lighting Studies",       image: cld("card_img_outside_dining.jpg", { width: 600 }),  tags: ["3D"],         detailComponent: <OutsideDinePage /> },
  { id: 9,  title: "Underwater Temple",                  description: "3D Lighting Environment",   image: cld("card_img_underwater_scene.jpg", { width: 600 }),tags: ["3D"],         detailComponent: <UnderwaterScenePage /> },
  { id: 11, title: "ML Assisted PBR Classifier",                description: "Maya Python Script",        image: cld("ml_render1", { width: 600 }),tags: ["Coding"],     detailComponent: <PBRClassifierPage /> },
];

const allTags = [...new Set(projects.flatMap((p) => p.tags))];

/* ── Drawer ─────────────────────────────────────────────────── */
/* TODO: Make into component */
const ProjectDrawer = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "unset"; };
  }, []);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="relative ml-auto w-full h-full bg-background overflow-y-auto
                   animate-[drawerIn_0.35s_cubic-bezier(0.32,0.72,0,1)]"
      >
        <button
          onClick={onClose}
          className="sticky top-0 z-20 w-full
                     bg-background/90 backdrop-blur-sm border-b border-primary/12
                     text-foreground/45 hover:text-primary
                     caption-text uppercase
                     tracking-[0.2em] font-bold
                     transition-colors"
        >
          <div className="container flex items-center gap-2 px-4 py-4">
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
            Back to projects
            <span className="ml-auto tracking-[0.2em] font-bold caption-text uppercase text-foreground/50">
              {project.title}
            </span>
          </div>
        </button>

        {project.detailComponent}
      </div>
    </div>
  );
};

/* ── Main Section ───────────────────────────────────────────── */
export const ProjectSection = () => {
  const [selected, setSelected] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = projects.filter(
    (project) => activeFilter === "All" || project.tags.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-8xl">

        <p className="eyebrow text-center mb-3">Projects</p>

        <ProjectFilter
          tags={allTags}
          active={activeFilter}
          onChange={setActiveFilter}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelected(project)}
              className="group relative border border-primary/10 bg-card rounded-sm overflow-hidden
                         card-hover hover:border-primary/30 cursor-pointer
                         transition-all duration-500 ease-out
                         animate-[fadeScaleIn_0.4s_ease-out]"
            >
              <div className="min-h-64 max-h-80 h-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500
                              flex flex-col justify-end p-5">

                <div className="flex flex-wrap items-center">
                  {project.tags.map((tag, i) => (
                    <span
                      key={tag}
                      className="caption-text font-medium tracking-[0.2em] text-primary flex items-center"
                    >
                      {tag}
                      {i < project.tags.length - 1 && (
                        <span className="mx-2 text-primary/50">/</span>
                      )}
                    </span>
                  ))}
                </div>

                <h3 className="t-h2 text-left mt-2">
                  {project.title}
                </h3>

                <p className="t-body mt-1! normal-case text-left text-foreground/55">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectDrawer project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};