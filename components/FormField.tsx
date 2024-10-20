import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { platformColor } from "nativewind";
import { icons, images } from "@/constants";

const FormField: React.FC<{
  title: string;
  value: string;
  placeHolder: string;
  handleChange: (value: string) => void;
  otherStyles: string;
  keyboardType?: string;
}> = ({
  title,
  value,
  handleChange,
  otherStyles,
  keyboardType,
  placeHolder,
}) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
      <View className={`space-y-2 ${otherStyles}`}>
        <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
        <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row">
          <TextInput
            className="flex-1 text-white font-psemibold text-base"
            value={value}
            placeholder={placeHolder}
            placeholderTextColor={"#7b7b8b"}
            onChangeText={handleChange}
            secureTextEntry={title === "Password" && !showPassword}
          />
          {title === "Password" && (
            <TouchableOpacity
              onPress={() => {
                setShowPassword(!showPassword);
              }}
            >
              <Image source={!showPassword ? icons.eye : icons.eyeHide} resizeMode="contain" className="h-6 w-6" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

export default FormField;
