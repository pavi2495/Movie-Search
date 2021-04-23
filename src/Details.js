import React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import { useRoute } from "@react-navigation/native";

const screenWidth = Dimensions.get("screen").width;

const Detail = ({ navigation }) => {
  const route = useRoute();
  const data = route.params.data;

  return (
    <View
      style={{
        flexDirection: "column",
        width: Dimensions.get("screen").width - 20,
        marginLeft: 10,
        marginRight: 10,
      }}
    >
      <Image
        source={{ uri: data.poster }}
        style={{
          width: screenWidth,
          height: 300,
          marginTop: 1,
        }}
      />
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ flex: 1, fontSize: 20, fontWeight: "bold" }}>Title</Text>
        <Text
          style={{ flex: 1, fontSize: 20 }}
          ellipsizeMode="tail"
          numberOfLines={4}
        >
          {data.title}
        </Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ flex: 1, fontSize: 20, fontWeight: "bold" }}>
          IMDB ID
        </Text>
        <Text style={{ flex: 1, fontSize: 20 }}>{data.imdbId}</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ flex: 1, fontSize: 20, fontWeight: "bold" }}>Year</Text>
        <Text style={{ flex: 1, fontSize: 20 }}>{data.year}</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ flex: 1, fontSize: 20, fontWeight: "bold" }}>Type</Text>
        <Text style={{ flex: 1, fontSize: 20 }}>{data.type}</Text>
      </View>
    </View>
  );
};

export default Detail;
