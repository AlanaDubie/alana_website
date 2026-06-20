export const PageTemplate = () => (
    <div className="container pt-8 mx-auto max-w-8xl text-left text-foreground overflow-x-hidden">

        {/* Header Image */}
        <img src="assets/projects/tropical_plants/card_img_plant_tool.png" className="w-full lg:max-h-80 rounded-md mb-8 object-cover border border-primary/10" />

        <span className="eyebrow">Procedural</span>
        <h1 className="text-foreground text-6xl font-serif font-light mt-2 mb-5">Title</h1>
        <p className="text-foreground/40 text-xs font-mono uppercase tracking-widest mb-8">Tools:
            <span className="text-foreground/70 font-mono text-xs border border-primary/20 rounded-sm px-2 py-1 ml-2 tracking-wide normal-case">Houdini</span>
            <span className="text-foreground/70 font-mono text-xs border border-primary/20 rounded-sm px-2 py-1 ml-2 tracking-wide normal-case">Maya</span>
        </p>

         {/* Project overview and breakdown */}
        <div className="py-4 pb-8 text-foreground/70 text-sm leading-relaxed max-w-2xl">
            <p>Overview...</p>
        </div>
    </div>
);