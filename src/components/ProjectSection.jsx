import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

import { TropicalPlantsPage } from "../pages/project_pages/TropicalPlantsPage";
import { AsteroidGenPage } from "../pages/project_pages/AsteroidGenPage";
import { AsteroidSpawnerPage } from "../pages/project_pages/AsteroidSpawnerPage";
import { MacroMossPage } from "../pages/project_pages/MacroMossPage";
import { AutoMaterialPage } from "../pages/project_pages/AutoMaterialPage";
import { ElectricShiftPage } from "../pages/project_pages/ElectricShift";
import { BuilderBeaversPage } from "../pages/project_pages/BuilderBeaversPage";
import { HouseLightingPage } from "../pages/project_pages/HouseLightingPage";
import { OutsideDinePage } from "../pages/project_pages/OutsideDinePage";
import { UnderwaterScenePage } from "../pages/project_pages/UnderwaterScenePage";

// --- Project data ---
const projects = [
  {
    id: 1,
    title: "Tropical Plants",
    description: "Houdini Digital Asset",
    image: "assets/projects/tropical_plants/card_img_plant_tool.png",
    tags: ["Procedural"],
    detailComponent: <TropicalPlantsPage />,
  },
  {
    id: 2,
    title: "Space Backdrop & Asteroid Generator",
    description: "Houdini Digital Asset",
    image: "assets/projects/asteroid/card_img_asteroid_gen.png",
    tags: ["Procedural"],
    detailComponent: <AsteroidGenPage />,
  },
  {
    id: 3,
    title: "Macro-Moss",
    description: "Houdini Digital Asset",
    image: "assets/projects/macro_moss/card_img_macromoss.png",
    tags: ["Procedural"],
    detailComponent: <MacroMossPage />,
  },
  {
    id: 4,
    title: "Auto-Material Tool",
    description: "Maya Python Script",
    image: "assets/projects/auto_material_tool/card_img_mat_tool.png",
    tags: ["Coding"],
    detailComponent: <AutoMaterialPage />,
  },
  {
    id: 5,
    title: "Space Game – Asteroid Spawner Level",
    description: "Unity Space Game Level",
    image: "assets/projects/asteroid/card_img_asteroid_map.jpeg",
    tags: ["Coding"],
    detailComponent: <AsteroidSpawnerPage />,
  },
  {
    id: 6,
    title: "Electric Shift",
    description: "VR Game",
    image: "assets/projects/electric_shift/card_img_electric_shift.png",
    tags: ["Coding"],
    detailComponent: <ElectricShiftPage />,
  },
  {
    id: 7,
    title: "Builder Beavers",
    description: "2D Tower Defense Game",
    image: "assets/projects/builder_beavers/card_img_builder_beavers.png",
    tags: ["Coding"],
    detailComponent: <BuilderBeaversPage />,
  },
  {
    id: 8,
    title: "House Lighting",
    description: "3D Lighting Studies",
    image: "assets/projects/house_lighting/card_img_house_light.png",
    tags: ["3D"],
    detailComponent: <HouseLightingPage />,
  },
  {
    id: 9,
    title: "Outside Dining",
    description: "3D Lighting Studies",
    image: "assets/projects/outside_dining/card_img_outside_dining.jpg",
    tags: ["3D"],
    detailComponent: <OutsideDinePage />,
  },
  {
    id: 10,
    title: "Underwater Scene",
    description: "3D Lighting Environment",
    image: "assets/projects/underwater_scene/card_img_underwater_scene.jpg",
    tags: ["3D"],
    detailComponent: <UnderwaterScenePage />,
  },
];

// --- Drawer ---

const ProjectDrawer = ({ project, onClose }) => {
  // Lock background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Sliding panel */}
      <div
        className="relative ml-auto w-full h-full bg-background overflow-y-auto
                            animate-[drawerIn_0.35s_cubic-bezier(0.32,0.72,0,1)]"
      >
        {/* top nav panel */}
        <button
          onClick={onClose}
          className="sticky top-0 z-20 w-full
             bg-background/90 backdrop-blur-sm border-b border-primary/10
             text-foreground/50 hover:text-primary font-mono text-[11px] uppercase tracking-[0.2em] transition-colors"
        >
          <div className="container flex items-center gap-2 py-4">
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
            Back to projects
            <span className="ml-auto text-foreground/60 font-sans text-[11px] uppercase tracking-[0.2em]">{project.title}</span>
          </div>
        </button>

        {/* Project-specific content */}
        {project.detailComponent}
      </div>
    </div>
  );
};

// --- Main Section ---
export const ProjectSection = () => {
  const [selected, setSelected] = useState(null);
  return (
    <section id="projects" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-8xl">
        <p className="eyebrow text-center mb-3">PROJECTS</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {projects.map((project, key) => (
            <div
              key={key}
              onClick={() => setSelected(project)}
              className="group relative border border-primary/10 bg-card rounded-sm overflow-hidden card-hover hover:border-primary/30 cursor-pointer"
            >
              {/* Image */}
              <div className="min-h-64 max-h-80 h-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-foreground text-left text-2xl font-serif font-light leading-tight mb-2 mt-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/60 text-left text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Drawer */}
      {selected && (
        <ProjectDrawer project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};