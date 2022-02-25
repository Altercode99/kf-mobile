import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlatList } from "react-native";
import { View, Image, Pressable, Center } from "native-base";
import { withNavigationFocus } from "react-navigation";

import Screen from "../../components/View/Screen1";
import AbsenHistoryCard from "../../components/UI/AbsenHistoryCard";
import ActivityIndicator from "../../components/UI/ActivityIndicator";
import FilterIcon from "../../assets/icons/filter_list.png";

import { getAbsens } from "../../store/actions/absen";
import { uuid, getMonth } from "../../utils/utility";

const History = ({ navigation }) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.absen.filter);
  const absens = useSelector((state) => state.absen.absens);
  const loading = useSelector((state) => state.absenLoader.absensLoading);

  const getAbsensHandler = () => {
    if (filter) {
      dispatch(getAbsens(filter.month, filter.year));
    } else {
      let date = new Date();
      let month = getMonth(date.getMonth());
      let year = date.getFullYear();
      dispatch(getAbsens(month, year));
    }
  };

  useEffect(() => {
    getAbsensHandler();
  }, [filter]);

  let absen = (
    <Center flex={1}>
      <ActivityIndicator />
    </Center>
  );

  if (!loading && absens) {
    absen = (
      <View
        style={{
          width: "100%",
          height: "75%",
        }}
        px={2}
      >
        <FlatList
          flex={1}
          keyExtractor={(item) => uuid()}
          onRefresh={getAbsensHandler}
          refreshing={loading}
          data={absens}
          renderItem={({ item, index }) => (
            <AbsenHistoryCard index={index} item={item} />
          )}
        />
      </View>
    );
  }

  return (
    <Screen title="Riwayat Absen" back={() => navigation.navigate("Home")}>
      <View alignItems="center">
        <View
          w="90%"
          h={50}
          mt={4}
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Pressable
            w={45}
            h={45}
            onPress={() => navigation.navigate("FilterAbsen")}
          >
            <Image source={FilterIcon} alt="Filter" w={45} h={45} />
          </Pressable>
        </View>
      </View>
      {absen}
    </Screen>
  );
};

export default withNavigationFocus(History);
