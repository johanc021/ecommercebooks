import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";

const Search = ({ onSearchHandlerEvent }) => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <View style={styles.containerSearch}>
      <TextInput
        style={styles.textInputSearch}
        onChangeText={setSearchInput}
        placeholder="Buscar..."
        value={searchInput}
      />
      <TouchableOpacity
        onPress={() => {
          onSearchHandlerEvent(searchInput);
        }}
        style={styles.touchableButtonsSearch}
      >
        <AntDesign name="search1" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={null}>
        <Entypo name="cross" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  containerSearch: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginTop: 10,
  },
  textInputSearch: {
    width: "80%",
    fontSize: 19,
  },
  touchableButtonsSearch: {
    flexDirection: "row",
    gap: 10,
  },
});
