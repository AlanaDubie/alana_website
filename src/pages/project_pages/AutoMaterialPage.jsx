import { ProjectHeader } from "../../components/ProjectHeader";

export const AutoMaterialPage = () => (
  <div className="container pt-8 mx-auto max-w-8xl text-left text-foreground overflow-x-hidden">
    <ProjectHeader
      image="assets/projects/auto_material_tool/card_img_mat_tool.png"
      category="Coding"
      title="Auto-Material Tool"
      tools={["Maya", "Python"]}
    />
    <div className="py-4 pb-8 text-foreground/70 text-sm leading-relaxed max-w-2xl">
      <p>
        A Maya tool built with Python that automates texture assignment for imported 3D assets.
        The user selects a texture directory and the tool automatically identifies each PBR map
        type (basecolor, normal, roughness), then wires them into a Standard Surface shader with
        the correct color space settings applied per map.
      </p>
      <p className="mt-4">
        A keyword-based heuristic matches textures to meshes by comparing shared name keywords,
        reducing incorrect assignments across assets with inconsistent naming. The Qt interface
        displays resolved texture details per mesh and supports re-assignment and batch processing.
      </p>
      <p className="mt-4">
        Developed during ASWF Summer Learning Program after completing Dhruv Govil's Python for
        Maya: Artist Friendly Programming course.
      </p>
    </div>
  </div>
);