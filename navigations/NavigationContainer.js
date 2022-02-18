import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { NavigationActions } from "react-navigation";

import * as NavigationServices from "../services/NavigationServices";
import MainNavigation from "./MainNavigation";

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

  return <MainNavigation ref={navRef} />;
};

export default NavigationContainer;
