import React from "react";
import { View, Text } from "native-base";

const List = ({ title, value }) => {
  return (
    <View
      w="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Text color="#ccc">{title}</Text>
      <Text bold>{value}</Text>
      <View w="100%" style={{ borderColor: "#ccc", borderTopWidth: 1 }}></View>
    </View>
  );
};

export default List;
