import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../screens/Main";

const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
};

export default Navigation;