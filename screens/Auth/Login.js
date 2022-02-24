import React, { useReducer, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Keyboard, Dimensions } from "react-native";
import { Image, View, Text, useColorModeValue } from "native-base";
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

const HEIGHT = Dimensions.get("window").height;

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authLoader.loginLoading);

  const [show, setShow] = useState(false);
  const togglePassword = () => setShow(!show);

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      username: "superuser",
      password: "janxploit",
    },
    inputValidities: {
      username: true,
      password: true,
    },
    formIsValid: true,
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

  const loadingGradient1 = useColorModeValue(
    colors.light.loginGradient1,
    colors.dark.loginGradient1
  );

  const loadingGradient2 = useColorModeValue(
    colors.light.loginGradient2,
    colors.dark.loginGradient2
  );

  return (
    <>
      <StatusBar />
      <ColorModeWrapper>
        <View
          w="100%"
          h={HEIGHT * 0.25}
          alignItems="center"
          style={{
            justifyContent: "center",
          }}
        >
          <LinearGradient
            colors={[loadingGradient1, loadingGradient2]}
            style={{
              position: "absolute",
              top: 0,
              width: "100%",
              height: "100%",
              paddingLeft: 20,
              paddingTop: 80,
            }}
          ></LinearGradient>
          <Image w="100%" source={KeyIcon} alt="Alternate Text" size="sm" />
          <Text>LOGIN</Text>
        </View>

        <View
          w="100%"
          h={HEIGHT * 0.75}
          alignItems="center"
          style={{
            borderColor: colors.light.secondary,
            borderWidth: 1,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          }}
          px={5}
        >
          <View w="100%" mt={5} alignItems="center">
            <Text mb={5} fontSize="md">
              <Text bold>PT. Kimia Farma Tbk.</Text> Plant Jakarta
            </Text>

            <Input
              id="username"
              label="Username"
              variant="filled"
              isRequired={true}
              onInputChange={inputChangeHandler}
              initialValue={formState.inputValues.username}
              required
            />

            <Input
              id="password"
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
              isLoadingText="Loading.."
              onPress={loginSubmitHandler}
            >
              Login
            </Button>
          </View>

          <HideWithKeyboard
            style={{
              position: "absolute",
              bottom: 15,
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

export default Login;
