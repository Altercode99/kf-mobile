import React from "react";
import { Text } from "native-base";
import { useColorModeValue } from "native-base";

import * as colors from "../../constants/color";

const TabbarLabel = ({ children }) => {
  const bottomTabTextColor = useColorModeValue(
    colors.light.textBottomTab,
    colors.dark.textBottomTab
  );
  return (
    <Text fontSize={10} color={bottomTabTextColor}>
      {children}
    </Text>
  );
};

export default TabbarLabel;
