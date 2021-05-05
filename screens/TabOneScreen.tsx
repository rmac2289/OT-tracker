import React, { useState } from "react";
import { Button, StyleSheet } from "react-native";
import AddOtModal from "../components/AddOtModal";
import ItemList from "../components/ItemList";
import { Text, View } from "../components/Themed";

export default function TabOneScreen() {
  const [modalToggle, setModalToggle] = useState(false);
  const toggleModal = () => {
    setModalToggle(!modalToggle);
  };

  return (
    <View style={styles.container}>
      <ItemList />
      <Button onPress={toggleModal} title="add ot" />
      <AddOtModal isModalOpen={modalToggle} toggleModal={toggleModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
