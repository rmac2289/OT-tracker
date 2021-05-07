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
      <View style={styles.titleView}>
        <MonoText style={styles.titleText}>Upcoming Overtime</MonoText>
      </View>
      <ItemList />
      <TouchableOpacity
        style={styles.addOt}
        disabled={modalOpen}
        onPress={toggleModal}
      >
        <MonoText style={styles.addOtText}>+ add new shift +</MonoText>
      </TouchableOpacity>
      <AddOtModal isModalOpen={modalOpen} toggleModal={toggleModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    backgroundColor: "lightgrey",
    paddingTop: 50,
  },
  titleView: {
    marginBottom: 20,
  },
  titleText: {
    fontSize: 20,
    backgroundColor: "lightgrey",
    fontWeight: "600",
  },
  containerBlur: {
    alignItems: "center",
    height: "100%",
    opacity: 0.35,
  },
  addOt: {
    width: Dimensions.get("screen").width,
    padding: 10,
    backgroundColor: "black",
    color: "white",
    marginBottom: 0,
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
    borderTopWidth: 2,
    borderBottomWidth: 2,
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
