import React, { useReducer, useCallback, useState, CheckIcon } from "react";
import { View } from "native-base";
import { withNavigationFocus } from "react-navigation";
import { MaterialIcons } from "@expo/vector-icons";

import Screen from "../../components/View/Screen1";
import Input from "../../components/UI/InputGenerator";
import ButtonIcon from "../../components/UI/ButtonIcon";

import { FORM_UPDATE, formReducer } from "../../utils/formReducer";

const FilterAbsen = ({ navigation }) => {
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      year: null,
      month: null,
    },
    inputValidities: {
      year: true,
      month: true,
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

  return (
    <Screen
      title="Filter Riwayat Absen"
      back={() => navigation.navigate("History")}
    >
      <View w="100%" h="90%" p={5} mt={5}>
        <Input
          id="month"
          label="Bulan"
          inputType="select-month"
          isRequired={true}
          onInputChange={inputChangeHandler}
          initialValue={formState.inputValues.month}
          placeholder="Pilih Bulan"
          required
        />

        <Input
          id="year"
          label="Tahun"
          inputType="select-year"
          isRequired={true}
          onInputChange={inputChangeHandler}
          initialValue={formState.inputValues.month}
          placeholder="Pilih Bulan"
          required
        />

        <ButtonIcon
          w="100%"
          as={MaterialIcons}
          name="filter-list"
          type="primary"
          onPress={() => {}}
          isDisabled={!formState.formIsValid}
          // isLoading={loading}
          isLoadingText="Loading.."
        >
          Filter Absen
        </ButtonIcon>
      </View>
    </Screen>
  );
};

export default withNavigationFocus(FilterAbsen);
