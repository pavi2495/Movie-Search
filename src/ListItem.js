import React from "react";
import { View, Image, Text, TouchableOpacity, Dimensions } from "react-native";

// const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

const ListItem = ({ uri, title, onPressItem }) => (
  <TouchableOpacity
    onPress={onPressItem}
    style={{ marginTop: 20, width: screenWidth }}
  >
    <Image
      source={{ uri }}
      style={{
        width: screenWidth - 20,
        height: 200,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
      }}
    />
    <View>
      <Text style={{ fontSize: 20, alignSelf: "center" }}>{`${title} `}</Text>
    </View>
  </TouchableOpacity>
);

export default ListItem;
