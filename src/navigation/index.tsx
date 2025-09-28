import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../screens/Main";
import TaskModal from "../screens/modals/TaskModal";

const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="TaskModal" component={TaskModal} options={{
        presentation: 'transparentModal',
        gestureEnabled: true,
        fullScreenGestureEnabled: true,
        contentStyle: { backgroundColor: "transparent"}
  }}/>
    </Stack.Navigator>
  );
};

export default Navigation;