import { useState, useEffect } from "react";

import { PageTemplate } from "../pages/project_pages/PageTemplate";
import { TropicalPlantsPage } from "../pages/project_pages/TropicalPlantsPage";
import {AsteroidGenPage} from "../pages/project_pages/AsteroidGenPage";
import { MacroMossPage } from "../pages/project_pages/MacroMossPage";

// --- Project data ---
const projects = [
    {
        id: 1, 
        title: "Tropical Plants",
        description: "Houdini Digital Asset",
        image: "src/assets/projects/tropical_plants/card_img_plant_tool.png",
        tags: ["Procedural"],
        detailComponent: <TropicalPlantsPage/>
    },
    {
        id: 2, 
        title: "Space Backdrop & Asteroid Generator",
        description: "Houdini Digital Asset",
        image: "src/assets/projects/asteroid/card_img_asteroid_gen.png",
        tags: ["Procedural"],
        detailComponent: <AsteroidGenPage />
    },
    {
        id: 3, 
        title: "Macro-Moss",
        description: "Houdini Digital Asset",
        image: "src/assets/projects/macro_moss/card_img_macromoss.png",
        tags: ["Procedural"],
        detailComponent: <MacroMossPage />
    },
    {
        id: 4, 
        title: "Auto-Material Tool",
        description: "Maya Python Script",
        image: "src/assets/projects/auto_material_tool/card_img_mat_tool.png",
        tags: ["Coding"],
        detailComponent: <div className="p-8 text-white">Auto-Material Tool detail coming soon.</div>
    },
    {
        id: 5, 
        title: "Space Game – Asteroid Spawner Level",
        description: "Unity Space Game Level",
        image: "src/assets/projects/asteroid/card_img_asteroid_map.jpeg",
        tags: ["Coding"],
        detailComponent: <div className="p-8 text-white">Space Game – Asteroid Spawner Level detail coming soon.</div>
    },
    {
        id: 6, 
        title: "Electric Shift",
        description: "VR Game",
        image: "src/assets/projects/electric_shift/card_img_electric_shift.png",
        tags: ["Coding"],
        detailComponent: <div className="p-8 text-white">Electric Shift detail coming soon.</div>
    },
    {
        id: 7, 
        title: "Builder Beavers",
        description: "2D Tower Defense Game",
        image: "src/assets/projects/builder_beavers/card_img_builder_beavers.png",
        tags: ["Coding"],
        detailComponent: <div className="p-8 text-white">Builder Beavers detail coming soon.</div>
    },
    {
        id: 8, 
        title: "House Lighting",
        description: "3D Lighting Studies",
        image: "src/assets/projects/house_lighting/card_img_house_light.png",
        tags: ["3D"],
        detailComponent: <div className="p-8 text-white">House Lighting detail coming soon.</div>
    },
    {
        id: 9, 
        title: "Outside Dining",
        description: "3D Lighting Studies",
        image: "src/assets/projects/outside_dining/card_img_outside_dining.jpg",
        tags: ["3D"],
        detailComponent: <div className="p-8 text-white">Outside Dining detail coming soon.</div>
    },
    {
        id: 10, 
        title: "Underwater Scene",
        description: "3D Lighting Environment",
        image: "src/assets/projects/underwater_scene/card_img_underwater_scene.jpg",
        tags: ["3D"],
        detailComponent: <div className="p-8 text-white">Underwater Scene detail coming soon.</div>
    },
]

// --- Drawer ---

const ProjectDrawer = ({ project, onClose }) => {
    // Lock background scroll
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = "unset"; };
    }, []);

    // Close on Escape key
    useEffect(() => {
        const handleKey = (e) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 flex">

            {/* Sliding panel */}
            <div className="relative ml-auto w-full h-full px-3 bg-background overflow-y-auto
                            animate-[drawerIn_0.35s_cubic-bezier(0.32,0.72,0,1)]">

                {/* Sticky close button */}
                <button
                    onClick={onClose}
                    className="container sticky top-0 z-20 flex items-center gap-2 w-full py-4
                               bg-background/90 backdrop-blur-sm border-b border-foreground/5
                               text-foreground/40 hover:text-foreground text-sm transition-colors"
                >
                    <span className="text-lg leading-none">←</span> Back to projects <span className="ml-auto text-foreground/70 text-align-right">{project.title}</span>
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
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                    Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            onClick={() => setSelected(project)}
                            className="group relative border border-0.5 border-primary/5 bg-card rounded-md overflow-hidden shadow-xs card-hover cursor-pointer"
                        >
                            
                            {/* Image */}
                            <div className="min-h-64 max-h-80 h-full overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-xs font-light tracking-widest uppercase text-primary/90"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Title */}
                                <h3 className="text-white text-left text-2xl font-normal leading-tight mb-2 mt-2">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-white/70 text-left text-sm">
                                    {project.description}
                                </p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Drawer */}
            {selected && (
                <ProjectDrawer
                    project={selected}
                    onClose={() => setSelected(null)}
                />
            )}
        </section>
    );
};