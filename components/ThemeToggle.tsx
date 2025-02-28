import { Switch } from "@/components/Switch";
import { useColorScheme } from "@/hooks/useColorScheme";
import { MoonStar, Sun } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { Pressable, View } from "react-native";

export function ThemeToggle() {
  const { isDarkColorScheme, setColorScheme } = useColorScheme();

  function toggleColorScheme() {
    const newTheme = isDarkColorScheme ? "light" : "dark";
    setColorScheme(newTheme);
  }

  return (
    <View className="flex-row gap-3">
      <Switch checked={isDarkColorScheme} onCheckedChange={toggleColorScheme} />
      {isDarkColorScheme ? (
        <MoonStar
          className="text-disabled"
          size={23}
          strokeWidth={2}
        />
      ) : (
        <Sun
          className="text-accent"
          size={24}
          strokeWidth={2}
        />
      )}
    </View>
  );

  return (
    <Pressable onPress={toggleColorScheme}>
      <View style={{ borderColor: "red", borderWidth: 1 }}>
        {isDarkColorScheme ? (
          <MoonStar
            fill={"#ff0000"}
            className="text-disabled"
            size={23}
            strokeWidth={1.25}
            color={"#ff0000"}
          />
        ) : (
          <Sun
            fill={"#ff0000"}
            className="text-accent"
            size={24}
            strokeWidth={1.25}
            color={"#ff0000"}
          />
        )}
      </View>
    </Pressable>
  );
}
