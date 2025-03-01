import { TabBar } from "@/components/TabBar";
import { useUserStore } from "@/stores/userStore";
import { Redirect, Tabs } from "expo-router";
import { View } from "react-native";

export default function TabLayout() {
  const userStore = useUserStore();
  if (!userStore.id) return <Redirect href="/login" />;
  return (
    <View className="dark:bg-bgOnDark bg-bgDefault flex-1">
      <Tabs tabBar={(props) => <TabBar {...props} />}>
        <Tabs.Screen
          name="index"
          options={{
            tabBarItemStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="inbox"
          options={{
            title: "Inbox",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="highlights"
          options={{
            title: "Highlights",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            headerShown: false,
          }}
        />
      </Tabs>
    </View>
  );
}
