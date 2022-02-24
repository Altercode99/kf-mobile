import React from "react";
import { View, Text, Divider, Icon, useColorModeValue } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

import * as colors from "../../constants/color";

const AbsenHistoryCard = ({ item, index, ...props }) => {
  const cardColor = useColorModeValue(colors.light.body, colors.dark.header);
  const divColor = useColorModeValue(colors.dark.body, colors.light.secondary);
  const borderColor = useColorModeValue("#ccc", colors.light.secondary);
  const dotColor = useColorModeValue(
    colors.light.secondary,
    colors.light.secondary
  );

  let newTimeIn = item.IN.split(",");
  let newTimeOut = item.OUT.split(",");
  return (
    <View
      w="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      bg={cardColor}
      p={2}
      style={{
        borderWidth: 1,
        borderColor: borderColor,
        borderRadius: 10,
        elevation: 3,
      }}
      mb={1}
      {...props}
    >
      {index > 0 && (
        <>
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 20,
              height: 20,
              backgroundColor: dotColor,
              borderRadius: 10,
              marginTop: -13,
              marginLeft: -12,
            }}
          ></View>
          <View
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 20,
              height: 20,
              backgroundColor: dotColor,
              borderRadius: 10,
              marginTop: -13,
              marginRight: -12,
            }}
          ></View>
        </>
      )}

      <View
        w="100%"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <View>
          <Text>{item.date}</Text>
        </View>
      </View>
      <Divider bg={divColor} />
      <View
        w="100%"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <View mt={1}>
          <View
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Icon
              as={FontAwesome}
              name="dot-circle-o"
              size={3}
              color="#059669"
              mr={1}
            />
            {item.IN !== "-" ? (
              <Text>
                {newTimeIn[0]}, <Text bold>{newTimeIn[1]}</Text>
              </Text>
            ) : (
              <Text>-</Text>
            )}
          </View>

          <View
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Icon
              as={FontAwesome}
              name="dot-circle-o"
              size={3}
              color="#ea580c"
              mr={1}
            />
            {item.OUT !== "-" ? (
              <Text>
                {newTimeOut[0]}, <Text bold>{newTimeOut[1]}</Text>
              </Text>
            ) : (
              <Text>-</Text>
            )}
          </View>
        </View>
        <View
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text bold>{item.gateIn}</Text>
          <Text bold>{item.gateOut}</Text>
        </View>
      </View>
    </View>
  );
};

export default AbsenHistoryCard;
