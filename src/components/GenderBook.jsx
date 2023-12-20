import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Card from "./Card.jsx";
import { colors } from "../global/colors.js";

const GenderItem = ({ gender, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("books", { gender })}>
      <Card style={styles.cardContainer}>
        <Text style={styles.cardText}>--- {gender} ---</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default GenderItem;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 4,
    paddingVertical: 30,
    paddingLeft: 5,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 15,
    shadowColor: colors.card.shadow,
    elevation: 5,
  },
  cardText: {
    fontFamily: colors.fonts.primary,
    textTransform: "capitalize",
    fontSize: 20,
  },
});
