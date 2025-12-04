import { Button, Text, View } from "react-native";
import { router } from "expo-router";

export default function SignUp() {
  return (
    <View>
      <Text>SignUp</Text>
      <Button title="Sign In" onPress={() => router.push("/sign-in")} />
    </View>
  );
}
