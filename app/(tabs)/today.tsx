import { Wrapper } from "@/components/Wrapper";
import { classes } from "@/lib/constants";
import { Text, View } from "react-native";

export default function Today() {
  return (
    <Wrapper>
      <Text className={`${classes.title}`}>Today</Text>
    </Wrapper>
  );
}
