import React from "react";
import { withNavigationFocus } from "react-navigation";

import Screen from "../../components/View/Screen1";

const BusinessTrip = ({ navigation }) => {
  return (
    <Screen
      title="Perjalanan Dinas"
      back={() => navigation.navigate("Home")}
    ></Screen>
  );
};

export default withNavigationFocus(BusinessTrip);
