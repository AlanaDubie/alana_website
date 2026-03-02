export const TropicalPlantsPage = () => (
    <div className="container pt-8 mx-auto max-w-8xl text-left text-foreground overflow-x-hidden">
        
        {/* Header Image */}
        <img src="src/assets/projects/tropical_plants/card_img_plant_tool.png" className="w-full lg:max-h-80 rounded-lg mb-8 object-cover" />

        <span className="text-xs font-light tracking-widest uppercase text-primary/70">Procedural</span>
        <h1 className="text-foreground text-6xl font-bold mt-2 mb-5">Tropical Plants</h1>
        <p className="text-foreground/40 text-sm mb-8">Tools:
            <span className="text-foreground/70 border border-primary/30 rounded-md px-2 py-1 ml-2">Houdini</span></p>

        {/* Project overview and breakdown */}
        <div className="py-4 pb-8 text-foreground/70 text-sm leading-relaxed max-w-2xl">
            <p>Inspired by the stylized environments of Kingdom Hearts, this project includes two procedural tools for generating customizable tropical vegetation:</p>

                <ol className="list-decimal list-outside ml-6 mt-4 space-y-4">
                    <li>The <strong>Palm Tree Tool</strong> lets artists control trunk thickness, leaf count, bend angle, scatter seed, and branch properties to produce a wide range of palm models from a single asset.</li>
                    <li>The <strong>Layered Plant Tool</strong> generates multi-layered flowers and plants with controls for leaf count, scale, rotation, angle, and a full color system. This includes a color ramp with radial gradient support for petal patterns and variations.</li>
                </ol>

            <p className="mt-4">All PBR textures procedurally generated inside Houdini's COPs.</p>
        </div>
    </div>
);

    