import React from "react";
import { Button, useColorModeValue } from "native-base";
import * as colors from "../../constants/color";

const CustomButton = ({ children, ...props }) => {
  const bg = useColorModeValue(colors.light.primary, colors.light.secondary);
  const bgLoading = useColorModeValue(
    colors.light.btnLoading,
    colors.dark.btnLoading
  );
  return (
    <Button
      bg={bg}
      {...props}
      _pressed={{ bg: bgLoading }}
      _loading={{ bg: bgLoading }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
