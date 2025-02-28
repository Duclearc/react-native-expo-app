import { Wrapper } from "@/components/Wrapper";
import { classes } from "@/lib/constants";
import { Text, View } from "react-native";

export default function Settings() {
  return (
    <Wrapper>
      <Text className={`${classes.title}`}>Settings</Text>
    </Wrapper>
  );
}
