import React from "react"
import { Tabs } from "expo-router"
import FontAwesome from "@expo/vector-icons/FontAwesome"

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "darkBlue" }}>
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name='home' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='messages'
        options={{
          title: "Messages",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name='envelope' color={color} />
          ),
        }}
      />
    </Tabs>
  )
}

export default TabLayout