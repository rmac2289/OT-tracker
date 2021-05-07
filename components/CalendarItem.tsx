import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MonoText } from "./StyledText";
import { TouchableHighlight } from "react-native-gesture-handler";

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
    backgroundColor: "rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rightButton: {
    padding: 15,
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});

export default CalendarItem;
