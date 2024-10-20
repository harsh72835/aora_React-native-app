import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const CustomButton: React.FC<{
  title: string;
  handlePress: () => void;
  containerStyles: string;
  textStyles?: String;
  isLoading?: boolean;
}> = ({ title, containerStyles, handlePress, isLoading, textStyles }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? "opacity-50" : ""
        }`}
    >
      <Text className={`text-primary text-lg font-psemibold ${textStyles}`}>{title}</Text>
      <StatusBar backgroundColor="#161622" style="light" />
    </TouchableOpacity>
  );
};

export default CustomButton;
