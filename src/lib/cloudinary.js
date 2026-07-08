const CLOUD_NAME = "dguq85nkf";

export const cld = (filename, { quality = "standard", width } = {}) => {
  if (quality === "original") {
    // no transformation — serves the exact uploaded file, untouched
    return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${filename}`;
  }
  const q = quality === "showcase" ? "q_auto:best" : "q_auto:good";
  const w = width ? `,w_${width}` : "";
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,${q}${w}/${filename}`;
};

export const cldVideo = (filename, { quality = "standard" } = {}) => {
  if (quality === "original") {
    return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${filename}`;
  }
  const q = quality === "showcase" ? "q_auto:best" : "q_auto:good";
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/f_auto,${q}/${filename}`;
};

// PDFs/raw files — no transforms needed, just direct delivery
export const cldRaw = (filename) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${filename}`;