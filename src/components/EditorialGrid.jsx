export const EditorialGrid = ({ images, alt = "" }) => {
  const count = images.length;

  // Auto-derive a sensible top/bottom split from the image count.
  // 4 images → 2/2 even split. Everything else → 3 on top, rest below
  // (capped at 2 on the bottom row, matching the original editorial look).
  const topCount = count === 4 ? 2 : Math.min(3, count);
  const top = images.slice(0, topCount);
  const bottom = images.slice(topCount, topCount + 2);

  const topCols = topCount === 2 ? "grid-cols-2" : "grid-cols-2 md:grid-cols-3";

  return (
    <div className="flex flex-col gap-1">
      <div className={`grid ${topCols} gap-1`}>
        {top.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${alt} ${i + 1}`}
            className="w-full object-cover border border-primary/10"
            style={{
              aspectRatio: "4/3",
              borderRadius:
                i === 0
                  ? "4px 0 0 0"
                  : i === top.length - 1
                    ? "0 4px 0 0"
                    : "0",
            }}
          />
        ))}
      </div>
      {bottom.length > 0 && (
        <div
          className={`grid gap-1 ${bottom.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}
        >
          {bottom.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${alt} ${top.length + i + 1}`}
              className="w-full object-cover object-top border border-primary/10"
              style={{
                aspectRatio: "16/11",
                borderRadius:
                  bottom.length === 1
                    ? "0 0 4px 4px"
                    : i === 0
                      ? "0 0 0 4px"
                      : "0 0 4px 0",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};