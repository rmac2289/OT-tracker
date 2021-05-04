import React, { useState } from "react";
import { View, Text, Modal, Button, StyleSheet } from "react-native";
import * as Calendar from "expo-calendar";
import DateTimePicker from "@react-native-community/datetimepicker";

interface Props {
  isModalOpen: boolean;
  toggleModal: () => void;
}

const AddOtModal = (props: Props) => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const addEvent = async () => {
    const { status } = await Calendar.requestCalendarPermissionsAsync();
    if (status === "granted") {
      let id = "CEE92FC3-0669-4308-B0EA-D84FBC331F52";
      const calendars = await Calendar.createEventAsync(id, {
        title: "Ross Forced OT",
        startDate: startDate,
        endDate: endDate,
      });
      console.log(calendars);
    }
  };
  const onChangeStart = (event: Event, selectedDate: Date) => {
    const currentDate = selectedDate || startDate;
    setStartDate(currentDate);
  };
  const onChangeEnd = (event: Event, selectedDate: Date) => {
    const currentDate = selectedDate || endDate;
    setEndDate(currentDate);
  };

  const { isModalOpen, toggleModal } = props;
  return (
    <Modal visible={isModalOpen}>
      <View style={styles.container}>
        <Text>Add OT</Text>
        <View>
          <Text>Start:</Text>
          <DateTimePicker
            testID="dateTimePicker"
            value={startDate}
            mode="datetime"
            is24Hour={true}
            display="default"
            onChange={onChangeStart}
          />
        </View>
        <View>
          <Text>End:</Text>
          <DateTimePicker
            testID="dateTimePicker"
            value={startDate}
            mode="datetime"
            is24Hour={true}
            display="default"
            onChange={onChangeEnd}
          />
        </View>
      </View>
      <Button onPress={addEvent} title="Add event" />
      <Button onPress={toggleModal} title="Close" />
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 25,
    width: "95%",
  },
});

export default AddOtModal;
