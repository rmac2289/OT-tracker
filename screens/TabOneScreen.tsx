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
      <Text style={styles.title}>Upcoming OT</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
