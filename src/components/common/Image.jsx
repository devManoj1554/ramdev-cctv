import React from "react";

function Image({
  src,
  alt,
  className = "",
  loading = "lazy",
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      className={className}
    />
  );
}

export default Image;
