import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavigationActions } from "react-navigation";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import { useColorModeValue, useColorMode } from "native-base";

import * as NavigationServices from "../services/NavigationServices";
import MainNavigation from "./MainNavigation";
import Alert from "../components/UI/Alert";

import * as colors from "../constants/color";

const NavigationContainer = () => {
  const dispatch = useDispatch();
  const navRef = useRef();
  const isAuth = useSelector((state) => !!state.auth.token);
  const error = useSelector((state) => state.error.error);

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

  const closeAlertHandler = () => {
    dispatch({ type: "RESET_ERROR" });
  };

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
      {error && (
        <Alert
          show={error}
          title={error.title}
          message={error.message}
          type="error"
          onClose={closeAlertHandler}
        />
      )}
    </PaperProvider>
  );
};

export default NavigationContainer;
