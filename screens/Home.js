import React from "react";
import {
  View,
  Image,
  HStack,
  ScrollView,
  IconButton,
  Icon,
  useColorMode,
  useColorModeValue,
  Text,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { useDispatch } from "react-redux";

import { LinearGradient } from "expo-linear-gradient";

import StatusBar from "../components/UI/StatusBar";
import HomeMenuCard from "../components/UI/HomeMenuCard";
import ClockIcon from "../assets/icons/calendar_clock.png";
import MapIcon from "../assets/icons/maps_marker.png";
import MeetingRoomIcon from "../assets/icons/meeting_room.png";
import BumnIcon from "../assets/icons/bumn_stroke.png";
import FrontIcon from "../assets/icons/front_kf.jpeg";
import SloganIcon from "../assets/icons/go_fast.png";

import { logout } from "../store/actions/auth";
import * as colors from "../constants/color";

const HEIGHT = Dimensions.get("window").height;

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { colorMode, toggleColorMode } = useColorMode();

  const gradient1 = useColorModeValue(
    colors.light.gradient1,
    colors.dark.gradient1
  );
  const gradient2 = useColorModeValue(
    colors.light.gradient2,
    colors.dark.gradient2
  );
  const gradient3 = useColorModeValue(
    colors.light.gradient3,
    colors.dark.gradient3
  );
  const gradient4 = useColorModeValue(
    colors.light.gradient4,
    colors.dark.gradient4
  );

  const gradientDark = [gradient3, gradient4];
  const gradientLight = [colors.light.gradient1, colors.light.gradient2];

  const lampColor = useColorModeValue("#fff", colors.dark.primary);
  const lampBackground = useColorModeValue(
    colors.light.secondary,
    colors.dark.secondary
  );

  const exit = () => {
    setTimeout(() => {
      dispatch(logout());
    }, 1000);
  };

  return (
    <>
      <StatusBar />
      <View
        w="100%"
        h={HEIGHT * 0.25 + 40}
        alignItems="center"
        style={{
          justifyContent: "center",
        }}
      >
        <Image source={FrontIcon} alt="Kimia Farma" w="100%" h="100%" />
        <LinearGradient
          colors={colorMode == "dark" ? gradientDark : gradientLight}
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
          }}
        ></LinearGradient>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            padding: 20,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            marginBottom: 30,
          }}
        >
          <Image source={BumnIcon} alt="Absen" w="50%" h={35} />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name="lightbulb"
                rounded="2xl"
                color={lampColor}
                backgroundColor={lampBackground}
              />
            }
            onPress={toggleColorMode}
            _pressed={{
              backgroundColor: "transparent",
            }}
          />
        </View>
      </View>

      <View
        w="100%"
        h={HEIGHT * 0.75}
        style={{
          backgroundColor: "#fff",
          borderTopLeftRadius: 45,
          borderLeftWidth: 1,
          borderTopWidth: 1,
          borderColor: colors.light.secondary,
          marginTop: -40,
        }}
      >
        <LinearGradient
          colors={[gradient1, gradient2]}
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            borderTopLeftRadius: 45,
          }}
        ></LinearGradient>
        <View
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
          px={5}
        >
          <Text>S.P.E.K.T.A</Text>
        </View>
        <ScrollView w="100%" mt={10} px={5}>
          <HStack w="100%" h={110} space={3} justifyContent="center" pt={1}>
            <HomeMenuCard
              onPress={() => navigation.navigate("Absen")}
              icon={ClockIcon}
              title="Absensi"
            />

            <HomeMenuCard
              onPress={() => {
                console.log("Perjalanan Dinas");
              }}
              icon={MapIcon}
              title="Perjalanan Dinas"
            />

            <HomeMenuCard
              onPress={exit}
              icon={MeetingRoomIcon}
              title="Ruang Meeting"
            />
          </HStack>
        </ScrollView>
      </View>
    </>
  );
};

export default Home;
