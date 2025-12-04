import { Slot } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthLayout() {
  return (
    <SafeAreaView>
      <Text>AuthLayout</Text>
      <Slot />
    </SafeAreaView>
  );
}
