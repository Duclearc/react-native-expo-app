import { useColorScheme } from "@/hooks/useColorScheme";
import { Text, TextProps } from "react-native";

export const TitleText = (props: TextProps) => {
  const { isDarkColorScheme } = useColorScheme();
  return (
    <Text className="text-2xl font-medium mb-3 text-textDefault dark:text-textOnDark">
      {props.children}
    </Text>
  );
};
