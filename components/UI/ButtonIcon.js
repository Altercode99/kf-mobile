import React from "react";
import { Button, useColorModeValue, Icon } from "native-base";
import * as colors from "../../constants/color";

const CustomButton = ({ children, name, as, type, ...props }) => {
  const bg =
    type == "primary"
      ? useColorModeValue(colors.light.primary, colors.light.secondary)
      : useColorModeValue(colors.light.btnSecondary, colors.dark.btnSecondary);
  const bgLoading =
    type == "primary"
      ? useColorModeValue(colors.light.btnLoading, colors.dark.btnLoading)
      : useColorModeValue(
          colors.light.btnSecondaryLoading,
          colors.dark.btnSecondaryLoading
        );

  return (
    <Button
      leftIcon={<Icon as={as} name={name} size={5} />}
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
