export const PageTemplate = () => (
    <div className="container pt-8 mx-auto max-w-8xl text-left text-foreground overflow-x-hidden">

        {/* Header Image */}
        <img src="src/assets/projects/tropical_plants/card_img_plant_tool.png" className="w-full lg:max-h-80 rounded-lg mb-8 object-cover" />

        <span className="text-xs font-light tracking-widest uppercase text-primary/70">Procedural</span>
        <h1 className="text-foreground text-6xl font-bold mt-2 mb-5">Title</h1>
        <p className="text-foreground/40 text-sm mb-8">Tools:
            <span className="text-foreground/70 border border-primary/30 rounded-md px-2 py-1 ml-2">Houdini</span>
            <span className="text-foreground/70 border border-primary/30 rounded-md px-2 py-1 ml-2">Maya</span>
        </p>

         {/* Project overview and breakdown */}
        <div className="py-4 pb-8 text-foreground/70 text-sm leading-relaxed max-w-2xl">
            <p>Overview...</p>
        </div>
    </div>
);

    