import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { CustomButtonProps } from "@/type";
import cn from "clsx";

export default function CustomButton({
  onPress,
  title = "Click Me",
  style,
  textStyle,
  leftIcon,
  isLoading = false,
}: CustomButtonProps) {
  return (
    <TouchableOpacity className={cn("custom-btn", style)} onPress={onPress}>
      {leftIcon}
      <View className="flex-center flex-row">
        {isLoading
          ? <ActivityIndicator size={"small"} color={"white"} />
          : (
            <Text
              className={cn("text-white-100 paragraph-semibold", textStyle)}
            >
              {title}
            </Text>
          )}
      </View>
    </TouchableOpacity>
  );
}
