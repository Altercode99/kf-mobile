import React from "react";
import {
  View,
  Image,
  IconButton,
  Icon,
  useColorMode,
  useColorModeValue,
  Text,
} from "native-base";
import { Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import StatusBar from "../../components/UI/StatusBar";
import FrontIcon from "../../assets/icons/front_kf.jpeg";
import BumnIcon from "../../assets/icons/bumn_stroke.png";

import * as colors from "../../constants/color";

const HEIGHT = Dimensions.get("window").height;

const Screen1 = ({ title, back, children }) => {
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

  return (
    <>
      <StatusBar />
      <View
        w="100%"
        h={65 + 40}
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
            justifyContent: "flex-start",
          }}
        >
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name="keyboard-arrow-left"
                rounded="2xl"
                color={lampColor}
                backgroundColor={lampBackground}
              />
            }
            onPress={back}
            _pressed={{
              backgroundColor: "transparent",
            }}
          />
        </View>
      </View>

      <View
        w="100%"
        h={HEIGHT - 65}
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
            right: 0,
            paddingHorizontal: 20,
            marginTop: -10,
            backgroundColor: colors.light.secondary,
            alignItems: "center",
            borderRadius: 10,
            zIndex: 1,
          }}
        >
          <Text>{title}</Text>
        </View>
        {children}
      </View>
    </>
  );
};

export default Screen1;
