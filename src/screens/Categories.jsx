import { StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
/* import Header from "../components/Header.jsx"; */
import categoriesData from "../data/categories_data.json";
import GenderBook from "../components/GenderBook.jsx";

const Categories = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => {
    return <GenderBook gender={item} navigation={navigation}></GenderBook>;
  };

  return (
    <>
      {/* <Header title="Libros por categorías" /> */}
      <FlatList
        data={categoriesData}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item}
      />
    </>
  );
};

export default Categories;
