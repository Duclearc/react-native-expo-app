import { TextClassContext } from "@/components/Text";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, forwardRef, ElementRef } from "react";
import { Pressable } from "react-native";

const buttonVariants = cva(
  "group flex items-center justify-center rounded-md",
  {
    variants: {
      variant: {
        default: "bg-primary active:opacity-90",
        destructive: "bg-destructive active:opacity-90",
        outline: "border border-input bg-background active:bg-accent",
        secondary: "bg-secondary active:opacity-80",
        ghost: "active:bg-accent",
        round: "bg-accent active:opacity-90 rounded-3xl",
        list: "border-y dark:border-border justify-between items-center w-full",
      },
      size: {
        default: "h-10 px-4 py-2 native:h-12 native:px-5 native:py-3",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8 native:h-14",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const buttonTextVariants = cva(
  "text-sm native:text-base font-medium text-foreground",
  {
    variants: {
      variant: {
        default: "text-primary-foreground uppercase tracking-wider font-bold",
        destructive:
          "text-destructive-foreground uppercase tracking-wider font-bold",
        outline:
          "group-active:text-accent-foreground uppercase tracking-wider font-bold",
        secondary:
          "text-secondary-foreground group-active:text-secondary-foreground uppercase tracking-wider font-bold",
        ghost:
          "group-active:text-accent-foreground uppercase tracking-wider font-bold",
        round: "text-textOnDark font-bold uppercase tracking-wider font-bold",
        list: "text-default dark:text-textOnDark uppercase font-bold group-active:underline tracking-wider font-bold",
      },
      size: {
        default: "",
        sm: "",
        lg: "text-lg",
        icon: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<ElementRef<typeof Pressable>, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <TextClassContext.Provider value={buttonTextVariants({ variant, size })}>
        <Pressable
          className={cn(
            props.disabled && "opacity-50",
            buttonVariants({ variant, size, className })
          )}
          ref={ref}
          role="button"
          {...props}
        />
      </TextClassContext.Provider>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonTextVariants, buttonVariants };
export type { ButtonProps };
