import * as React from "react";
import { StyleSheet } from "react-native";
import Schedule from "../components/Schedule";
import { MonoText } from "../components/StyledText";

import { View } from "../components/Themed";
import { theme } from "../constants/Colors";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <MonoText style={styles.titleText}>All Shifts</MonoText>
      </View>
      <Schedule />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgrey",
    paddingTop: 50,
    height: "100%",
  },
  titleView: {
    backgroundColor: theme.titlebackground,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    margin: 5,
  },
  titleText: {
    fontSize: 20,
    color: theme.titletext,
    fontWeight: "600",
  },
});
