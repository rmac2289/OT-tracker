import { Ionicons } from "@expo/vector-icons";
import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { theme } from "../constants/Colors";
import { ModalContext } from "../context/modalContext";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import UpdateOtModal from "./UpdateOtModal";

const ItemButton = ({ date, eventId }: { date: string; eventId: string }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [fadeBackground, setFadeBackground] = useContext(ModalContext);

  const toggleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
    setFadeBackground(!fadeBackground);
  };
  const toggleUpdateModal = () => {
    setShowUpdateModal(!showUpdateModal);
    setFadeBackground(!fadeBackground);
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={toggleUpdateModal} style={styles.editButton}>
        <View>
          <Ionicons color={theme.itemtext} size={30} name="create-outline" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleDeleteModal} style={styles.deleteButton}>
        <View>
          <Ionicons color={theme.button} size={30} name="trash-outline" />
        </View>
      </TouchableOpacity>
      <ConfirmDeleteModal
        date={date}
        eventId={eventId}
        toggleModal={toggleDeleteModal}
        showModal={showDeleteModal}
      />
      <UpdateOtModal
        eventId={eventId}
        toggleUpdateModal={toggleUpdateModal}
        showUpdateModal={showUpdateModal}
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
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ItemButton;
