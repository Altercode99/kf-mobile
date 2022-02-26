import React from "react";
import { withNavigationFocus } from "react-navigation";

import Screen from "../../components/View/Screen1";

const MeetingRoom = ({ navigation }) => {
  return (
    <Screen
      title="Ruang Meeting"
      back={() => navigation.navigate("Home")}
    ></Screen>
  );
};

export default withNavigationFocus(MeetingRoom);
