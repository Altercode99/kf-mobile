import React from "react";
import { useColorModeValue } from "native-base";
import { ActivityIndicator } from "react-native";

import * as colors from "../../constants/color";

const MyIndicator = () => {
  const color = useColorModeValue(colors.light.primary, colors.dark.secondary);

  return <ActivityIndicator size="large" color={color} />;
};

export default MyIndicator;
