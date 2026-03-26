const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Img(
  props: React.ImgHTMLAttributes<HTMLImageElement>
) {
  const rawSrc = typeof props.src === "string" ? props.src : "";
  const src = rawSrc.startsWith("/") ? `${basePath}${rawSrc}` : rawSrc;

  return <img {...props} src={src} />;
}
