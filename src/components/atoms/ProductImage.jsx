import React from "react";

function normalizeRemoteUrl(url) {
  if (!url) return "";
  // Some sources send already-encoded pieces inside the URL (e.g. %2520).
  // Decode once to avoid double-encoding artifacts in the request.
  try {
    return decodeURIComponent(url);
  } catch {
    return url;
  }
}

const ProductImage = React.forwardRef(function ProductImage(
  {
    src,
    alt,
    className,
    width,
    height,
    loading = "lazy",
    decoding = "async",
    referrerPolicy = "no-referrer",
    onLoad,
    onError,
  },
  ref
) {
  const safeSrc = normalizeRemoteUrl(src);

  if (!safeSrc) return null;

  // Use a plain <img> to bypass Vercel/Next image optimization quotas (402).
  // This loads directly from the remote CDN.
  return (
    <img
      ref={ref}
      src={safeSrc}
      alt={alt || ""}
      className={className}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      referrerPolicy={referrerPolicy}
      onLoad={onLoad}
      onError={onError}
    />
  );
});

export default ProductImage;
