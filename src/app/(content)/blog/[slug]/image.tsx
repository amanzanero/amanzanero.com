import { env } from "@/env";
import { SanityImageSource, getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import Image from "next/image";

export const ImageComponent = ({
  value,
  isInline,
}: {
  value: SanityImageSource & { alt?: string };
  isInline: boolean;
}) => {
  const { width, height, src, alt } = getImageData(value);
  return (
    <Image
      className="mt-4"
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={90}
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
};

export const getImageData = (value: SanityImageSource & { alt?: string }) => {
  const { width, height } = getImageDimensions(value);
  return {
    src: urlBuilder({
      projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: env.NEXT_PUBLIC_SANITY_DATASET,
    })
      .image(value)
      .width(800)
      .fit("max")
      .auto("format")
      .url(),
    alt: value.alt || " ",
    width,
    height,
  };
};
