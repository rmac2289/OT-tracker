import React, { useState, SyntheticEvent } from "react";
import {
  View,
  Text,
  Modal,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import * as Calendar from "expo-calendar";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Event } from "../types";
import { calendar_id } from "../config";

interface Props {
  isModalOpen: boolean;
  toggleModal: () => void;
}

const AddOtModal = ({ isModalOpen, toggleModal }: Props) => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const addEvent = async () => {
    try {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === "granted") {
        const newEvent = await Calendar.createEventAsync(calendar_id, {
          title: "Ross Forced OT",
          startDate: startDate,
          endDate: endDate,
        });
        console.log(`Event ${newEvent} created.`);
      }
    } catch (error) {
      console.log(error);
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
      presentationStyle="formSheet"
      animationType="slide"
      visible={isModalOpen}
    >
      <View style={styles.modalView}>
        <View style={styles.dateInputs}>
          <Text>New Shift</Text>
          <View style={styles.individualInput}>
            <Text>Start:</Text>
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
            <Text>End:</Text>
            <DateTimePicker
              testID="dateTimeEnd"
              value={startDate}
              // @ts-ignore
              mode="datetime"
              is24Hour={true}
              display="default"
              onChange={onChangeEnd}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addShiftButton} onPress={addEvent}>
            <Text style={styles.buttonText}>Add Shift</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: "95%",
    justifyContent: "space-between",
    marginTop: "auto",
    marginBottom: "auto",
  },
  dateInputs: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  individualInput: {
    width: "100%",
    marginTop: 10,
  },
  closeButton: {
    width: "100%",
    backgroundColor: "rgba(220,0,0,0.6)",
    height: 40,
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
    backgroundColor: "rgba(0,0,200,0.6)",
    height: 40,
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

export default AddOtModal;
