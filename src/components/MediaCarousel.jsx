import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MediaCarousel({ items }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1));

  const next = () => setIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  return (
    <div className="w-full mb-12 flex justify-center">
      <div className="w-full bg-[linear-gradient(to_bottom,hsl(var(--background)),color-mix(in_srgb,hsl(var(--foreground))_10%,hsl(var(--background))),hsl(var(--background)))] px-6">
        {/* ───── MAIN ROW ───── */}
        <div className="flex items-center justify-center lg:gap-10">
          {/* LEFT */}
          <button
            onClick={prev}
            className="text-foreground/40 hover:text-primary px-6 transition select-none"
          >
            <ChevronLeft size={48} strokeWidth={1.5} />
          </button>

          {/* ───── VIEWPORT ───── */}
          <div
            className="relative w-full min-w-sm max-w-5xl overflow-hidden rounded-sm shadow-lg shadow-background"
            style={{ aspectRatio: "16/9" }}
          >
            <div
              className="flex h-full transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${index * 100}%)`,
                width: "100%",
              }}
            >
              {items.map((item, i) => (
                <div
                  key={i}
                  style={{ minWidth: "100%", width: "100%" }}
                  className="h-full shrink-0 flex items-center justify-center bg-background"
                >
                  {/* IMAGE */}
                  {item.type === "image" && (
                    <img
                      src={item.src}
                      className="w-full h-full object-contain"
                      alt=""
                    />
                  )}

                  {/* YOUTUBE */}
                  {item.type === "video" && (
                    <iframe
                      src={formatYT(item.src)}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                      title="video"
                    />
                  )}

                  {/* LOCAL VIDEO FILE */}
                  {item.type === "videoFile" && (
                    <video
                      src={item.src}
                      className="w-full h-full object-contain"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <button
            onClick={next}
            className="text-foreground/40 hover:text-primary px-6 transition select-none"
          >
            <ChevronRight size={48} strokeWidth={1.5} />
          </button>
        </div>

        {/* ───── THUMBNAILS ───── */}
        <div className="flex gap-3 overflow-x-auto justify-center py-4 mb-4">
          {items.map((item, i) => {
            const active = i === index;

            return (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`relative shrink-0 transition duration-300 ${active ? "z-10" : ""}`}
              >
                <div
                  className={`h-16 w-28 rounded-md transition duration-300
                    ${
                      active
                        ? "scale-105 ring-2 ring-primary shadow-lg shadow-background"
                        : "scale-100 ring-1 ring-primary/20 opacity-60 hover:opacity-100"
                    }`}
                >
                  <div className="w-full h-full rounded-md overflow-hidden">
                    <img
                      src={getThumbnail(item)}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ───── HELPERS ───── */

function getThumbnail(item) {
  // manual thumbnail ALWAYS wins
  if (item.thumb) return item.thumb;

  // images
  if (item.type === "image") return item.src;

  // youtube
  if (item.type === "video") {
    const id = item.src.includes("youtu.be")
      ? item.src.split("youtu.be/")[1]
      : item.src.split("/embed/")[1]?.split("?")[0];

    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  }

  // fallback (for videoFile if no thumb provided)
  return "/fallback-thumb.jpg"; // optional placeholder
}

function formatYT(url) {
  let id = "";

  if (url.includes("youtu.be")) {
    id = url.split("youtu.be/")[1];
  } else if (url.includes("/embed/")) {
    id = url.split("/embed/")[1]?.split("?")[0];
  }

  return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`;
}