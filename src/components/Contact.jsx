import { useState } from "react";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Copy, Check } from "lucide-react";
import { cldRaw } from "../lib/cloudinary";

const contactRows = [
  { icon: MdEmail,    label: "Email",    value: "alanaldubie@gmail.com", href: null, copyable: true },
  { icon: FaLinkedin, label: "LinkedIn", value: "linkedin.com/in/alana-dubie", href: "https://linkedin.com/in/alana-dubie", copyable: true },
  { icon: FaGithub,   label: "GitHub",   value: "github.com/alanadubie", href: "https://github.com/alanadubie", copyable: true },
];

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
      className="shrink-0 p-1.5 rounded-sm text-foreground/30 hover:text-primary hover:bg-primary/10 transition-colors duration-200"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="pt-24 pb-32 px-4">
      <div className="container mx-auto max-w-4xl">

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] md:gap-8 gap-12 items-start">

          {/* Left Column */}
          <div className="text-left pr-8 order-2 md:order-1">
            <h2 className="t-h1 mb-4">Alana Dubie</h2>
            <p className="caption-text font-medium tracking-[0.2em] mb-4">Software Engineer · Technical Artist · Tools Developer</p>
            <p className="t-body mb-5">
              Based in <span className="text-foreground/80">California</span>, open to relocation.
            </p>

            <a href={cldRaw("AlanaResume.pdf")} target="_blank" rel="noopener noreferrer"
                className="caption-text font-medium tracking-[0.2em] text-foreground/55 border border-primary/20 rounded-sm px-4 py-2 hover:text-primary hover:border-primary/50 transition-colors duration-300 flex items-center w-fit gap-2">
                <FaFileAlt size={14} />
                VIEW RESUME
              </a>
          </div>

          {/* ── Right: Contact Table ── */}
          <div className="w-full md:min-w-sm text-left order-1 md:order-2">
            <p className="eyebrow mb-6">Contact</p>

            <div className="border border-primary/10 rounded-sm bg-card overflow-hidden">
            {contactRows.map(({ icon: Icon, label, value, href, copyable }, i) => (
              <div
                key={label}
                className={`group grid grid-cols-[auto_1fr_auto] gap-4 px-5 py-3 items-center ${
                  i !== 0 ? "border-t border-primary/10" : ""
                }`}
              >
                <Icon
                  size={18}
                  className="text-primary/70 shrink-0"
                  aria-label={label}
                />
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="t-body text-left text-foreground/85 hover:text-primary transition-colors duration-300 truncate"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="t-body text-left text-foreground/85 select-text truncate">
                    {value}
                  </span>
                )}
                {copyable ? (
                  <CopyButton text={href ?? value} />
                ) : (
                  <div className="w-[27px]" aria-hidden="true" />
                )}
              </div>
            ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};