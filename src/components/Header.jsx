import { View, Text, StyleSheet } from "react-native";
import { colors } from "../global/colors.js";

const Header = ({ title }) => {
  return (
    <View style={styles.containerPrimary}>
      <View style={styles.headerContainer}>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: "#030712",
    elevation: 25,
  },
  headerTitle: {
    color: "#d1fae5",
    fontFamily: colors.fonts.secondary,
    fontSize: 23,
  },
});
