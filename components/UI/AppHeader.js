import React from "react";
import {
  HStack,
  IconButton,
  Icon,
  Text,
  Box,
  StatusBar,
  useColorModeValue,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import * as colors from "../../constants/color";

function AppHeader({ title, goBack, children, onRightPress }) {
  const statusBarColor = useColorModeValue(
    colors.light.statusbar,
    colors.dark.statusbar
  );

  const headerColor = useColorModeValue(
    colors.light.header,
    colors.dark.header
  );

  const headerTextColor = useColorModeValue(
    colors.light.textHeader,
    colors.dark.textHeader
  );

  const pressedColor = useColorModeValue(
    colors.light.pressed,
    colors.dark.pressed
  );

  return (
    <>
      <StatusBar backgroundColor={statusBarColor} barStyle="light-content" />
      <Box safeAreaTop backgroundColor="#6200ee" />
      <HStack
        bg={headerColor}
        px={1}
        py={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack space={4} alignItems="center">
          <IconButton
            onPress={goBack}
            icon={
              <Icon
                size="sm"
                as={<MaterialIcons name="arrow-back-ios" />}
                color={headerTextColor}
              />
            }
            _pressed={{
              backgroundColor: pressedColor,
            }}
          />
          <Text
            color={headerTextColor}
            fontSize={20}
            fontWeight="bold"
            w={onRightPress ? "65%" : "85%"}
          >
            {title}
          </Text>
          {onRightPress && (
            <IconButton
              _pressed={{
                backgroundColor: pressedColor,
              }}
              onPress={onRightPress}
              icon={
                <Icon
                  size="md"
                  as={<MaterialIcons name="refresh" />}
                  color={headerTextColor}
                />
              }
            />
          )}
        </HStack>
        {children}
      </HStack>
    </>
  );
}

export default AppHeader;
