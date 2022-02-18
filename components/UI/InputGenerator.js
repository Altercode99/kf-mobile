import React, { useReducer, useEffect, useState } from "react";
import {
  Input,
  FormControl,
  useColorModeValue,
  IconButton,
  Icon,
  WarningOutlineIcon,
} from "native-base";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

import * as colors from "../../constants/color";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
        touched: true,
      };
    case "INPUT_BLUR":
      return {
        ...state,
        touched: true,
      };
    default:
      return state;
  }
};

export default InputGenerator = (props) => {
  const { onInputChange, id } = props;
  const [error, setError] = useState();

  const iconColor = useColorModeValue(colors.light.border, colors.dark.border);

  const focusColor = useColorModeValue(
    colors.light.primary,
    colors.dark.primary
  );

  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue ? props.initialValue : "",
    isValid: props.initiallyValid,
    touched: false,
  });

  useEffect(() => {
    if (inputState.touched) {
      onInputChange(id, inputState.value, inputState.isValid);
    }
  }, [inputState, onInputChange, id]);

  const textChangeHandler = (text) => {
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const numberPattern = /^\d+$/;

    let isValid = true;

    if (props.required && text.trim() === "" && isValid) {
      isValid = false;
      setError(`${props.label} tidak boleh kosong`);
    }

    if (props.max && +text > props.max && isValid) {
      isValid = false;
      setError(`Nilai ${props.label} maksimal ${props.max}`);
    }

    if (props.min && +text < props.min && isValid) {
      isValid = false;
      setError(`Nilai ${props.label} minimal ${props.min}`);
    }

    if (props.minLength && text.length < props.minLength && isValid) {
      isValid = false;
      setError(`${props.label} minimal ${props.minLength} karakter`);
    }

    if (props.maxLength && text.length > props.maxLength && isValid) {
      isValid = false;
      setError(`${props.label} maksimal ${props.maxLength} karakter`);
    }

    if (props.isEmail && !emailPattern.test(text) && isValid) {
      isValid = false;
      setError(`Format ${props.label} tidak valid`);
    }

    if (props.isNumeric && !numberPattern.test(text) && isValid) {
      isValid = false;
      setError(`${props.label} harus numeric`);
    }

    dispatch({
      type: "INPUT_CHANGE",
      value: text,
      isValid: isValid,
    });
  };

  const lostFocusHandler = () => {
    dispatch({
      type: "INPUT_BLUR",
    });
  };

  let inputElement;
  switch (props.inputType) {
    case "password":
      inputElement = (
        <Input
          placeholder={props.placeholder}
          type={props.show ? "text" : "password"}
          InputRightElement={
            <IconButton
              onPress={props.togglePassword}
              _pressed={{
                backgroundColor: "transparent",
              }}
              icon={
                <Icon
                  w="100%"
                  size="sm"
                  as={MaterialIcons}
                  name={props.show ? "visibility" : "visibility-off"}
                  color={iconColor}
                />
              }
            />
          }
          _light={{
            borderColor: colors.light.border,
            placeholderTextColor: colors.light.placeholderTextColor,
          }}
          _dark={{
            placeholderTextColor: colors.dark.placeholderTextColor,
          }}
          _focus={{
            borderColor: focusColor,
          }}
          onChangeText={textChangeHandler}
          onBlur={lostFocusHandler}
          value={inputState.value}
          {...props}
        />
      );
      break;
    default:
      inputElement = (
        <Input
          placeholder={props.placeholder}
          _light={{
            borderColor: colors.light.border,
            placeholderTextColor: colors.light.placeholderTextColor,
          }}
          _dark={{
            placeholderTextColor: colors.dark.placeholderTextColor,
          }}
          _focus={{
            borderColor: focusColor,
          }}
          onChangeText={textChangeHandler}
          onBlur={lostFocusHandler}
          value={inputState.value}
          {...props}
        />
      );
  }

  return (
    <FormControl
      isRequired={props.isRequired}
      isInvalid={!inputState.isValid && inputState.touched}
      mb={2}
    >
      <FormControl.Label>{props.label}</FormControl.Label>
      {inputElement}
      {props.helperText && (
        <FormControl.HelperText>{props.helperText}</FormControl.HelperText>
      )}
      {!inputState.isValid && inputState.touched && (
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {error}
        </FormControl.ErrorMessage>
      )}
    </FormControl>
  );
};
