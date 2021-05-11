import React from "react";
import { View, StyleSheet } from "react-native";
import { theme } from "../constants/Colors";
import { MonoText } from "./StyledText";
import ItemButton from "./ItemButton";

interface Props {
  dateDay: string;
  dateMonth: string;
  dateTimeStart: string;
  dateTimeEnd: string;
  eventId: string;
}

const CalendarItem = ({
  dateDay,
  dateMonth,
  dateTimeStart,
  dateTimeEnd,
  eventId,
}: Props) => {
  return (
    <View>
      <View style={styles.otDay}>
        <View>
          <MonoText style={styles.text}>
            {dateDay}, {dateMonth}
          </MonoText>
          <MonoText style={styles.text}>
            {dateTimeStart} to {dateTimeEnd}
          </MonoText>
        </View>
        <ItemButton eventId={eventId} date={`${dateDay}, ${dateMonth}`} />
      </View>
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
    padding: 3,
  },
});

export default CalendarItem;
