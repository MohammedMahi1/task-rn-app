import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../screens/Main";
import TaskModal from "../screens/modals/TaskModal";
import TabStack from "./tabStacks/TabStack";

const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>

        <TabStack/>
  
    </Stack.Navigator>
  );
};

export default Navigation;