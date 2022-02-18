import React, { useReducer, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Keyboard, StyleSheet } from "react-native";
import { Image, View, Text } from "native-base";
import HideWithKeyboard from "react-native-hide-with-keyboard";
import { LinearGradient } from "expo-linear-gradient";

import ColorModeWrapper from "../../components/UI/ColorModeWrapper";
import Input from "../../components/UI/InputGenerator";
import Button from "../../components/UI/Button";
import StatusBar from "../../components/UI/StatusBar";
import KeyIcon from "../../assets/icons/key_1.png";
import Spekta from "../../assets/icons/spekta.png";

import { FORM_UPDATE, formReducer } from "../../utils/formReducer";

import { login } from "../../store/actions/auth";
import * as colors from "../../constants/color";

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authLoader.loginLoading);

  const [show, setShow] = useState(false);
  const togglePassword = () => setShow(!show);

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      username: null,
      password: null,
    },
    inputValidities: {
      username: false,
      password: false,
    },
    formIsValid: false,
  });

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_UPDATE,
        input: inputIdentifier,
        value: inputValue,
        isValid: inputValidity,
      });
    },
    [dispatchFormState]
  );

  const loginSubmitHandler = () => {
    Keyboard.dismiss();
    dispatch(
      login(formState.inputValues.username, formState.inputValues.password)
    );
  };

  return (
    <>
      <StatusBar />
      <ColorModeWrapper>
        <View
          w="100%"
          h="25%"
          alignItems="center"
          style={{
            justifyContent: "center",
          }}
        >
          <LinearGradient
            colors={["rgba(243,146,0,0.8)", "rgba(243,146,0,0)"]}
            style={styles.Overlay}
          ></LinearGradient>
          <Image w="100%" source={KeyIcon} alt="Alternate Text" size="sm" />
          <Text style={{ color: colors.light.border }}>LOGIN</Text>
        </View>

        <View
          w="100%"
          h="75%"
          alignItems="center"
          style={{
            backgroundColor: "#fff",
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          }}
          px={5}
        >
          <View w="100%" mt={5} alignItems="center">
            <Text style={{ color: colors.light.border }} mb={5} fontSize="md">
              <Text bold>PT. Kimia Farma Tbk.</Text> Plant Jakarta
            </Text>

            <Input
              id="username"
              placeholder="Username"
              label="Username"
              variant="filled"
              isRequired={true}
              onInputChange={inputChangeHandler}
              initialValue={formState.inputValues.username}
              required
            />

            <Input
              id="password"
              placeholder="*****"
              label="Password"
              inputType="password"
              isRequired={true}
              onInputChange={inputChangeHandler}
              initialValue={formState.inputValues.password}
              show={show}
              togglePassword={togglePassword}
              required
              size="md"
            />

            <Button
              w="100%"
              size="lg"
              isDisabled={!formState.formIsValid}
              isLoading={loading}
              isLoadingText="loading.."
              onPress={loginSubmitHandler}
            >
              Login
            </Button>
          </View>

          <HideWithKeyboard
            style={{
              position: "absolute",
              bottom: 0,
              backgroundColor: "transparent",
              justifyContent: "center",
            }}
          >
            <View w="100%" alignItems="center">
              <Image source={Spekta} alt="Alternate Text" size="sm" />
              <Text>©Copyright Hardware & Network</Text>
            </View>
          </HideWithKeyboard>
        </View>
      </ColorModeWrapper>
    </>
  );
};

const styles = StyleSheet.create({
  Overlay: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    paddingLeft: 20,
    paddingTop: 80,
  },
});

export default Login;
