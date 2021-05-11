import React, { useContext } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { theme } from "../constants/Colors";
import { MonoText } from "./StyledText";
import { ModalContext } from "../context/modalContext";

interface Props {
  showModal: boolean;
  toggleModal: () => void;
  eventId: string;
  date: string;
}

const ConfirmDeleteModal = ({
  showModal,
  toggleModal,
  eventId,
  date,
}: Props) => {
  const [fadeBackground, setFadeBackground] = useContext(ModalContext);
  console.log(fadeBackground);
  return (
    <Modal
      style={styles.modalBox}
      visible={showModal}
      transparent={true}
      animationType="fade"
    >
      <View style={styles.modal}>
        <MonoText style={styles.title}>Delete OT for {date}?</MonoText>
        <TouchableHighlight style={styles.deleteButton}>
          <MonoText style={styles.deleteText}>Delete</MonoText>
        </TouchableHighlight>
        <TouchableHighlight style={styles.cancelButton} onPress={toggleModal}>
          <MonoText style={styles.cancelText}>Cancel</MonoText>
        </TouchableHighlight>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBox: {
    position: "relative",
  },
  title: {
    fontSize: 20,
    color: "white",
    margin: 10,
  },
  modal: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    marginLeft: -163,
    marginTop: -100,
    top: "50%",
    height: 200,
    width: 326,
    backgroundColor: theme.modalBackground,
    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  deleteText: {
    color: "white",
    fontSize: 16,
  },
  deleteButton: { padding: 10, backgroundColor: theme.button },
  cancelButton: { padding: 10, backgroundColor: theme.modalButton },
  cancelText: {
    color: "white",
    fontSize: 16,
  },
});

export default ConfirmDeleteModal;
