import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

//SCREENS
import StartupScreen from "../screens/Startup";
import LoginScreen from "../screens/Auth/Login";
import HomeScreen from "../screens/Home";
import AbsenScreen from "../screens/Absen/Absen";
import ScannerScreen from "../screens/Absen/Scanner";
import HistoryAbsenScreen from "../screens/Absen/History";
import FilterAbsenScreen from "../screens/Absen/FilterAbsen";

import TabbarIcon from "../components/UI/TabbarIcon";
import TabbarLabel from "../components/UI/TabbarLabel";
import * as colors from "../constants/color";

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

const HistoryAbsenNavigator = createStackNavigator(
  {
    History: HistoryAbsenScreen,
    FilterAbsen: FilterAbsenScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const AbsensiNavigation = createMaterialBottomTabNavigator(
  {
    Absen: {
      screen: AbsenScreen,
      navigationOptions: {
        tabBarLabel: <TabbarLabel>Absen</TabbarLabel>,
        tabBarIcon: (tabInfo) => {
          return <TabbarIcon Icon={FontAwesome} name="clock-o" size={25} />;
        },
      },
    },
    HistoryAbsen: {
      screen: HistoryAbsenNavigator,
      navigationOptions: {
        tabBarLabel: <TabbarLabel>Riwayat Absensi</TabbarLabel>,
        tabBarIcon: (tabInfo) => {
          return <TabbarIcon Icon={FontAwesome} name="history" size={25} />;
        },
      },
    },
  },
  {
    activeColor: colors.light.secondary,
    shifting: true,
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
  Absensi: AbsensiNavigation,
  Scanner: ScannerScreen,
});

export default createAppContainer(MainNavigator);
