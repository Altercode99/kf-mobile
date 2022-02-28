import React, { useState } from "react";
import {
  View,
  Image,
  useColorMode,
  useColorModeValue,
  IconButton,
  Icon,
  ScrollView,
  Text,
  Divider,
  Pressable,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { useDispatch } from "react-redux";

import { LinearGradient } from "expo-linear-gradient";

import StatusBar from "../components/UI/StatusBar";
import AlertDialog from "../components/UI/AlertDialog";
import FrontIcon from "../assets/icons/front_kf.jpeg";

import { logout } from "../store/actions/auth";
import * as colors from "../constants/color";

const HEIGHT = Dimensions.get("window").height;

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
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
    }, 500);
  };

  return (
    <>
      <StatusBar />
      <ScrollView flex={1}>
        <View
          w="100%"
          h={HEIGHT * 0.15 + 40}
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
              onPress={() => navigation.navigate("Home")}
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
          <View w="100%" alignItems="center" px={2}>
            <View
              w={120}
              h={120}
              bg={colors.light.secondary}
              borderRadius={60}
              style={{ marginTop: -60 }}
              alignItems="center"
              justifyContent="center"
              overflow="hidden"
            >
              <Image
                source={FrontIcon}
                alt="profile"
                w={110}
                h={110}
                borderRadius={55}
              />
            </View>
            <Pressable
              justifyContent="center"
              alignItems="center"
              bg="transparent"
              px={2}
              borderRadius={15}
              mt={-6}
              _pressed={{
                backgroundColor: "#ddd",
                opacity: 0.5,
              }}
            >
              <Text bold color={colors.light.body} fontSize={14}>
                Edit
              </Text>
            </Pressable>
            <View
              justifyContent="center"
              alignItems="center"
              bg={colors.light.secondary}
              px={2}
              borderRadius={15}
            >
              <Text bold color={colors.light.body} fontSize={18}>
                Arman Septian
              </Text>
            </View>
            <View
              style={{ position: "absolute", right: 20, top: 75 }}
              display="flex"
              flexDirection="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Text color={colors.light.secondary}>Logout</Text>
              <IconButton
                icon={
                  <Icon
                    as={MaterialIcons}
                    name="logout"
                    rounded="2xl"
                    color={colors.light.secondary}
                  />
                }
                onPress={() => setIsOpen((state) => !state)}
                _pressed={{
                  backgroundColor: "#ddd",
                }}
                borderRadius={50}
                m={1}
              />
            </View>
            <View w="100%" bg="#fff" borderRadius={10} mt={12} mb={5}>
              <View
                w="100%"
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
              >
                <View
                  w="35%"
                  px={2}
                  borderRadius={25}
                  borderColor="#ddd"
                  borderWidth={1}
                  alignItems="center"
                  bg="#fff"
                  style={{ marginLeft: 10, marginTop: -10 }}
                >
                  <Text>Data Karyawan</Text>
                </View>

                <View
                  w="100%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-start"
                  p={3}
                >
                  <Text color="#ccc">NPP</Text>
                  <Text bold>2909199301</Text>
                  <Divider />
                  <Text color="#ccc">ID SAP</Text>
                  <Text bold>60000244</Text>
                  <Divider />
                  <Text color="#ccc">NIK</Text>
                  <Text bold>3275112809930002</Text>
                  <Divider />
                  <Text color="#ccc">No. Kartu Keluarga</Text>
                  <Text bold>-</Text>
                  <Divider />
                  <Text color="#ccc">NPWP</Text>
                  <Text bold>09.254.294.3-407.000</Text>
                  <Divider />
                  <Text color="#ccc">Tempat, Tanggal Lahir</Text>
                  <Text bold>Bekasi, 28 September 1993</Text>
                  <Divider />
                  <Text color="#ccc">Alamat</Text>
                  <Text bold>
                    Jl. KH. Agus Salim Kp. Bulak Salamet No.8 RT06 RW09 Bekasi
                    Jaya Bekasi Timur
                  </Text>
                  <Divider />
                  <Text color="#ccc">Jenis Kelamin</Text>
                  <Text bold>Laki - Laki</Text>
                  <Divider />
                  <Text color="#ccc">Agama</Text>
                  <Text bold>Islam</Text>
                  <Divider />
                  <Text color="#ccc">No. Hp</Text>
                  <Text bold>089517227009</Text>
                  <Divider />
                  <Text color="#ccc">Email</Text>
                  <Text bold>septian.arman009@gmail.com</Text>
                </View>
              </View>
            </View>

            <View w="100%" bg="#fff" borderRadius={10} mb={5}>
              <View
                w="100%"
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
              >
                <View
                  w="40%"
                  px={2}
                  borderRadius={25}
                  borderColor="#ddd"
                  borderWidth={1}
                  alignItems="center"
                  bg="#fff"
                  style={{ marginLeft: 10, marginTop: -10 }}
                >
                  <Text>Status Karyawan</Text>
                </View>

                <View
                  w="100%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-start"
                  p={3}
                >
                  <Text color="#ccc">Status Kepegawaian</Text>
                  <Text bold>Permanen</Text>
                  <Divider />
                  <Text color="#ccc">Perusahaan</Text>
                  <Text bold>PT. Kimia Farma Tbk. Plant Jakarta</Text>
                  <Divider />
                  <Text color="#ccc">Sub Unit</Text>
                  <Text bold>Produksi</Text>
                  <Divider />
                  <Text color="#ccc">Bagian</Text>
                  <Text bold>Teknik & Pemeliharaan</Text>
                  <Divider />
                  <Text color="#ccc">Sub Bagian</Text>
                  <Text bold>Hardware & Network</Text>
                  <Divider />
                  <Text color="#ccc">Jabatan</Text>
                  <Text bold>Pelaksana</Text>
                  <Divider />
                  <Text color="#ccc">No. SK Jabatan</Text>
                  <Text bold>SK001</Text>
                  <Divider />
                  <Text color="#ccc">Tanggal Berlaku</Text>
                  <Text bold>22 Februari 2022</Text>
                  <Divider />
                  <Text color="#ccc">Tanggal Berakhir</Text>
                  <Text bold>22 Februari 2023</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <AlertDialog
        isOpen={isOpen}
        title="Logout"
        message="Anda yakin ingin keluar?"
        cancel="Tidak"
        confirm="Ya"
        onClose={() => setIsOpen((state) => !state)}
        onConfirm={exit}
      />
    </>
  );
};

export default Profile;
