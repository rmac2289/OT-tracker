import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, Platform } from "react-native";
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
    <View>
      {ot.map((event: Calendar.Event, index: number) => {
        return (
          <View style={styles.otDay}>
            <Text>
              {new Date(event.startDate).toString().slice(0, 21)} -{" "}
              {new Date(event.endDate).toString().slice(16, 21)}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  otDay: {
    padding: 5,
    borderColor: "black",
    borderWidth: 2,
    margin: 10,
  },
});

export default ItemList;
