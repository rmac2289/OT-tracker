import React from "react";
import { View, StyleSheet } from "react-native";
import { MonoText } from "./StyledText";

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
      <MonoText style={styles.text}>
        {dateDay}, {dateMonth}
      </MonoText>
      <MonoText style={styles.text}>
        {dateTimeStart} to {dateTimeEnd}
      </MonoText>
    </View>
  );
};

const styles = StyleSheet.create({
  otDay: {
    padding: 15,
    borderColor: "black",
    borderWidth: 1,
    margin: 5,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontSize: 20,
  },
});

export default CalendarItem;
