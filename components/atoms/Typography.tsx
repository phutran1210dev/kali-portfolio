import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef, ElementType } from "react";

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "blockquote" | "code" | "lead" | "large" | "small" | "muted";
  as?: ElementType;
}

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = "p", as, ...props }, ref) => {
    const elementType = as || getDefaultElement(variant);
    
    return React.createElement(
      elementType,
      {
        ref,
        className: cn(getVariantClasses(variant), className),
        ...props
      }
    );
  }
);

function getDefaultElement(variant: TypographyProps["variant"]) {
  switch (variant) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return variant;
    case "blockquote":
      return "blockquote";
    case "code":
      return "code";
    default:
      return "p";
  }
}

function getVariantClasses(variant: TypographyProps["variant"]) {
  switch (variant) {
    case "h1":
      return "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent dark:from-gray-100 dark:via-gray-300 dark:to-gray-500";
    case "h2":
      return "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-foreground";
    case "h3":
      return "scroll-m-20 text-2xl font-semibold tracking-tight text-foreground";
    case "h4":
      return "scroll-m-20 text-xl font-semibold tracking-tight text-foreground";
    case "h5":
      return "scroll-m-20 text-lg font-semibold tracking-tight text-foreground";
    case "h6":
      return "scroll-m-20 text-base font-semibold tracking-tight text-foreground";
    case "p":
      return "leading-7 [&:not(:first-child)]:mt-6 text-foreground";
    case "blockquote":
      return "mt-6 border-l-2 border-green-500 pl-6 italic text-muted-foreground font-mono";
    case "code":
      return "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-green-400 border border-green-500/20";
    case "lead":
      return "text-xl text-muted-foreground";
    case "large":
      return "text-lg font-semibold text-foreground";
    case "small":
      return "text-sm font-medium leading-none text-muted-foreground";
    case "muted":
      return "text-sm text-muted-foreground";
    default:
      return "";
  }
}

Typography.displayName = "Typography";

export { Typography };