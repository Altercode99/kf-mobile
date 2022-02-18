import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//SCREENS
import StartupScreen from "../screens/Startup";
import LoginScreen from "../screens/Auth/Login";
import HomeScreen from "../screens/Home";

const defaultNavOptions = {
  header: () => null,
};

const AuthNavigator = createStackNavigator(
  {
    Login: LoginScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const MainNavigator = createSwitchNavigator({
  Startup: StartupScreen,
  Auth: AuthNavigator,
  App: AppNavigator,
});

export default createAppContainer(MainNavigator);
