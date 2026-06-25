import { ProjectHeader } from "../../components/ProjectHeader";

export const HouseLightingPage = () => (
  <div className="container pt-8 mx-auto max-w-8xl text-left text-foreground overflow-x-hidden">
    <ProjectHeader
      image="assets/projects/house_lighting/card_img_house_light.png"
      category="3D"
      title="House Lighting"
      tools={["Maya", "Arnold"]}
    />
    <div className="py-4 pb-8 text-foreground/70 text-sm leading-relaxed max-w-2xl">
      <p className="mt-4">
        A series of 3D lighting studies completed under the mentorship of Francesco Furneri,
        focused on developing a strong foundation in Arnold rendering. Each scene explores how
        light, color, and shadow can define mood, atmosphere, and environment.
      </p>
    </div>
  </div>
);