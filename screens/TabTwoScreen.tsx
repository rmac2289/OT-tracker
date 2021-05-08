import * as React from "react";
import { StyleSheet } from "react-native";
import Schedule from "../components/Schedule";
import { MonoText } from "../components/StyledText";

import { Text, View } from "../components/Themed";

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
    marginBottom: 20,
  },
  titleText: {
    fontSize: 20,
    backgroundColor: "lightgrey",
    fontWeight: "600",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
