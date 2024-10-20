import { View, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "../../constants";
import { Text } from "react-native"
// import { colors } from "../../";

const TabsLayout = () => {

  const TabIcon: React.FC<{
    icon: ImageSourcePropType;
    color: any;
    name: string;
    focused: boolean;
  }> = ({ icon, color, name, focused }) => {
    return (
      <View className="items-center justify-center gap-2">
        <Image source={icon} resizeMode="contain" tintColor={color} className="w-4 h-4" />
        <Text className={`${focused ? "font-psemibold" : 'font-pregular'}`} style={{ color: color }}>{name}</Text>
      </View>
    );
  };

  return (
    <>
      <Tabs screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFa001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: '#161622',
          borderWidth: 1,
          borderTopColor: '#232533',
          height: 84
        }
      }}>
        <Tabs.Screen
          name='home'
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.home}
                  color={color}
                  name={"Home"}
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name='create'
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.plus}
                  color={color}
                  name={"Create"}
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name='bookmark'
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.bookmark}
                  color={color}
                  name={"Bookmark"}
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.profile}
                  color={color}
                  name={"Profile"}
                  focused={focused}
                />
              );
            },
          }}
        />
        {/* <Tabs.Screen />
        <Tabs.Screen />
        <Tabs.Screen /> */}
      </Tabs>
    </>
  );
};

export default TabsLayout;
