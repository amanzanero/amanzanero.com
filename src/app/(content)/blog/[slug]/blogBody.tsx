import {
  PortableText,
  type PortableTextReactComponents,
} from "@portabletext/react";

export const components: Partial<PortableTextReactComponents> = {};

export const BlockBody: React.FC<{
  blocks: any;
}> = ({ blocks }) => {
  return <PortableText value={[blocks]} components={components} />;
};
