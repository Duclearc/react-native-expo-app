import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Text } from "@/components/Text";
import { useUserStore } from "@/stores/userStore";
import { Eye, EyeClosed } from "lucide-react-native";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  SafeAreaView,
  View,
} from "react-native";
import { toast } from "sonner-native";

export default function LoginScreen() {
  const userStore = useUserStore();

  const duclearcLogo = require("@/assets/images/logo.png");

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const authUser = async () => {
    setIsLoading(true);
    if (!email) {
      toast.error("Email is invalid");
    } else if (!password) {
      toast.error("Password is missing");
    } else {
      const userCredentials = {
        email,
        password,
      };
      try {
        userStore.login(userCredentials);
      } catch (error) {
        toast.error("Login failed");
        console.error(error);
      }
    }
    setIsLoading(false);
  };

  return (
    <SafeAreaView className="dark:bg-bgOnDark bg-bgDefault flex-1">
      <View className="flex-1 items-center justify-start w-full px-5 pt-10 android:pt-20 flex">
        <Image
          source={duclearcLogo}
          className="object-contain w-full h-32 mb-20"
          style={{ objectFit: "contain" }}
        />
        <View className="w-full flex gap-10 mb-10">
          <View className="w-full items-center">
            <Text className="dark:text-textOnDark text-textDefault font-bold text-4xl">
              Welcome
            </Text>
          </View>
          <View className="w-full self-center flex gap-10">
            <View className="px-2 gap-5">
              <View>
                <Text className="text-xl font-semibold tracking-widest">
                  Email
                </Text>
                <Input
                  value={email}
                  onChangeText={setEmail}
                  className="h-[47px] w-full items-center justify-center border border-solid border-borderOnDark"
                  autoComplete="email"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  autoCapitalize="none"
                />
              </View>
              <View>
                <Text className="text-xl font-semibold tracking-widest">
                  Password
                </Text>
                <Input
                  value={password}
                  onChangeText={setPassword}
                  className="h-[47px] w-full items-center justify-center border border-solid border-borderOnDark"
                  autoComplete="password"
                  keyboardType="default"
                  textContentType="password"
                  secureTextEntry={isPasswordHidden}
                  autoCapitalize="none"
                />
              </View>
            </View>
            <View className="px-2 gap-5">
              <Button
                variant={"secondary"}
                onPress={() => setIsPasswordHidden(!isPasswordHidden)}
              >
                <View className="w-full flex-row gap-5 justify-center items-center">
                  {isPasswordHidden ? (
                    <EyeClosed
                      size={24}
                      className="text-secondary-foreground"
                    />
                  ) : (
                    <Eye size={24} className="text-secondary-foreground" />
                  )}
                  <Text>{isPasswordHidden ? "Show" : " Hide"} Password</Text>
                </View>
              </Button>
              <Button variant={"round"} onPress={authUser}>
                <Text>Login</Text>
              </Button>
              <Button
                variant={"ghost"}
                onPress={() =>
                  toast.info("This is a demo, silly!\nIt doesn't matter. 😄")
                }
              >
                <Text>What credentials do I use?</Text>
              </Button>
            </View>
          </View>
        </View>
        <ActivityIndicator animating={isLoading} className="my-5" />
      </View>
    </SafeAreaView>
  );
}
