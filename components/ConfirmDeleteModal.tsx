import React, { useState } from "react";
import { Alert, Modal, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { theme } from "../constants/Colors";
import { MonoText } from "./StyledText";
import * as Calendar from "expo-calendar";

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
  const [disabled, setDisabled] = useState(false);

  const deleteEvent = async () => {
    setDisabled(true);
    try {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === "granted") {
        Calendar.deleteEventAsync(eventId);
        console.log(`Event updated.`);
        Alert.alert("Shift deleted!", "", [
          { text: "OK", onPress: () => toggleModal() },
        ]);
        setDisabled(false);
      }
    } catch (error) {
      Alert.alert(error.message);
      setDisabled(false);
    }
  };
  return (
    <Modal
      style={styles.modalBox}
      visible={showModal}
      transparent={true}
      animationType="fade"
    >
      <View style={styles.modal}>
        <View>
          <MonoText style={styles.title}>Delete {date}?</MonoText>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            disabled={disabled}
            onPress={deleteEvent}
            style={styles.deleteButton}
          >
            <MonoText style={styles.deleteText}>Delete</MonoText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={toggleModal}>
            <MonoText style={styles.cancelText}>Cancel</MonoText>
          </TouchableOpacity>
        </View>
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
    justifyContent: "space-evenly",
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  deleteText: {
    color: "white",
    fontSize: 16,
  },
  deleteButton: {
    padding: 10,
    backgroundColor: theme.button,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 60,
    width: 135,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  cancelButton: {
    padding: 10,
    backgroundColor: theme.modalButton,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 60,
    width: 135,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  cancelText: {
    color: "white",
    fontSize: 16,
  },
});

export default ConfirmDeleteModal;
