import React from "react";
import {
  View,
  Image,
  useColorMode,
  useColorModeValue,
  Text,
} from "native-base";
import { Dimensions } from "react-native";
import { useDispatch } from "react-redux";

import { LinearGradient } from "expo-linear-gradient";

import StatusBar from "../components/UI/StatusBar";
import FrontIcon from "../assets/icons/front_kf.jpeg";

import { logout } from "../store/actions/auth";
import * as colors from "../constants/color";

const HEIGHT = Dimensions.get("window").height;

const Profile = ({ navigation }) => {
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
      </View>

      <View
        w="100%"
        h={HEIGHT * 0.75}
        style={{
          backgroundColor: "#fff",
          borderTopLeftRadius: 45,
          borderTopRightRadius: 45,
          borderLeftWidth: 1,
          borderRightWidth: 1,
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
            borderTopRightRadius: 45,
          }}
        ></LinearGradient>
      </View>
    </>
  );
};

export default Profile;
