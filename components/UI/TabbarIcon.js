import React from "react";
import { useColorModeValue } from "native-base";

import * as colors from "../../constants/color";

const TabbarIcon = ({ Icon, name, size }) => {
  const bottomTabIconColor = useColorModeValue(
    colors.light.textBottomTab,
    colors.dark.textBottomTab
  );
  return <Icon name={name} size={size} color={bottomTabIconColor} />;
};

export default TabbarIcon;
