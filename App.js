import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import { Provider } from "react-redux";
import { NativeBaseProvider } from "native-base";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

import colorModeManager from "./themes/colorModeManager";
import store from "./store/createStore";

import NavigationContainer from "./navigations/NavigationContainer";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      ...Ionicons.font,
      ...FontAwesome5.font,
      ...MaterialIcons.font,
    });
  };

  if (!fontLoaded) {
    return (
      <>
        <AppLoading
          startAsync={fetchFonts}
          onFinish={() => {
            setFontLoaded(true);
          }}
          onError={console.warn}
        />
      </>
    );
  }

  return (
    <Provider store={store}>
      <NativeBaseProvider colorModeManager={colorModeManager}>
        <NavigationContainer />
      </NativeBaseProvider>
    </Provider>
  );
}
