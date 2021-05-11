import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, ActivityIndicator } from "react-native";
import * as Calendar from "expo-calendar";
import CalendarItem from "./CalendarItem";
import { calendar_id } from "../config";
import { formatDate } from "../lib/formatDate";
import { theme } from "../constants/Colors";

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
  }, [ot]);
  return (
    <ScrollView style={styles.scrollview}>
      {!ot.length ? (
        <View style={styles.indicator}>
          <ActivityIndicator color={theme.button} size="large" />
        </View>
      ) : (
        ot.map((event: Calendar.Event, index: number) => {
          return (
            <CalendarItem
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
