import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { HomeScreen } from "../../screens/home-screen";

const ProfileScreen = () => {
  return <Text> Profile</Text>;
};

const SearchScreen = () => {
  return <Text>Search</Text>;
};

const EventsScreen = () => {
  return <Text>Events</Text>;
};

const AddListingScreen = () => {
  return <Text>Add Listing</Text>;
};

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home-outline",
  Search: "search-outline",
  AddListing: "add-outline",
  Events: "calendar-outline",
  Profile: "person-outline",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="AddListing" component={AddListingScreen} />
        <Tab.Screen name="Events" component={EventsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
