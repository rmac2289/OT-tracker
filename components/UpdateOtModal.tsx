import React, { useState } from "react";
import { View, Modal, StyleSheet, TouchableOpacity, Alert } from "react-native";
import * as Calendar from "expo-calendar";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Event } from "../types";
import { MonoText } from "./StyledText";
import { theme } from "../constants/Colors";

interface Props {
  showUpdateModal: boolean;
  toggleUpdateModal: () => void;
  eventId: string;
}

const UpdateOtModal = ({
  showUpdateModal,
  toggleUpdateModal,
  eventId,
}: Props) => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [disabled, setDisabled] = useState(false);

  const updateEvent = async () => {
    setDisabled(true);

    try {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === "granted") {
        const updatedEvent = await Calendar.updateEventAsync(eventId, {
          startDate: startDate,
          endDate: endDate,
        });
        console.log(`Event ${updatedEvent} updated.`);
        Alert.alert(`Shift updated!`, "", [
          { text: "OK", onPress: () => toggleUpdateModal() },
        ]);
        setDisabled(false);
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const onChangeStart = (event: Event, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || startDate;
    setStartDate(currentDate);
  };
  const onChangeEnd = (event: Event, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || endDate;
    setEndDate(currentDate);
  };

  return (
    <Modal
      presentationStyle="overFullScreen"
      animationType="slide"
      visible={showUpdateModal}
      transparent={true}
    >
      <View style={styles.modalView}>
        <View style={styles.dateInputs}>
          <MonoText style={styles.title}>Update Shift</MonoText>
          <View style={styles.individualInput}>
            <MonoText style={styles.dateText}>From</MonoText>

            <DateTimePicker
              testID="dateTimeStart"
              value={startDate}
              // @ts-ignore
              mode="datetime"
              is24Hour={true}
              display="default"
              onChange={onChangeStart}
            />
          </View>
          <View style={styles.individualInput}>
            <MonoText style={styles.dateText}>To</MonoText>
            <DateTimePicker
              testID="dateTimeEnd"
              value={endDate}
              // @ts-ignore
              mode="datetime"
              is24Hour={true}
              display="default"
              onChange={onChangeEnd}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            disabled={disabled}
            style={styles.addShiftButton}
            onPress={updateEvent}
          >
            <MonoText style={styles.buttonText}>Update Shift</MonoText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={toggleUpdateModal}
          >
            <MonoText style={styles.buttonText}>Cancel</MonoText>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: theme.modalBackground,
    borderRadius: 5,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: "60%",
    justifyContent: "space-between",
    marginTop: "auto",
    marginBottom: "auto",
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
    width: "100%",
    textAlign: "left",
    color: "white",
  },
  dateInputs: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  individualInput: {
    width: "100%",
    marginTop: 20,
  },
  dateText: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
  },
  closeButton: {
    width: "100%",
    backgroundColor: theme.button,
    height: 60,
    marginTop: 10,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
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
  addShiftButton: {
    width: "100%",
    backgroundColor: theme.modalButton,
    height: 60,
    marginTop: 10,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
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
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
});

export default UpdateOtModal;
