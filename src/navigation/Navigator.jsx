import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Categories from "../screens/Categories.jsx";
import BooksByCategory from "../screens/BooksByCategory.jsx";
import BookDetail from "../screens/BookDetail.jsx";
import Header from "../components/Header.jsx";

const stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Categorías"
        screenOptions={({ navigation, route }) => ({
          header: () => <Header title={route.name} navigation={navigation} />,
        })}
      >
        <stack.Screen name="Categorías" component={Categories} />
        <stack.Screen
          name="books"
          component={BooksByCategory}
          options={{
            title: "Libros",
          }}
        />
        <stack.Screen
          name="Detalle"
          component={BookDetail}
          options={{
            title: "Detalle del libro",
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
