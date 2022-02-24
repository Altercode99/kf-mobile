import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkState } from "../store/actions/auth";

import StatusBar from "../components/UI/StatusBar";
import ColorModeWrapper from "../components/UI/ColorModeWrapper";
import ActivityIndicator from "../components/UI/ActivityIndicator";

export default Startup = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkState());
  }, [dispatch, checkState]);

  return (
    <>
      <StatusBar />
      <ColorModeWrapper>
        <ActivityIndicator />
      </ColorModeWrapper>
    </>
  );
};
