import { View, Image, ScrollView, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";

const SignIn = () => {
  const [isLoading, setIsloading] = useState(false);
  const [form, setForm] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const submit = () => { };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Log In to Aora
          </Text>
          <FormField
            title="Email"
            value={form.email}
            placeHolder="Enter Email here"
            handleChange={(e: any) =>
              setForm({
                ...form,
                email: e,
              })
            }
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            placeHolder="Enter password here"
            value={form.password}
            handleChange={(e: any) =>
              setForm({
                ...form,
                password: e,
              })
            }
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <CustomButton
            title="Sign In"
            containerStyles="mt-7"
            handlePress={() => {
              submit();
            }}
            isLoading={isLoading}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100">Dont't have account?</Text>
            <Link
              href={"/sign-up"}
              className="text-lg font-psemibold text-secondary"
            >
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
