const skills = [
  { name: "Houdini",       icon: "assets/icons/houdini_badge_flat.svg" },
  { name: "Unity",         icon: "https://skillicons.dev/icons?i=unity" },
  { name: "Unreal Engine", icon: "https://skillicons.dev/icons?i=unreal" },
  { name: "Maya",          icon: "https://cdn.simpleicons.org/autodeskmaya" },
  { name: "Photoshop",     icon: "https://skillicons.dev/icons?i=ps" },
  { name: "Python",        icon: "https://skillicons.dev/icons?i=py" },
  { name: "C#",            icon: "https://skillicons.dev/icons?i=cs" },
  { name: "Java",          icon: "https://skillicons.dev/icons?i=java" },
  { name: "JavaScript",    icon: "https://skillicons.dev/icons?i=js" },
  { name: "React",         icon: "https://skillicons.dev/icons?i=react" },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-2 px-4 relative">
      <div className="container mx-auto max-w-8xl">

        <p className="eyebrow mb-6 text-left">Software</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-2">
          {skills.map((skill, key) => (
            <div key={key}
              className="bg-card p-2 rounded-sm border border-primary/10 card-hover hover:border-primary/25"
            >
              <div className="text-left m-1 flex items-center gap-2">
                <img src={skill.icon} alt={`${skill.name} icon`} className="w-6 h-6" />
                {/* eyebrow without uppercase for skill names */}
                <h3 className="eyebrow tracking-[0.02em] text-foreground normal-case">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};