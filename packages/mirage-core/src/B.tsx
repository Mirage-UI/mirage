import React, { ButtonHTMLAttributes, FC, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@mirage/utils";

const variants = cva("bg-red-500 px-4 py-2 rounded", {
  variants: {
    variant: {
      default: "bg-blue-500 rounded-md",
      primary: "bg-blue-300 rounded-lg",
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
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {}

const B = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return <button ref={ref} className={cn(variants({ variant, size, className }))} {...props} />;
  }
);

export { B };
