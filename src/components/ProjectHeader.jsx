export const ProjectHeader = ({ image, category, title, tools = [] }) => (
  <>
    <img
      src={image}
      alt={title}
      className="w-full lg:max-h-80 rounded-sm mb-8 object-cover border border-primary/12"
    />
    <span className="eyebrow">{category}</span>
    <h1 className="t-h1 mt-3 mb-5">{title}</h1>
    {tools.length > 0 && (
      <p className="caption-text mb-8 normal-case">
        Tools:
        {tools.map((tool) => (
          <span key={tool} className="caption-text normal-case text-foreground/60 border border-primary/18 rounded-sm px-2 py-1 ml-2">
            {tool}
          </span>
        ))}
      </p>
    )}
  </>
);