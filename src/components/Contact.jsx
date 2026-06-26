import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-8xl">

        <p className="eyebrow text-center mb-3">Contact</p>

        <h2 className="t-h1 text-center mb-12">Let's Connect!</h2>

        <div className="max-w-xl mx-auto space-y-6">
          <p className="t-body text-center">
            I'm always open to new opportunities and collaborations
          </p>

          <div className="flex gap-8 justify-center pt-4">
            <a href="mailto:alanaldubie@gmail.com"
              className="text-foreground/50 hover:text-primary transition-colors duration-300">
              <MdEmail size={32} />
            </a>
            <a href="https://linkedin.com/in/alana-dubie" target="_blank" rel="noopener noreferrer"
              className="text-foreground/50 hover:text-primary transition-colors duration-300">
              <FaLinkedin size={32} />
            </a>
            <a href="https://github.com/alanadubie" target="_blank" rel="noopener noreferrer"
              className="text-foreground/50 hover:text-primary transition-colors duration-300">
              <FaGithub size={32} />
            </a>
            <a href="https://discord.com/users/alana808" target="_blank" rel="noopener noreferrer"
              className="text-foreground/50 hover:text-primary transition-colors duration-300">
              <FaDiscord size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};