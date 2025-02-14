import { PossibleRoutes, TabBarButton } from "@/components/TabBarButton";
import { themeColors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { View } from "react-native";

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  let { colorScheme } = useColorScheme();

  const activeColor = themeColors.tabBar[colorScheme].tabIconSelected;
  const inactiveColor = themeColors.tabBar[colorScheme].tabIconDefault;

  return (
    <View className="flex-row justify-between align-center bg-white py-3 px-10 mt-5 ios:mb-10 android:mb-5 mx-10 rounded-3xl shadow-md shadow-gray-500/30 dark:bg-bgOnDark bg-bgDefault">
      {state.routes.map((route, index) => {
        const label = descriptors[route.key].options.title ?? route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name as PossibleRoutes}
            color={isFocused ? activeColor : inactiveColor}
            label={label}
          />
        );
      })}
    </View>
  );
}
