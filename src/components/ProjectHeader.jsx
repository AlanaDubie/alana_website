/**
 * ProjectHeader
 * The repeated hero image + eyebrow + title + tools row at the top of
 * every project detail page. Drop it in place of those four elements.
 *
 * Props:
 *   image    — hero image path
 *   category — eyebrow label (e.g. "Procedural", "Coding", "3D")
 *   title    — project title string
 *   tools    — array of tool name strings, e.g. ["Houdini", "Maya"]
 */
export const ProjectHeader = ({ image, category, title, tools = [] }) => (
  <>
    <img
      src={image}
      alt={title}
      className="w-full lg:max-h-80 rounded-md mb-8 object-cover border border-primary/10"
    />

    <span className="eyebrow">{category}</span>

    <h1 className="text-foreground text-6xl font-serif font-light mt-2 mb-5">
      {title}
    </h1>

    {tools.length > 0 && (
      <p className="text-foreground/40 text-xs font-sans uppercase tracking-widest mb-8">
        Tools:
        {tools.map((tool) => (
          <span
            key={tool}
            className="text-foreground/70 font-sans text-xs border border-primary/20 rounded-sm px-2 py-1 ml-2 tracking-wide normal-case"
          >
            {tool}
          </span>
        ))}
      </p>
    )}
  </>
);