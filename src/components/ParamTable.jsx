export const ParamTable = ({ params }) => (
  <div className="grid grid-cols-[auto_1fr] border border-primary/10 rounded-sm overflow-hidden bg-card mt-4 mb-10">
    {params.flatMap(([name, desc], i) => [
      <span
        key={`${name}-label`}
        className={`caption-text uppercase text-xs text-primary/90 px-4 py-3 transition-colors ${
          i !== 0 ? "border-t border-primary/10" : ""
        }`}
      >
        {name}
      </span>,
      <span
        key={`${name}-desc`}
        className={`eyebrow tracking-wide italic text-foreground/70 lowercase px-4 py-3 transition-colors ${
          i !== 0 ? "border-t border-primary/10" : ""
        }`}
      >
        {desc}
      </span>,
    ])}
  </div>
);