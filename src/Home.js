import React, { useState } from "react";
import { TextInput, View, Button, FlatList, Dimensions } from "react-native";
import performQuery from "./api-client";
import ListItem from "./ListItem";
import uuid from 'react-native-uuid';

const Home = ({ navigation }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);

  const fetchResults = async (t, pageNumber, doEmptyData) => {
    if (t.length == 0) {
      return;
    }
    if (pageNumber < 1) {
      pageNumber = 1;
    }
    
    const existingData = data;
    const res = await performQuery(t, pageNumber);
    if (res.Response != "True") {
      return;
    }
    var input;
    var newData = [];
    var uniqueImdb = [];

    for (input = 0; input < res.Search.length; input++) {
      if (!uniqueImdb.includes(res.Search[input]["imdbID"])) {
        newData.push({
          uuid: uuid.v4().toString(),
          title: res.Search[input]["Title"],
          poster: res.Search[input]["Poster"],
          imdbId: res.Search[input]["imdbID"],
          year: res.Search[input]["Year"],
          type: res.Search[input]["Type"],
        });
        uniqueImdb.push(res.Search[input]["imdbID"]);
      }
    }
    if (doEmptyData) {
      setData(newData);
    }  else {
      setData([...existingData, ...newData]);
    }
    setPageNumber(pageNumber);
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
          backgroundColor: "#cdcdcd",
          marginBottom: 10,
        }}
      >
        <Button
          placeholder="Type here"
          onPress={() => fetchResults(searchQuery, 1, true)}
          defaultValue={searchQuery}
          title="Search"
        ></Button>
      </View>
      <FlatList
        contentContainerStyle={{ paddingBottom: 120 }}
        data={data}
        keyExtractor={(item) => item["uuid"] }
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
        onEndReached={() => fetchResults(searchQuery, pageNumber + 1, false)}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};
export default Home;
