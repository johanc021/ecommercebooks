import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../global/colors.js";
import { AntDesign } from "@expo/vector-icons";

const Header = ({ navigation, title }) => {
  return (
    <View style={styles.containerPrimary}>
      <View style={styles.headerContainer}>
        {navigation.canGoBack() ? (
          <TouchableOpacity
            onPress={navigation.goBack}
            style={styles.backButton}
          >
            <AntDesign name="arrowleft" size={28} color="white" />
          </TouchableOpacity>
        ) : null}
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  containerPrimary: {
    backgroundColor: colors.secondary,
  },
  headerContainer: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: "#030712",
    elevation: 25,
  },
  backButton: {
    position: "absolute",
    zIndex: 1,
    paddingLeft: 15,
  },
  headerTitle: {
    flex: 1,
    color: "#d1fae5",
    fontFamily: colors.fonts.secondary,
    fontSize: 23,
    textAlign: "center",
  },
});
