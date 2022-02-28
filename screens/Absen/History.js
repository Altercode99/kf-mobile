import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlatList, Dimensions } from "react-native";
import { View, Image, Pressable, Center, Text } from "native-base";
import { withNavigationFocus } from "react-navigation";

import Screen from "../../components/View/Screen1";
import AbsenHistoryCard from "../../components/UI/AbsenHistoryCard";
import ActivityIndicator from "../../components/UI/ActivityIndicator";
import FilterIcon from "../../assets/icons/filter_list.png";

import { getAbsens } from "../../store/actions/absen";
import { uuid, toMonth } from "../../utils/utility";

const HEIGHT = Dimensions.get("window").height;

const History = ({ navigation }) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.absen.filter);
  const absens = useSelector((state) => state.absen.absens);
  const loading = useSelector((state) => state.absenLoader.absensLoading);

  const getAbsensHandler = () => {
    dispatch(getAbsens(filter.month, filter.year));
  };

  useEffect(() => {
    getAbsensHandler();
  }, [filter]);

  let absen = (
    <Center flex={1}>
      <ActivityIndicator />
    </Center>
  );

  if (!loading && absens && absens.length > 0) {
    absen = (
      <View
        style={{
          width: "100%",
          height: HEIGHT - (155 + 60),
        }}
        pt={1}
        px={2}
      >
        <View w="100%" h="100%" borderRadius={10} overflow="hidden">
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
      </View>
    );
  } else if (!loading && absens && absens.length == 0) {
    absen = (
      <Center flex={1}>
        <Text>Tidak ada riwayat absen!</Text>
      </Center>
    );
  }

  return (
    <Screen
      title="Riwayat Absen"
      back={() => navigation.navigate("Home")}
      fromBottom={50}
    >
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
          <View>
            <Text>{toMonth(filter.month)}</Text>
          </View>
          <View>
            <Text> {filter.year}</Text>
          </View>
          <Pressable
            w={45}
            h={45}
            onPress={() => navigation.navigate("FilterAbsen")}
            _pressed={{
              backgroundColor: "#ddd",
              borderRadius: 5,
            }}
            ml={1}
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
