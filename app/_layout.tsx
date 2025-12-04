import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import "./global.css";

export default function RootLayout() {
  const [fonstLoaded, error] = useFonts({
    "Quicksand-Light": require("../assets/fonts/Quicksand-Light.ttf"),
    "Quicksand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
    "Quicksand-SemiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
  });

  useEffect(() => { 
    if (error) throw error;
    if (fonstLoaded) SplashScreen.hideAsync();
  }, [fonstLoaded, error]);

  return <Stack screenOptions={{ headerShown: false }} />;
}
