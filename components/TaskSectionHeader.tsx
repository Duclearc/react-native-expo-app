import { TaskInput } from "@/components/TaskInput";
import { TitleText } from "@/components/TitleText";
import { View } from "react-native";

export const TaskSectionHeader = ({ title }: { title: string }) => {
  return (
    <View className="w-full flex-row justify-between items-center mb-5">
      <TitleText>{title}</TitleText>
      <TaskInput />
    </View>
  );
};
