import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, IconButton, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "react-native";

import BarcodeScanner from "../../components/Utility/BarcodeScanner";
import ActivityIndicator from "../../components/UI/ActivityIndicator";

import { scanning } from "../../store/actions/absen";

import * as colors from "../../constants/color";

const ScannerScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const action = navigation.getParam("action");
  const [qrScanned, setQrScanned] = useState(false);
  const loading = useSelector((state) => state.absenLoader.qrLoading);

  const onScannedHandler = async ({ type, data }) => {
    dispatch(scanning(data, action));
    setQrScanned(true);
  };

  return (
    <>
      <StatusBar hidden />
      <View w="100%" h="100%">
        <BarcodeScanner
          flex={1}
          scanned={qrScanned}
          onScanned={onScannedHandler}
        >
          <View
            w="100%"
            h={75}
            style={{
              position: "absolute",
              top: 0,
              backgroundColor: "transparent",
            }}
          >
            <View
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              p={5}
            >
              <IconButton
                icon={
                  <Icon
                    as={MaterialIcons}
                    name="keyboard-arrow-left"
                    rounded="2xl"
                    color="#fff"
                    backgroundColor={colors.light.secondary}
                  />
                }
                onPress={() => navigation.navigate("Absen")}
                _pressed={{
                  backgroundColor: "#ccc",
                }}
                borderRadius={50}
              />

              <Text color={colors.light.secondary}>Scan QR Code</Text>
            </View>
          </View>

          <View flex={1} alignItems="center" justifyContent="center">
            <Text fontSize={150} style={{ opacity: 0.2 }}>
              {action}
            </Text>
          </View>

          <View
            w="100%"
            h={85}
            style={{
              position: "absolute",
              bottom: 0,
              backgroundColor: colors.light.secondary,
              borderTopLeftRadius: 45,
              borderTopRightRadius: 45,
              padding: 20,
            }}
            alignItems="center"
          >
            {loading ? (
              <View>
                <ActivityIndicator />
              </View>
            ) : (
              <View>
                <Text fontSize={11}>
                  1. Silahkan SCAN pada QR Code di GATE yang sudh di sediakan
                </Text>
                <Text fontSize={11}>
                  2. QR Code pada layar akan berganti secara berkala
                </Text>
              </View>
            )}
          </View>
        </BarcodeScanner>
      </View>
    </>
  );
};

export default ScannerScreen;
