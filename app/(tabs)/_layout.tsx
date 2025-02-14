import { TabBar } from "@/components/TabBar";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabLayout() {
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
          name="today"
          options={{
            title: "Today",
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
