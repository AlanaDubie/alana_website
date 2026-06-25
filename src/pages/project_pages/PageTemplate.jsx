import { ProjectHeader } from "../../components/ProjectHeader";

export const PageTemplate = () => (
  <div className="container pt-8 mx-auto max-w-8xl text-left text-foreground overflow-x-hidden">
    <ProjectHeader
      image="assets/projects/tropical_plants/card_img_plant_tool.png"
      category="Procedural"
      title="Title"
      tools={["Houdini", "Maya"]}
    />
    {/* Project overview and breakdown */}
    <div className="py-4 pb-8 text-foreground/70 text-sm leading-relaxed max-w-2xl">
      <p>Overview...</p>
    </div>
  </div>
);