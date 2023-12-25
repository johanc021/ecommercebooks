import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font"
import { colors } from "./src/global/colors.js";
import ShopNavigator from "./src/navigation/ShopNavigator.jsx";
import TabNavigator from "./src/navigation/TabNavigator.jsx";

export default function App() {

  const [fontLoaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
  })
  if (!fontLoaded) return <ActivityIndicator />

  return (
    <TabNavigator />
  );
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: colors.layout.background,
    height: "100%"
  }
})
