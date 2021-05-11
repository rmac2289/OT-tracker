import { Ionicons } from "@expo/vector-icons";
import React, { useContext, useState } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import { theme } from "../constants/Colors";
import { ModalContext } from "../context/modalContext";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

const ItemButton = ({ date, eventId }: { date: string; eventId: string }) => {
  const [showModal, setShowModal] = useState(false);
  const [fadeBackground, setFadeBackground] = useContext(ModalContext);

  const toggleModal = () => {
    setShowModal(!showModal);
    setFadeBackground(!fadeBackground);
  };
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight style={styles.editButton}>
        <View>
          <Ionicons color={theme.itemtext} size={30} name="create-outline" />
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={toggleModal} style={styles.deleteButton}>
        <View>
          <Ionicons color={theme.button} size={30} name="trash-outline" />
        </View>
      </TouchableHighlight>
      <ConfirmDeleteModal
        date={date}
        eventId={eventId}
        toggleModal={toggleModal}
        showModal={showModal}
      />
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
