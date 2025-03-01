import { cn } from "@/lib/utils";
import * as Slot from "@rn-primitives/slot";
import { SlottableTextProps, TextRef } from "@rn-primitives/types";
import { createContext, forwardRef, useContext } from "react";
import { Text as RNText } from "react-native";

export const TextClassContext = createContext<string | undefined>(undefined);

export const Text = forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const textClass = useContext(TextClassContext);
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        className={cn("text-base text-foreground", textClass, className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Text.displayName = "Text";
