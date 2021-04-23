import React from "react";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";

const Detail = ({ navigation }) => {
  const route = useRoute();
  const data = route.params.data;
  
  return <View></View>;
};

export default Detail;
