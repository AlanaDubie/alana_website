import { useEffect } from "react";
import { FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { cld, cldRaw } from "../lib/cloudinary";
import { SkillsSection } from "./SkillsSection";

export const AboutSection = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "unset"; };
  }, []);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-30 bg-background overflow-y-auto animate-[pageIn_0.4s_cubic-bezier(0.32,0.72,0,1)_both]"
    >
      <section className="pt-24 pb-10 px-12">
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

              <div className="flex flex-row gap-4 pt-4">
                <a href="#contact" onClick={onClose}
                  className="caption-text font-medium tracking-[0.2em] text-foreground/55 border border-primary/20 rounded-sm px-4 py-2 hover:text-primary hover:border-primary/50 transition-colors duration-300 flex items-center gap-2">
                  <MdEmail size={16} />
                  CONTACT ME
                </a>
                <a href={cldRaw("AlanaResume.pdf")} target="_blank" rel="noopener noreferrer"
                  className="caption-text font-medium tracking-[0.2em] text-foreground/55 border border-primary/20 rounded-sm px-4 py-2 hover:text-primary hover:border-primary/50 transition-colors duration-300 flex items-center gap-2">
                  <FaFileAlt size={14} />
                  VIEW RESUME
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>


      <SkillsSection />

      {/* Footer — caption tier */}
      <footer className="px-6 md:px-16 pb-10 max-w-7xl mx-auto flex justify-center">
        <p className="caption-text">© Copyright Alana Dubie 2026. All rights reserved.</p>
      </footer>
    </div>
  );
};