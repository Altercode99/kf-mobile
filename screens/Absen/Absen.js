import React, { useEffect } from "react";
import {
  Center,
  Image,
  Text,
  View,
  Icon,
  useColorModeValue,
} from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { SimpleLineIcons, Entypo, MaterialIcons } from "@expo/vector-icons";
import { withNavigationFocus } from "react-navigation";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Alert } from "react-native";

import Screen from "../../components/View/Screen1";
import ActivityIndicator from "../../components/UI/ActivityIndicator";
import ButtonIcon from "../../components/UI/ButtonIcon";
import List from "../../components/UI/List";
import ClockIcon from "../../assets/icons/calendar_clock.png";

import { getCurrentAbsen } from "../../store/actions/absen";

import * as colors from "../../constants/color";

const Absen = ({ navigation }) => {
  const dispatch = useDispatch();
  const qrScanned = useSelector((state) => state.absen.qrScanned);
  const loading = useSelector((state) => state.absenLoader.currAbsenLoading);
  const currentAbsen = useSelector((state) => state.absen.currentAbsen);

  const cardColor = useColorModeValue(colors.light.body, colors.dark.card);

  const resetAbsenHandler = () => {
    dispatch({ type: "CURRABSEN_RESET" });
  };

  const absenInHandler = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    if (status === "granted") {
      navigation.navigate("Scanner", { action: "IN" });
    } else {
      Alert.alert("Aplikasi membutuhkan izin kamera untuk melakukan absensi!", [
        { text: "Tutup" },
      ]);
    }
  };

  useEffect(() => {
    dispatch(getCurrentAbsen());
  }, []);

  let absen = (
    <Center flex={1}>
      <ActivityIndicator />
    </Center>
  );

  if (!loading) {
    if (
      (!qrScanned && !currentAbsen) ||
      (currentAbsen.new && currentAbsen.action == "OUT")
    ) {
      absen = (
        <Center flex={1} flexDirection="column">
          <Image source={ClockIcon} alt="Absen" w={60} h={60} mb={5} />
          <ButtonIcon
            w={200}
            as={Entypo}
            name="login"
            type="primary"
            onPress={absenInHandler}
          >
            Absen Masuk
          </ButtonIcon>
        </Center>
      );
    } else if (currentAbsen) {
      absen = (
        <View flex={1} px={2}>
          <View
            mt={5}
            w="100%"
            alignItems="center"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            {currentAbsen.action == "IN" ? (
              <>
                <Icon as={MaterialIcons} name="check-circle" color="#16a34a" />
                <Text bold color="#16a34a" fontSize={16}>
                  Check-In Berhasil
                </Text>
              </>
            ) : (
              <>
                <Icon
                  as={MaterialIcons}
                  name="check-circle"
                  color={colors.light.secondary}
                />
                <Text bold color={colors.light.secondary} fontSize={16}>
                  Check-Out Berhasil
                </Text>
              </>
            )}
          </View>
          <View flex={1} overflow="hidden" mt={3}>
            <View
              w="100%"
              alignItems="center"
              p={5}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              bg={cardColor}
              rounded={10}
            >
              <List title="Nama Lengkap" value={currentAbsen.empName} />
              <List title="SAP ID" value={currentAbsen.sapId} />
            </View>
            <View
              w="100%"
              alignItems="center"
              p={5}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              bg={cardColor}
              rounded={10}
              style={{ marginTop: 1 }}
            >
              <List title="Lokasi Absen" value={currentAbsen.gate} />
              <List
                title="Tanggal & Waktu Absen"
                value={currentAbsen.actionDate}
              />
              <View
                style={{
                  width: 20,
                  height: 20,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  borderRadius: 10,
                  backgroundColor: colors.light.secondary,
                  marginTop: -10,
                  marginLeft: -10,
                  overflow: "hidden",
                }}
              ></View>
              <View
                style={{
                  width: 20,
                  height: 20,
                  position: "absolute",
                  top: 0,
                  right: 0,
                  borderRadius: 10,
                  backgroundColor: colors.light.secondary,
                  marginTop: -10,
                  marginRight: -10,
                }}
              ></View>
            </View>
            {currentAbsen.action == "IN" ? (
              <ButtonIcon
                mt={2}
                w="100%"
                as={SimpleLineIcons}
                name="logout"
                type="secondary"
                onPress={() =>
                  navigation.navigate("Scanner", { action: "OUT" })
                }
              >
                Absen Pulang
              </ButtonIcon>
            ) : (
              <ButtonIcon
                mt={2}
                w="100%"
                as={MaterialIcons}
                name="refresh"
                type="primary"
                onPress={resetAbsenHandler}
              >
                Absen Lagi
              </ButtonIcon>
            )}
          </View>
        </View>
      );
    }
  }

  return (
    <Screen title="Absen" back={() => navigation.navigate("Home")}>
      {absen}
    </Screen>
  );
};

export default withNavigationFocus(Absen);
