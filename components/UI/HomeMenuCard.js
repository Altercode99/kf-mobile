import React from "react";
import { Dimensions } from "react-native";
import { Pressable, Center, Image, Text, useColorModeValue } from "native-base";
import * as colors from "../../constants/color";

const WIDTH = Dimensions.get("window").width;

const HomeMenuCard = ({ onPress, icon, title }) => {
  const cardColor = useColorModeValue(colors.light.card, colors.dark.card);
  const pressedColor = useColorModeValue(
    colors.light.pressed,
    colors.dark.pressed
  );
  return (
    <Pressable
      h={85}
      w={WIDTH * 0.25}
      onPress={onPress}
      _pressed={{ bg: pressedColor }}
      justifyContent="center"
      bg={cardColor}
      rounded="md"
      shadow={3}
      p={1}
      alignItems="center"
    >
      <Image source={icon} alt={title} w={50} h={50} />
      <Text fontSize={10}>{title}</Text>
    </Pressable>
  );
};

export default HomeMenuCard;
