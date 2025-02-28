import { ThemeToggle } from "@/components/ThemeToggle";
import { TitleText } from "@/components/TitleText";
import { Wrapper } from "@/components/Wrapper";
import { View } from "react-native";

export default function Settings() {
  return (
    <Wrapper>
      <TitleText>Settings</TitleText>
      <View className="w-full">
        <ThemeToggle />
      </View>
    </Wrapper>
  );
}
