import React from "react";
import { StatusBar, useColorModeValue } from "native-base";
import * as colors from "../../constants/color";

export default CustomStatusBar = (props) => {
  const lightColor = props.lightColor
    ? props.lightColor
    : colors.light.statusbar;

  const darkColor = props.darkColor ? props.darkColor : colors.dark.statusbar;

  const statusBarColor = useColorModeValue(lightColor, darkColor);

  return (
    <StatusBar backgroundColor={statusBarColor} barStyle="light-content" />
  );
};
