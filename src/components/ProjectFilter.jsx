export const ProjectFilter = ({ tags, active, onChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-6 mb-10">
      {["All", ...tags].map((tag) => {
        const isActive = tag === active;

        return (
          <button
            key={tag}
            onClick={() => onChange(tag)}
            className={`caption-text px-4 py-2 tracking-[0.2em] text-xs rounded-sm border transition-colors duration-300
              ${
                isActive
                  ? "bg-primary/15 text-primary border-primary/40"
                  : "bg-transparent text-foreground/55 border-primary/15 hover:border-primary/30 hover:text-foreground/80"
              }`}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
};