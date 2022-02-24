import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { NavigationActions } from "react-navigation";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import { useColorModeValue, useColorMode } from "native-base";

import * as NavigationServices from "../services/NavigationServices";
import MainNavigation from "./MainNavigation";

import * as colors from "../constants/color";

const NavigationContainer = () => {
  const navRef = useRef();
  const isAuth = useSelector((state) => !!state.auth.token);

  useEffect(() => {
    NavigationServices.setNavigator(navRef.current);
  }, []);

  useEffect(() => {
    if (!isAuth) {
      navRef.current.dispatch(
        NavigationActions.navigate({
          routeName: "Login",
        })
      );
    }
  }, [isAuth]);

  const tabbarColor = useColorModeValue(
    colors.light.bottomTab,
    colors.dark.bottomTab
  );
  const { colorMode } = useColorMode();

  const theme = {
    ...DefaultTheme,
    dark: colorMode == "dark" ? true : false,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: tabbarColor,
      accent: "#f1c40f",
    },
  };

  return (
    <PaperProvider theme={theme}>
      <MainNavigation ref={navRef} />
    </PaperProvider>
  );
};

export default NavigationContainer;
