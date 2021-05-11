import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { ModalContextProvider } from "./context/modalContext";

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <ModalContextProvider>
      <SafeAreaProvider style={{ backgroundColor: "lightgrey" }}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    </ModalContextProvider>
  );
}
