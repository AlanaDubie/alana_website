export const AsteroidGenPage = () => (
    <div className="container pt-8 mx-auto max-w-8xl text-left text-foreground overflow-x-hidden">

        <img src="src/assets/projects/asteroid/card_img_asteroid_gen.png" className="w-full lg:max-h-80 rounded-lg mb-8 object-cover" />

        <span className="text-xs font-light tracking-widest uppercase text-primary/70">Procedural</span>
        <h1 className="text-foreground text-6xl font-bold mt-2 mb-5">Space Backdrop & Asteroid Generator</h1>
        <p className="text-foreground/40 text-sm mb-8">Tools:
            <span className="text-foreground/70 border border-primary/30 rounded-md px-2 py-1 ml-2">Houdini</span>
            <span className="text-foreground/70 border border-primary/30 rounded-md px-2 py-1 ml-2">Unity</span>
        </p>

        <div className="py-4 pb-8 text-foreground/70 text-sm leading-relaxed max-w-2xl">
            <p>A fully procedural asteroid tool built for a space
                exploration game environment, using layered noise
                and displacement to create non-repeating rock forms
                with natural erosion and fracture detail. Surface
                breakup, scale, and deformation are parameterized for
                controlled variation.</p>

            <p className="mt-4">Quick generations of asteroid variations can be made
                through adjustable parameters such as silhouette
                distortion, surface frequency, and displacement
                amplitude. By changing the intensity and layering of
                noise and displacement, it can produce anything from
                smoother rock forms to heavily fractured debris.</p>

            <p className="mt-4">A galaxy backdrop was also procedurally designed in COPs.</p>
        </div>
    </div>
);
    