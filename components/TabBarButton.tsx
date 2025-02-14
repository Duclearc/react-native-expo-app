import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useEffect } from "react";
import { Pressable, PressableProps } from "react-native";
import Animated, {
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";

export const icons = {
  index: () => null,
  inbox: (props: any) => (
    <MaterialCommunityIcons name="inbox" size={26} {...props} />
  ),
  today: (props: any) => (
    <MaterialCommunityIcons
      name="clock-time-nine-outline"
      size={26}
      {...props}
    />
  ),
  settings: (props: any) => (
    <MaterialCommunityIcons name="cog-outline" size={26} {...props} />
  ),
};
export type PossibleRoutes = keyof typeof icons;

interface TabBarButtonProps extends PressableProps {
  isFocused: boolean;
  label: string;
  routeName: PossibleRoutes;
  color: string;
}

export function TabBarButton(props: TabBarButtonProps) {
  const { isFocused, label, routeName, color } = props;

  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
      { duration: 350 }
    );
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => ({
    transform: [{ scale: interpolate(scale.value, [0, 1], [1, 1.4]) }],
    top: interpolate(scale.value, [0, 1], [0, 8]),
  }));

  const animatedTextStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scale.value, [0, 1], [1, 0]),
  }));

  // ignore "index" route
  return routeName === "index" ? null : (
    <Pressable {...props} className="justify-center items-center gap-1">
      <Animated.View style={[animatedIconStyle]}>
        {icons[routeName]({ color })}
      </Animated.View>

      <Animated.Text style={[{ color, fontSize: 11 }, animatedTextStyle]}>
        {label}
      </Animated.Text>
    </Pressable>
  );
}
