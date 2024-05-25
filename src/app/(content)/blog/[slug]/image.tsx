import urlBuilder from "@sanity/image-url";
import { SanityImageSource, getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import { env } from "@/env";

export const ImageComponent = ({
  value,
  isInline,
}: {
  value: SanityImageSource & { alt?: string };
  isInline: boolean;
}) => {
  const { width, height } = getImageDimensions(value);
  return (
    <Image
      className="mt-4"
      src={urlBuilder({
        projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: env.NEXT_PUBLIC_SANITY_DATASET,
      })
        .image(value)
        .width(isInline ? 100 : 800)
        .fit("max")
        .auto("format")
        .url()}
      alt={value.alt || " "}
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
