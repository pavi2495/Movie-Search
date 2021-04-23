import React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import { useRoute } from "@react-navigation/native";

const screenWidth = Dimensions.get("screen").width;

const Detail = ({ navigation }) => {
  const route = useRoute();
  const data = route.params.data;

  return (
    <View>
      <Image
        source={{ uri: data.poster }}
        style={{
          width: screenWidth - 20,
          height: 300,
          marginTop: 1,
          marginLeft: 10,
          marginRight: 10,
        }}
      />
      <View
        style={{
          fontSize: 200,
          height: 200,
          marginLeft: 20,
          marginRight: 20,
          fontWeight: "bold",
        }}
      >
        <Text>Movie Title : {data.title}</Text>
        <Text>Imdbid : {data.imdbId}</Text>
        <Text>Year : {data.year}</Text>
        <Text>Type: {data.type}</Text>
      </View>
    </View>
  );
};

export default Detail;
