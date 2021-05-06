import React, { useState } from "react";
import { Button, Dimensions, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AddOtModal from "../components/AddOtModal";
import ItemList from "../components/ItemList";
import { Text, View } from "../components/Themed";

export default function TabOneScreen() {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <View style={styles.container}>
      <ItemList />
      <TouchableOpacity
        style={styles.addOt}
        disabled={modalOpen}
        onPress={toggleModal}
      >
        <Text style={styles.addOtText}>add new shift</Text>
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
