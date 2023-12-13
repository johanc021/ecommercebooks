import { ActivityIndicator, StyleSheet, View } from "react-native";
import Categories from "./src/screens/Categories.jsx";
import BooksByCategory from "./src/screens/BooksByCategory.jsx";
import { useFonts } from "expo-font"
import { useState } from "react";
import { colors } from "./src/global/colors.js";

export default function App() {
  const [genderSelected, setGenderSelected] = useState('')

  const [fontLoaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
  })
  if (!fontLoaded) return <ActivityIndicator />

  const onSelectGender = (gender) => {
    setGenderSelected(gender)
  }
  return (
    <>
      <View style={styles.layout}>
        {genderSelected ?
          <BooksByCategory gender={genderSelected} />
          :
          <Categories onSelectGenderEvent={onSelectGender} />}
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: colors.layout.background,
    height: "100%"
  }
})
