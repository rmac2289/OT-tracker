import React, { useState } from "react";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AddOtModal from "../components/AddOtModal";
import ItemList from "../components/ItemList";
import { MonoText } from "../components/StyledText";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

export default function TabOneScreen() {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <View style={modalOpen ? styles.containerBackground : styles.container}>
      <LinearGradient
        style={styles.gradient}
        colors={[theme.gradientstart, theme.background]}
      />
      <View style={styles.titleView}>
        <MonoText style={styles.titleText}>Upcoming Overtime</MonoText>
        <TouchableOpacity
          style={styles.addOt}
          disabled={modalOpen}
          onPress={toggleModal}
        >
          <Ionicons
            size={30}
            name="add-outline"
            color="#f5f3f4"
            style={{
              fontSize: 50,
              textAlign: "center",
              marginLeft: 3,
            }}
          />
        </TouchableOpacity>
      </View>
      <ItemList />

      <AddOtModal isModalOpen={modalOpen} toggleModal={toggleModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    backgroundColor: theme.background,
    paddingTop: 50,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get("screen").height,
  },
  titleView: {
    backgroundColor: theme.titlebackground,
    width: "100%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    margin: 10,
    marginTop: 5,
    marginBottom: 25,
  },
  titleText: {
    fontSize: 20,
    color: theme.titletext,
    fontWeight: "600",
  },
  containerBackground: {
    alignItems: "center",
    height: "100%",
    opacity: 0.35,
  },
  addOt: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: theme.button,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
  },
  addOtText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
