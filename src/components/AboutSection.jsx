import { FaDiscord, FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const AboutSection = () => {
    return (
    <section id="about" className="py-24 px-12 relative">
        <div className="container mx-auto max-w-8xl">
            <p className="eyebrow text-center mb-3">About</p>

            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 items-start">

                <div className="flex justify-center">
                    <img src="assets/Profile.jpg" alt="Alana's Profile" className="rounded-md shadow-lg w-64 xl:w-72 h-auto object-cover object-[center_30%] border border-primary/10" />
                </div>

                <div className="space-y-6 lg:pl-14 md:pl-12 justify-center"> 
                    <h2 className="font-serif text-left text-6xl font-light leading-[0.9] mb-10"
                    >
                        Hey there! I'm <span className="italic text-primary">  Alana</span>.
                    </h2>
                    
                    <p className="text-muted-foreground text-lg text-left leading-relaxed font-light">I'm a Computer Science student with an insatiable curiosity and 
                        a passion for blending the technical with artistic. 
                    </p>

                    <p className="text-muted-foreground text-lg text-left leading-relaxed font-light">Growing up in the beautiful landscapes of Hawai'i, 
                        I developed a deep love for nature's beauty and a drive to create environments.
                    </p>

                    <p className="text-muted-foreground text-lg text-left leading-relaxed font-light">Whether I'm immersed in coding or exploring the depths of video games and movies, 
                        I'm always seeking new ways to bridge the gap between art and technology.
                    </p>

                    <div className="flex flex-row gap-8 pt-4">
                        <a href="#contact" className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/60 hover:text-primary transition-colors duration-300 flex items-center gap-2">
                            <MdEmail size={16} />
                            Contact Me
                        </a>

                        <a href="/resume.pdf" target="_blank" className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/60 hover:text-accent transition-colors duration-300 flex items-center gap-2">
                            <FaFileAlt size={14} />
                            View Resume
                        </a>
                    </div>
                </div>

            </div>
        </div>

    </section>
    )
}