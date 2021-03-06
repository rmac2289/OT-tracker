import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, ActivityIndicator, View } from "react-native";
import * as Calendar from "expo-calendar";
import CalendarItem from "./CalendarItem";
import { calendar_id } from "../config";
import { formatDate } from "../lib/formatDate";
import { theme } from "../constants/Colors";

const ItemList = () => {
  const [workday, setWorkday] = useState<Calendar.Event[]>([]);
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
          (event) =>
            event.title === "Ross Forced OT" || event.title === "Ross Work"
        );
        setWorkday(filtered);
      }
    })();
  }, [workday]);

  return (
    <ScrollView style={styles.scrollview}>
      {!workday.length ? (
        <View style={styles.indicator}>
          <ActivityIndicator color={theme.button} size="large" />
        </View>
      ) : (
        workday.map((event: Calendar.Event, index: number) => {
          return (
            <CalendarItem
              title={event.title}
              key={index}
              eventId={event.id}
              dateDay={formatDate(new Date(event.startDate), 0, 3)}
              dateMonth={formatDate(new Date(event.startDate), 4, 10)}
              dateTimeStart={formatDate(new Date(event.startDate), 16, 21)}
              dateTimeEnd={formatDate(new Date(event.endDate), 16, 21)}
            />
          );
        })
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  scrollview: {
    width: "100%",
    position: "relative",
  },
  indicator: {
    position: "absolute",
    height: 100,
    width: 100,
    top: "50%",
    left: "50%",
    marginLeft: -50,
    marginTop: 100,
  },
});

export default ItemList;
