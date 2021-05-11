import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import { theme } from "../constants/Colors";

const ItemButton = () => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight style={styles.editButton}>
        <View>
          <Ionicons color={theme.itemtext} size={30} name="create-outline" />
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={styles.deleteButton}>
        <View>
          <Ionicons color={theme.button} size={30} name="trash-outline" />
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  editButton: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButton: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ItemButton;
