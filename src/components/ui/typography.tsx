import { cn } from "@/lib/utils";
import React from "react";

type TypographyComponent<
  T = HTMLElement,
  V extends React.HTMLAttributes<T> = React.HTMLAttributes<T>,
  Q = {},
> = React.FC<React.PropsWithChildren<React.DetailedHTMLProps<V, T>> & Q>;

export const H1: TypographyComponent<HTMLHeadingElement> = ({
  className,
  children,
  ...props
}) => (
  <h1
    className={cn(
      className,
      "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
    )}
    {...props}
  >
    {children}
  </h1>
);

export const H2: TypographyComponent<HTMLHeadingElement> = ({
  className,
  children,
  ...props
}) => (
  <h1
    className={cn(
      className,
      "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
    )}
    {...props}
  >
    {children}
  </h1>
);
export const H3: TypographyComponent<HTMLHeadingElement> = ({
  className,
  children,
  ...props
}) => (
  <h1
    className={cn(
      className,
      "scroll-m-20 text-2xl font-semibold tracking-tight",
    )}
    {...props}
  >
    {children}
  </h1>
);

export const H4: TypographyComponent<HTMLHeadingElement> = ({
  className,
  children,
  ...props
}) => (
  <h1
    className={cn(
      className,
      "scroll-m-20 text-xl font-semibold tracking-tight",
    )}
    {...props}
  >
    {children}
  </h1>
);

export const P: TypographyComponent<HTMLParagraphElement> = ({
  className,
  children,
  ...props
}) => (
  <p
    className={cn(className, "leading-7 [&:not(:first-child)]:mt-6")}
    {...props}
  >
    {children}
  </p>
);

export const BlockQuote: TypographyComponent<
  HTMLQuoteElement,
  React.BlockquoteHTMLAttributes<HTMLQuoteElement>
> = ({ className, children, ...props }) => (
  <blockquote
    className={cn(className, "leading-7 [&:not(:first-child)]:mt-6")}
    {...props}
  >
    {children}
  </blockquote>
);

export const A: TypographyComponent<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  { newTab?: true }
> = ({ className, children, newTab, ...props }) => (
  <a
    className={cn(
      className,
      "font-medium text-blue-600 underline-offset-4 hover:underline dark:text-blue-500",
    )}
    {...props}
    target={newTab === true ? "_blank" : props.target}
    rel={newTab === true ? "noopener noreferrer" : props.rel}
  >
    {children}
  </a>
);
