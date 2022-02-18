import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ActivityIndicator } from "react-native";
import { useColorModeValue } from "native-base";

import { checkState } from "../store/actions/auth";

import * as colors from "../constants/color";

import ColorModeWrapper from "../components/UI/ColorModeWrapper";

export default Startup = () => {
  const dispatch = useDispatch();
  const color = useColorModeValue(colors.light.primary, colors.dark.primary);

  useEffect(() => {
    dispatch(checkState());
  }, [dispatch, checkState]);

  return (
    <ColorModeWrapper>
      <ActivityIndicator size="large" color={color} />
    </ColorModeWrapper>
  );
};
