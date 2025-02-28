import { useColorScheme } from "@/hooks/useColorScheme";
import { NAV_THEME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import * as SwitchPrimitives from "@rn-primitives/switch";
import { forwardRef } from "react";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";

const Switch = forwardRef<SwitchPrimitives.RootRef, SwitchPrimitives.RootProps>(
  ({ className, ...props }, ref) => {
    const { colorScheme } = useColorScheme();
    const translateX = useDerivedValue(() => (props.checked ? 18 : 0));
    const animatedRootStyle = useAnimatedStyle(() => {
      return {
        backgroundColor: interpolateColor(
          translateX.value,
          [0, 18],
          [NAV_THEME[colorScheme].input, NAV_THEME[colorScheme].primary]
        ),
      };
    });
    const animatedThumbStyle = useAnimatedStyle(() => ({
      transform: [
        { translateX: withTiming(translateX.value, { duration: 200 }) },
      ],
    }));
    return (
      <Animated.View
        style={animatedRootStyle}
        className={cn(
          "h-8 w-[46px] rounded-full",
          props.disabled && "opacity-50"
        )}
      >
        <SwitchPrimitives.Root
          className={cn(
            "flex-row h-8 w-[46px] shrink-0 items-center rounded-full border-2 border-transparent",
            props.checked ? "bg-primary" : "bg-input",
            className
          )}
          {...props}
          ref={ref}
        >
          <Animated.View style={animatedThumbStyle}>
            <SwitchPrimitives.Thumb className="h-7 w-7 rounded-full bg-background shadow-md shadow-foreground/25 ring-0" />
          </Animated.View>
        </SwitchPrimitives.Root>
      </Animated.View>
    );
  }
);
Switch.displayName = "SwitchNative";

export { Switch };
