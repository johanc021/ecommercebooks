import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font"
import { colors } from "./src/global/colors.js";
import TabNavigator from "./src/navigation/TabNavigator.jsx";
import { Provider } from "react-redux"
import store from "./src/store/index.js";

export default function App() {

  const [fontLoaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
  })
  if (!fontLoaded) return <ActivityIndicator />

  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: colors.layout.background,
    height: "100%"
  }
})
