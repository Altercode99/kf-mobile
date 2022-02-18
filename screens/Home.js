import React from "react";
import { Text, View, Image, HStack, Center } from "native-base";
import { ImageBackground, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { LinearGradient } from "expo-linear-gradient";

import ColorModeWrapper from "../components/UI/ColorModeWrapper";
import Input from "../components/UI/InputGenerator";
import Button from "../components/UI/Button";
import StatusBar from "../components/UI/StatusBar";
import KeyIcon from "../assets/icons/key_1.png";

import { logout } from "../store/actions/auth";
import * as colors from "../constants/color";

const Home = () => {
  const dispatch = useDispatch();
  const exit = () => {
    setTimeout(() => {
      dispatch(logout());
    }, 1000);
  };

  return (
    <>
      <StatusBar />
      <ColorModeWrapper>
        <View
          w="100%"
          h="35%"
          alignItems="center"
          style={{
            justifyContent: "center",
          }}
        >
          <Image
            source={{
              uri: "https://www.kimiafarma.co.id/images/Bisnis/P2abrikJKT.jpg",
            }}
            alt="Kimia Farma"
            w="100%"
            h="100%"
          />
          <LinearGradient
            colors={["rgba(243,146,0,0.8)", "rgba(243,146,0,0)"]}
            style={styles.Overlay}
          ></LinearGradient>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              padding: 20,
              marginBottom: "5%",
            }}
          >
            <Text style={{ color: "#fff" }} fontSize="xl">
              MENU
            </Text>
          </View>
        </View>

        <View
          w="100%"
          h="75%"
          alignItems="center"
          style={{
            backgroundColor: "#fff",
            borderTopLeftRadius: 45,
            marginTop: "-10%",
          }}
          px={5}
        >
          <View w="100%" mt={5} alignItems="center">
            <HStack w="100%" space={3} justifyContent="space-between" p={5}>
              <Center h="20" w="20" bg="primary.300" rounded="md" shadow={3} />
              <Center h="20" w="20" bg="primary.500" rounded="md" shadow={3} />
              <Center h="20" w="20" bg="primary.700" rounded="md" shadow={3} />
            </HStack>
          </View>
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

export default Home;
