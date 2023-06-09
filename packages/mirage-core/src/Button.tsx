import React, { ButtonHTMLAttributes, FC, forwardRef } from "react";
import { cn } from "@mirage/utils";
import { VariantProps, cva } from "class-variance-authority";

const variants = cva("bg-red-500 px-4 py-2 rounded", {
  variants: {
    variant: {
      default: "bg-blue-500 rounded-md",
      primary: "bg-blue-300 rounded-lg",
      secondary: "bg-amber-300 rounded-xl",
      danger: "bg-red-500 rounded-sm",
    },

    size: {
      large: "px-8 py-4",
      small: "px-2 py-1",
    },
  },

  defaultVariants: {
    size: "large",
    variant: "default",
  },
});

export interface ButtonProps
  extends React.ComponentPropsWithRef<"button">,
    VariantProps<typeof variants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

export { Button };
