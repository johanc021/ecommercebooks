import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import booksData from "../data/books_data.json";
/* import Header from "../components/Header.jsx"; */
import { useEffect, useState } from "react";
import { colors } from "../global/colors.js";

const BookDetail = ({ route }) => {
  const [bookFound, setBookFound] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isPortrait, setIsPortrait] = useState(true);

  const bookDetail = route.params;

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    height < width ? setIsPortrait(false) : setIsPortrait(true);
  }, [height]);

  useEffect(() => {
    const book = booksData.find((book) => book.id === bookDetail);
    setBookFound(book);
    setIsLoading(false);
  }, [bookDetail]);

  if (!bookFound) {
    return (
      <View style={styles.container}>
        <Text>Libro no encontrado</Text>
      </View>
    );
  }

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          {/* <Header title={"Detalle del producto"} /> */}
          <ScrollView>
            <View style={styles.detailContainerImage}>
              <Image
                style={
                  isPortrait
                    ? styles.thumbnailPortrait
                    : styles.thumbnailLandscape
                }
                source={{ uri: bookFound.thumbnail }}
              />
              <View style={styles.detailContainer}>
                <Text style={styles.title}>{bookFound.title}</Text>
                <Text style={styles.description}>{bookFound.description}</Text>
                <Text style={styles.price}>$ {bookFound.price}</Text>
                <TouchableOpacity
                  style={isPortrait ? styles.buyButton : styles.buyAlt}
                  onPress={() => null}
                >
                  <Text style={styles.buyText}>Comprar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </>
      )}
    </>
  );
};

export default BookDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailContainerImage: {
    marginTop: 10,
    alignItems: "center",
    minWidth: 300,
  },
  detailContainer: {
    marginTop: 10,
    alignItems: "center",
    padding: 10,
    margin: 10,
  },
  thumbnailPortrait: {
    width: "65%",
    height: 400,
    resizeMode: "cover",
    borderRadius: 10,
  },
  thumbnailLandscape: {
    width: "90%",
    height: 400,
    resizeMode: "cover",
    borderRadius: 10,
  },
  detailsContainer: {
    padding: 10,
  },
  title: {
    fontFamily: colors.fonts.secondary,
    fontSize: 32,
  },
  description: {
    fontFamily: colors.fonts.primary,
    fontSize: 20,
    textAlign: "center",
  },
  price: {
    fontFamily: colors.fonts.secondary,
    fontSize: 32,
    color: colors.price,
    marginTop: 10,
  },
  buyButton: {
    marginTop: 10,
    width: 200,
    padding: 10,
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 10,
  },
  buyText: {
    color: "#fff",
    fontFamily: colors.fonts.secondary,
    fontSize: 18,
    padding: 3,
  },
  buyAlt: {
    marginTop: 10,
    width: 200,
    padding: 10,
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
});
