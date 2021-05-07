import React, { useState } from "react";
import { Button, Dimensions, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AddOtModal from "../components/AddOtModal";
import ItemList from "../components/ItemList";
import { Text, View } from "../components/Themed";
import { MonoText } from "../components/StyledText";

export default function TabOneScreen() {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <View style={modalOpen ? styles.containerBlur : styles.container}>
      <ItemList />
      <TouchableOpacity
        style={styles.addOt}
        disabled={modalOpen}
        onPress={toggleModal}
      >
        <MonoText style={styles.addOtText}>add new shift</MonoText>
      </TouchableOpacity>
      <AddOtModal isModalOpen={modalOpen} toggleModal={toggleModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
  },
  containerBlur: {
    alignItems: "center",
    height: "100%",
    opacity: 0.35,
  },
  addOt: {
    width: Dimensions.get("screen").width * 0.75,
    padding: 10,
    backgroundColor: "black",
    color: "white",
    margin: 5,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 75,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.2)",
  },
  addOtText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
