import React, { useReducer, useEffect, useState } from "react";
import {
  Input,
  FormControl,
  useColorModeValue,
  IconButton,
  Icon,
  WarningOutlineIcon,
  Select,
  CheckIcon,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import { uuid } from "../../utils/utility";

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
    case "select-month":
      let mOptions = [
        { label: "Januari", value: "01" },
        { label: "Februari", value: "02" },
        { label: "Maret", value: "03" },
        { label: "April", value: "04" },
        { label: "Mei", value: "05" },
        { label: "Juni", value: "06" },
        { label: "Juli", value: "07" },
        { label: "Agustus", value: "08" },
        { label: "September", value: "09" },
        { label: "Oktober", value: "10" },
        { label: "November", value: "11" },
        { label: "Desember", value: "12" },
      ];
      inputElement = (
        <Select
          selectedValue={inputState.value}
          accessibilityLabel={props.placeholder}
          placeholder={props.placeholder}
          _selectedItem={{
            bg: colors.light.secondary,
            endIcon: <CheckIcon size={5} />,
          }}
          borderColor={colors.light.secondary}
          onValueChange={textChangeHandler}
        >
          {mOptions &&
            mOptions.map((option) => (
              <Select.Item
                label={option.label}
                value={option.value}
                key={uuid() + option.value}
              />
            ))}
        </Select>
      );
      break;
    case "select-year":
      let yOptions = [];
      for (let i = 2022; i <= new Date().getFullYear(); i++) {
        yOptions.push({ label: "" + i, value: "" + i });
      }
      inputElement = (
        <Select
          selectedValue={inputState.value}
          accessibilityLabel={props.placeholder}
          placeholder={props.placeholder}
          _selectedItem={{
            bg: colors.light.secondary,
            endIcon: <CheckIcon size={5} />,
          }}
          borderColor={colors.light.secondary}
          onValueChange={textChangeHandler}
        >
          {yOptions &&
            yOptions.map((option) => (
              <Select.Item
                label={option.label}
                value={option.value}
                key={uuid() + option.value}
              />
            ))}
        </Select>
      );
      break;
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
