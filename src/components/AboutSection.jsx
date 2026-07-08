import { FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { cld } from "../lib/cloudinary";


export const AboutSection = () => {
  return (
    <section id="about" className="pt-24 px-12 relative">
      <div className="container mx-auto max-w-8xl">

        <p className="eyebrow text-center mb-3">About</p>

        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 items-start">

          <div className="flex justify-center">
            <img
              src={cld("Profile.jpg", { quality: "showcase" })}
              alt="Alana's Profile"
              className="rounded-sm shadow-lg w-64 xl:w-72 h-auto object-cover object-[center_30%] border border-primary/25"
            />
          </div>

          <div className="space-y-2 lg:pl-14 md:pl-12">

            <h2 className="t-h1 text-6xl text-left mb-10">
              Hey there! I'm {" "}
              <em className="not-italic">Alana</em>.
            </h2>

            <p className="t-body text-left">
              I'm a Computer Science student with an insatiable curiosity and
              a passion for blending the technical with artistic.
            </p>

            <p className="t-body text-left">
              Growing up in the beautiful landscapes of Hawai'i,
              I developed a deep love for nature's beauty and a drive to create environments.
            </p>

            <p className="t-body text-left">
              Whether I'm immersed in coding or exploring the depths of video games and movies,
              I'm always seeking new ways to bridge the gap between art and technology.
            </p>

            <div className="flex flex-row gap-8 pt-4">
              <a href="#contact"
                className="caption-text font-medium tracking-[0.2em] text-foreground/55 hover:text-primary transition-colors duration-300 flex items-center gap-2">
                <MdEmail size={16} />
                CONTACT ME
              </a>
              <a href="assets/AlanaResume.pdf" target="_blank"
                className="caption-text font-medium tracking-[0.2em] text-foreground/55 hover:text-primary transition-colors duration-300 flex items-center gap-2">
                <FaFileAlt size={14} />
                VIEW RESUME
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};