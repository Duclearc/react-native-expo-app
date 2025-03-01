import { X } from "@/lib/icons";
import { cn } from "@/lib/utils";
import * as DialogPrimitive from "@rn-primitives/dialog";
import { forwardRef, ReactNode } from "react";
import { StyleSheet, View, type ViewProps } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { BlurView } from "expo-blur";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = forwardRef<
  DialogPrimitive.OverlayRef,
  DialogPrimitive.OverlayProps
>(({ className, children, ...props }, ref) => {
  return (
    <DialogPrimitive.Overlay
      style={StyleSheet.absoluteFill}
      className={cn("flex bg-black/80 justify-center items-center", className)}
      {...props}
      ref={ref}
    >
      <Animated.View
        entering={FadeIn.duration(150)}
        exiting={FadeOut.duration(150)}
      >
        <BlurView
          intensity={20}
          className="flex-1 items-center justify-center min-w-full"
        >
          {children as ReactNode}
        </BlurView>
      </Animated.View>
    </DialogPrimitive.Overlay>
  );
});

DialogOverlay.displayName = "DialogOverlayNative";

const DialogContent = forwardRef<
  DialogPrimitive.ContentRef,
  DialogPrimitive.ContentProps & { portalHost?: string }
>(({ className, children, portalHost, ...props }, ref) => {
  const { open } = DialogPrimitive.useRootContext();
  return (
    <DialogPortal hostName={portalHost}>
      <DialogOverlay>
        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            "max-w-lg w-10/12 gap-4 border border-border bg-background p-6 shadow-lg rounded-lg",
            className
          )}
          {...props}
        >
          {children}
          <DialogPrimitive.Close
            className={"absolute right-4 top-4 p-0.5 rounded-sm opacity-70"}
          >
            <X
              size={18}
              className={cn(
                "text-muted-foreground",
                open && "text-accent-foreground"
              )}
            />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogOverlay>
    </DialogPortal>
  );
});
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: ViewProps) => (
  <View
    className={cn("flex flex-col gap-1.5 text-center sm:text-left", className)}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...props }: ViewProps) => (
  <View
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end gap-2",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = forwardRef<
  DialogPrimitive.TitleRef,
  DialogPrimitive.TitleProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg text-xl text-foreground font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = forwardRef<
  DialogPrimitive.DescriptionRef,
  DialogPrimitive.DescriptionProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-base text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
