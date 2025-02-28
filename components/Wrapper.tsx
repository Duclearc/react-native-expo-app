import { ReactNode } from "react";
import { View, SafeAreaView } from "react-native";

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaView
      className="dark:bg-bgOnDark bg-bgDefault flex-1"
      style={{ backgroundColor: "white" }}
    >
      <View className="flex-1 items-center justify-start w-full px-5 pt-10 android:pt-20 flex w-full dark:bg-bgOnDark bg-bgDefault">
        {children}
      </View>
    </SafeAreaView>
  );
};
