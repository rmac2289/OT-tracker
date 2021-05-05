import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, Platform } from "react-native";
import * as Calendar from "expo-calendar";

interface Props {}

const ItemList = (props: Props) => {
  const [ot, setOt] = useState<any>([]);
  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === "granted") {
        let id = "CEE92FC3-0669-4308-B0EA-D84FBC331F52";
        const calendars = await Calendar.getEventsAsync(
          [id],
          new Date(),
          new Date(2021, 8)
        );
        let events = { calendars };

        let filtered = events.calendars.filter(
          (v) => v.title === "Ross Forced OT"
        );
        console.log(filtered);
        setOt(filtered);
      }
    })();
  }, []);

  return (
    <ScrollView style={styles.scrollview}>
      {ot.map((event: Calendar.Event, index: number) => {
        return (
          <View key={index} style={styles.otDay}>
            <Text style={styles.text}>
              {new Date(event.startDate).toString().slice(0, 4)},{" "}
              {new Date(event.startDate).toString().slice(4, 11)}
            </Text>

            <Text style={styles.text}>
              {new Date(event.startDate).toString().slice(16, 21)}-
              {new Date(event.endDate).toString().slice(16, 21)}
            </Text>
          </View>
        );
      })}
    </ScrollView>
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
  scrollview: {
    width: "100%",
  },
});

export default ItemList;
