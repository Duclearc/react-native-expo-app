import "@/global.css";
import { useColorScheme } from "@/hooks/useColorScheme";
import { NAV_THEME } from "@/lib/constants";
import {
  DarkTheme,
  DefaultTheme,
  Theme,
  ThemeProvider,
} from "@react-navigation/native";
import { PortalHost } from "@rn-primitives/portal";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useLayoutEffect, useRef, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { Toaster } from "sonner-native";

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  ...DarkTheme,
  colors: NAV_THEME.dark,
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  SplashScreen.hideAsync();
  const hasMounted = useRef(false);
  const { isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = useState(false);

  useIsomorphicLayoutEffect(() => {
    if (hasMounted.current) {
      return;
    }

    setIsColorSchemeLoaded(true);
    hasMounted.current = true;
  }, []);

  if (!isColorSchemeLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
        <StatusBar style={isDarkColorScheme ? "light" : "dark"} />
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false, animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="login"
            options={{ headerShown: false, animation: "slide_from_left" }}
          />
        </Stack>
        <Toaster
          position="bottom-center"
          theme="dark"
          closeButton
          style={{ bottom: 60 }}
        />
        <PortalHost />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const useIsomorphicLayoutEffect = useLayoutEffect;

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";
