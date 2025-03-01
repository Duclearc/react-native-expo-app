import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TitleText } from "@/components/TitleText";
import { Wrapper } from "@/components/Wrapper";
import { useTasksStore } from "@/stores/taskStore";
import { useUserStore } from "@/stores/userStore";
import { View } from "react-native";
import { toast } from "sonner-native";

export default function Settings() {
  const { setTasks, refreshTasks } = useTasksStore();
  const { id, email, logout } = useUserStore();

  return (
    <Wrapper>
      <TitleText className="self-start mb-5">Settings</TitleText>
      <View className="w-full mb-5">
        <View className="flex-row gap-2">
          <Text className="text-lg font-semibold align-start text-disabled">User ID:</Text>
          <Text className="text-lg align-start text-disabled">{id}</Text>
        </View>
        <View className="flex-row gap-2">
          <Text className="text-lg font-semibold align-start text-disabled">User Email:</Text>
          <Text className="text-lg align-start text-disabled">{email}</Text>
        </View>
      </View>
      <View className="w-full gap-3 justify-between items-center flex-1">
        <View className="w-full">
          <Button
            variant="list"
            className="border-t-2"
            onPress={async () => {
              await refreshTasks();
              toast.success("Tasks reset");
            }}
          >
            <Text>Reset</Text>
          </Button>
          <Button
            variant="list"
            onPress={() => {
              setTasks([]);
              toast.success("All tasks have been removed");
            }}
          >
            <Text>Remove all tasks</Text>
          </Button>
          <Button variant="list" className="border-b-2" onPress={logout}>
            <Text>Logout</Text>
          </Button>
        </View>
        <ThemeToggle />
      </View>
    </Wrapper>
  );
}
