import React from "react";
import { Button, useColorModeValue } from "native-base";
import * as colors from "../../constants/color";

const CustomButton = ({ children, ...props }) => {
  const bg = useColorModeValue(colors.light.primary, colors.light.primary);
  let button;
  switch (props.type) {
    default:
      button = (
        <Button bg={bg} {...props}>
          {children}
        </Button>
      );
  }
  return button;
};

export default CustomButton;
