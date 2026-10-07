import Image, { type ImageProps } from "next/image";

type Props = Pick<ImageProps, "src" | "alt" | "className" | "placeholder" | "blurDataURL"> & {
  width: number;
  height: number;
  // Required: callers know the actual rendered width; avoid an implicit 100vw.
  sizes: string;
  // Opt in only for a genuine critical above-the-fold image.
  preload?: boolean;
};

export function ResponsiveImage({ preload = false, alt, ...props }: Props) {
  return (
    <Image
      {...props}
      alt={alt}
      preload={preload}
      loading={preload ? undefined : "lazy"}
      quality={75}
      style={{ width: "100%", height: "auto" }}
    />
  );
}
