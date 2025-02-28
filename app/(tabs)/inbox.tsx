import { TaskItem } from "@/components/TaskItem";
import { Wrapper } from "@/components/Wrapper";
import { Text, View } from "react-native";

export default function Inbox() {
  return (
    <Wrapper>
      <View>
        <Text>Inbox</Text>
        <TaskItem />
      </View>
    </Wrapper>
  );
}
