import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font"
import { colors } from "./src/global/colors.js";
import Navigator from "./src/navigation/Navigator.jsx";

export default function App() {

  const [fontLoaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
  })
  if (!fontLoaded) return <ActivityIndicator />

  return (
    <Navigator />
  );
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: colors.layout.background,
    height: "100%"
  }
})
