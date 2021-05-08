import React, { useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AddOtModal from "../components/AddOtModal";
import ItemList from "../components/ItemList";
import { View } from "../components/Themed";
import { MonoText } from "../components/StyledText";
import { Ionicons } from "@expo/vector-icons";

export default function TabOneScreen() {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <View style={modalOpen ? styles.containerBackground : styles.container}>
      <View style={styles.titleView}>
        <MonoText style={styles.titleText}>Upcoming Overtime</MonoText>
      </View>
      <ItemList />
      <TouchableOpacity
        style={styles.addOt}
        disabled={modalOpen}
        onPress={toggleModal}
      >
        <Ionicons
          size={30}
          name="add-outline"
          color="white"
          style={{ fontSize: 50, textAlign: "center" }}
        />
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
  containerBackground: {
    alignItems: "center",
    height: "100%",
    opacity: 0.35,
  },
  addOt: {
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: "black",
    color: "white",
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
  },
  addOtText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
