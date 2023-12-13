import { StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import categoriesData from "../data/categories_data.json";
import GenderBook from "../components/GenderBook.jsx";
import Search from "../components/Search.jsx";

const Categories = ({ onSelectGenderEvent }) => {
  const renderCategoryItem = ({ item }) => {
    return (
      <GenderBook
        gender={item}
        onSelectGenderEvent={onSelectGenderEvent}
      ></GenderBook>
    );
  };

  return (
    <>
      <Header title="Libros por categorías" />
      <FlatList
        data={categoriesData}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item}
      />
    </>
  );
};

export default Categories;
