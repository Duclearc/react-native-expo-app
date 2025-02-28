import { cn } from "@/lib/utils";
import * as Slot from "@rn-primitives/slot";
import type {
  SlottableTextProps,
  TextRef,
  ViewRef,
} from "@rn-primitives/types";
import { createContext, forwardRef, useContext } from "react";
import {
  Text as RNText,
  type TextProps,
  View,
  type ViewProps,
} from "react-native";

const TextClassContext = createContext<string | undefined>(undefined);

const Text = forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const textClass = useContext(TextClassContext);
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        className={cn(
          "text-base text-foreground",
          textClass,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Text.displayName = "Text";

const Card = forwardRef<ViewRef, ViewProps>(({ className, ...props }, ref) => (
  <View
    ref={ref}
    className={cn(
      "rounded-lg border-2 dark:border border-border dark:border-disabled bg-card shadow-sm shadow-foreground/10",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = forwardRef<ViewRef, ViewProps>(
  ({ className, ...props }, ref) => (
    <View
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<TextRef, TextProps>(
  ({ className, ...props }, ref) => (
    <Text
      role="heading"
      aria-level={3}
      ref={ref}
      className={cn(
        "text-2xl text-card-foreground font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<TextRef, TextProps>(
  ({ className, ...props }, ref) => (
    <Text
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<ViewRef, ViewProps>(
  ({ className, ...props }, ref) => (
    <TextClassContext.Provider value="text-card-foreground">
      <View ref={ref} className={cn("p-6 pt-0", className)} {...props} />
    </TextClassContext.Provider>
  )
);
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<ViewRef, ViewProps>(
  ({ className, ...props }, ref) => (
    <View
      ref={ref}
      className={cn("flex flex-row items-center p-6 pt-0", className)}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
};

