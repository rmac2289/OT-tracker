import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, Platform } from "react-native";
import * as Calendar from "expo-calendar";
import CalendarItem from "./CalendarItem";
import { calendar_id } from "../config";
import { formatDate } from "../lib/formatDate";

const ItemList = () => {
  const [ot, setOt] = useState<Calendar.Event[]>([]);
  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === "granted") {
        const calendars = await Calendar.getEventsAsync(
          [calendar_id],
          new Date(),
          new Date(2021, 8)
        );
        let events = { calendars };

        let filtered = events.calendars.filter(
          (event) => event.title === "Ross Forced OT"
        );
        setOt(filtered);
      }
    })();
  }, []);

  return (
    <ScrollView style={styles.scrollview}>
      {ot.map((event: Calendar.Event, index: number) => {
        return (
          <CalendarItem
            key={index}
            dateDay={formatDate(new Date(event.startDate), 0, 3)}
            dateMonth={formatDate(new Date(event.startDate), 4, 10)}
            dateTimeStart={formatDate(new Date(event.startDate), 16, 21)}
            dateTimeEnd={formatDate(new Date(event.endDate), 16, 21)}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  scrollview: {
    width: "100%",
  },
});

export default ItemList;
