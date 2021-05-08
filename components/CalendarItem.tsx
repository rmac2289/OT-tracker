import React from "react";
import { View, StyleSheet } from "react-native";
import { theme } from "../constants/Colors";
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
    borderColor: theme.itemborder,
    borderWidth: 2,
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: theme.itembackground,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: theme.shadow,
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
    color: theme.itemtext,
  },
});

export default CalendarItem;
