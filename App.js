import React from "react";
import { HomeScreen } from "./src/screens/home-screen";
import { AppNavigator } from "./src/infrastructure/navigation/app.navigation";

export default function App() {
  return (
    <>
      <AppNavigator>
        <HomeScreen />
      </AppNavigator>
    </>
  );
}
