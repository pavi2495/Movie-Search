import React, { useState } from "react";
import { TextInput, View, Button, FlatList, Dimensions } from "react-native";
import performQuery from "./api-client";
import ListItem from "./ListItem";

const Home = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [Data, setData] = useState([]);

  const fetchResults = async (t) => {
    setData([]);
    const res = await performQuery(t);
    var input;
    var data = [];
    var uniqueImdb = [];

    for (input = 0; input < res.Search.length; input++) {
      if (!uniqueImdb.includes(res.Search[input]["imdbID"])) {
        data.push({
          title: res.Search[input]["Title"],
          poster: res.Search[input]["Poster"],
          imdbId: res.Search[input]["imdbID"],
          year: res.Search[input]["Year"],
          type: res.Search[input]["Type"],
        });
        uniqueImdb.push(res.Search[input]["imdbID"]);
      }
    }
    setData(data);
  };

  return (
    <View style={{ alignContent: "center" }}>
      <TextInput
        style={{
          color: "black",
          width: Dimensions.get("screen").width - 20,
          borderWidth: 1,
          borderRadius: 5,
          height: 35,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 10,
        }}
        onChangeText={(value) => setSearchQuery(value)}
      ></TextInput>
      <View
        style={{
          width: Dimensions.get("screen").width - 20,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 10,
          borderRadius: 5,
        }}
      >
        
        <Button
          placeholder="Type here"
          onPress={() => fetchResults(searchQuery)}
          defaultValue={searchQuery}
          title="Search"
        ></Button>
      </View>
      <FlatList
        data={Data}
        keyExtractor={(item) => item["imdbId"]}
        renderItem={({ item }) => (
          <ListItem
            title={item["title"]}
            uri={item["poster"]}
            onPressItem={() => {
              navigation.navigate("Details", {
                data: item,
              });
            }}
          />
        )}
      />
    </View>
  );
};
export default Home;
