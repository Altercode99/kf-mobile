import React from "react";
import { StatusBar, useColorModeValue } from "native-base";
import * as colors from "../../constants/color";

export default CustomStatusBar = () => {
  const statusBarColor = useColorModeValue(
    colors.light.statusbar,
    colors.dark.statusbar
  );

  return (
    <StatusBar backgroundColor={statusBarColor} barStyle="light-content" />
  );
};
