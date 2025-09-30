import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "../../components/contents/TabBar";
import Categories from "../../screens/Categories";
import Main from "../../screens/Main";
import TaskModal from "../../screens/modals/TaskModal";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Categories" component={Categories} />
    </Tab.Navigator>
  );
};

export default TabStack;
