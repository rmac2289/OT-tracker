import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  dateDay: string;
  dateMonth: string;
  dateTimeStart: string;
  dateTimeEnd: string;
}

const CalendarItem = ({
  dateDay,
  dateMonth,
  dateTimeStart,
  dateTimeEnd,
}: Props) => {
  return (
    <View style={styles.otDay}>
      <Text style={styles.text}>
        {dateDay}, {dateMonth}
      </Text>
      <Text style={styles.text}>
        {dateTimeStart} - {dateTimeEnd}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  otDay: {
    padding: 10,
    borderColor: "black",
    borderBottomWidth: 2,
    margin: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
  },
});

export default CalendarItem;
