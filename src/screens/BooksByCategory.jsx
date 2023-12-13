import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import Header from "../components/Header.jsx";
import booksData from "../data/books_data.json";
import BookItem from "../components/BookItem.jsx";
import { useState, useEffect } from "react";
import Search from "../components/Search.jsx";

const BooksByCategory = ({ gender }) => {
  const [booksByGender, setBooksByGender] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const booksFilterByGender = booksData.filter(
      (book) => book.gender === gender
    );
    const booksFiltered = booksFilterByGender.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );

    setBooksByGender(booksFiltered);
  }, [gender, search]);

  const onSearch = (search) => {
    setSearch(search);
  };

  const renderBookItem = ({ item }) => <BookItem book={item} />;

  return (
    <>
      <Header title={"Libros por categoría"} />
      <Search onSearchHandlerEvent={onSearch} />
      <FlatList
        data={booksByGender}
        renderItem={renderBookItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default BooksByCategory;

const styles = StyleSheet.create({});
