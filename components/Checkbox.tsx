import { Check } from "@/lib/icons";
import { cn } from "@/lib/utils";
import * as CheckboxPrimitive from "@rn-primitives/checkbox";
import { forwardRef } from "react";

export const Checkbox = forwardRef<
  CheckboxPrimitive.RootRef,
  CheckboxPrimitive.RootProps
>(({ className, ...props }, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "h-4 w-4 h-[20] w-[20] shrink-0 rounded-sm native:rounded border border-accent disabled:cursor-not-allowed disabled:opacity-50",
        props.checked && "bg-accent",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("items-center justify-center h-full w-full")}
      >
        <Check
          size={12}
          strokeWidth={3.5}
          className="text-primary-foreground"
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
