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
  Pressable,
} from "native-base";
import { useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import StatusBar from "../components/UI/StatusBar";
import HomeMenuCard from "../components/UI/HomeMenuCard";
import ClockIcon from "../assets/icons/calendar_clock.png";
import MapIcon from "../assets/icons/maps_marker.png";
import MeetingRoomIcon from "../assets/icons/meeting_room.png";
import BumnIcon from "../assets/icons/bumn_stroke.png";
import FrontIcon from "../assets/icons/front_kf.jpeg";
import FlowerIcon from "../assets/icons/flower_kf.png";

import * as colors from "../constants/color";

const HEIGHT = Dimensions.get("window").height;

const Home = ({ navigation }) => {
  const user = useSelector((state) => state.auth.user);
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
  const bodyColor = useColorModeValue("#ecfeff", colors.dark.body);

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
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <View
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <View
              w={70}
              h={70}
              bg={colors.light.secondary}
              borderRadius={35}
              justifyContent="center"
              alignItems="center"
            >
              <Image
                source={FrontIcon}
                alt="FrontIcon"
                w={66}
                h={66}
                borderRadius={33}
              />
            </View>
            <Pressable
              w={75}
              h={15}
              bg={colors.light.secondary}
              _pressed={{
                bg: "#ea580c",
              }}
              borderRadius={10}
              justifyContent="center"
              alignItems="center"
              style={{ marginTop: -10, elevation: 1 }}
              onPress={() => navigation.navigate("Profile")}
            >
              <Text fontSize={10}>Profile</Text>
            </Pressable>
          </View>
          <Image source={BumnIcon} alt="BumnIcon" w="50%" h={35} />
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
              backgroundColor: "#ddd",
            }}
            borderRadius={50}
            m={1}
          />
        </View>
      </View>

      <View
        w="100%"
        h={HEIGHT * 0.75}
        style={{
          backgroundColor: bodyColor,
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
            top: 20,
            width: "100%",
            height: "100%",
            borderTopLeftRadius: 400,
            opacity: 0.8,
            right: -1,
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
          <View>
            <Text>
              Selamat Datang{" "}
              <Text bold color={colors.light.secondary}>
                {user.empName}
              </Text>
            </Text>
          </View>
        </View>
        <ScrollView w="100%" mt={10} px={5}>
          <HStack w="100%" h={110} space={3} justifyContent="center" pt={1}>
            <HomeMenuCard
              onPress={() => navigation.navigate("Absen")}
              icon={ClockIcon}
              title="Absensi"
            />
            <HomeMenuCard
              onPress={() => navigation.navigate("BusinessTrip")}
              icon={MapIcon}
              title="Perjalanan Dinas"
            />
            <HomeMenuCard
              onPress={() => navigation.navigate("MeetingRoom")}
              icon={MeetingRoomIcon}
              title="Ruang Meeting"
            />
          </HStack>
        </ScrollView>
        <View
          w="100%"
          h={150}
          style={{
            position: "absolute",
            bottom: 10,
            right: -50,
            opacity: 0.1,
            zIndex: -1,
          }}
        >
          <Image source={FlowerIcon} alt="FlowerIcon" w="100%" h="100%" />
        </View>
      </View>
    </>
  );
};

export default Home;
