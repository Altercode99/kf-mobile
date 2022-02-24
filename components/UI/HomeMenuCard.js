import React from "react";
import { Dimensions } from "react-native";
import {
  Pressable,
  Center,
  Image,
  Text,
  useColorModeValue,
  View,
} from "native-base";
import * as colors from "../../constants/color";

const WIDTH = Dimensions.get("window").width;

const HomeMenuCard = ({ onPress, icon, title }) => {
  const cardColor = useColorModeValue(colors.light.card, colors.dark.card);

  return (
    <Pressable h={100} w={WIDTH * 0.25} onPress={onPress}>
      <Center bg={cardColor} rounded="md" shadow={3} p={1}>
        <Image source={icon} alt={title} w={50} h={50} />
        <Text fontSize={10}>{title}</Text>
      </Center>
    </Pressable>
  );
};

export default HomeMenuCard;
