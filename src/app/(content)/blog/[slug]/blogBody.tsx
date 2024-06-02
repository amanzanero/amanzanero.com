import { ImageComponent } from "./image";
import { A, BlockQuote, H1, H2, H3, H4, P } from "@/components/ui/typography";
import {
  PortableText,
  type PortableTextReactComponents,
} from "@portabletext/react";

const components: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => (
      <P className="mt-2 [&:not(:first-child)]:mt-2">{children}</P>
    ),
    blockquote: ({ children }) => <BlockQuote>{children}</BlockQuote>,
    h1: ({ children }) => <H1>{children}</H1>,
    h2: ({ children }) => <H2 className="mt-8">{children}</H2>,
    h3: ({ children }) => <H3 className="mt-4">{children}</H3>,
    h4: ({ children }) => <H4>{children}</H4>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-5 pt-2 sm:pl-4">{children}</ul>
    ),
    numbered: ({ children }) => (
      <ol className="list-decimal pl-5 pt-2 sm:pl-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    numbered: ({ children }) => <li>{children}</li>,
  },
  marks: {
    link: ({ value, children }) => {
      // check if same domain
      const isExternalDomain = !value?.href?.startsWith(
        "https://amanzanero.com",
      );

      return (
        <A href={value?.href} newTab={isExternalDomain}>
          {children}
        </A>
      );
    },
  },
  types: {
    image: ImageComponent,
  },
};

export const BlockBody: React.FC<{
  blocks: any;
}> = ({ blocks }) => {
  return <PortableText value={blocks} components={components} />;
};
