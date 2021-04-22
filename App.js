import React, { useState } from 'react';
import { TextInput, View, Button, ScrollView, StyleSheet, FlatList, Text, Image} from 'react-native';
import performQuery from './api-client';

const MovieSearch = () => {
const [searchQuery, setSearchQuery] = useState('');
const [Data , setData] = useState([]);

const sayHello = async (t) =>{
  setData([]);
  const res = await performQuery(t);
  var input ;
  var data = [];
  var uniqueImdb = [];

for (input =0 ; input < res.Search.length ; input++){  
  if ( ! uniqueImdb.includes(res.Search[input]["imdbID"])) {
    data.push({ key : res.Search[input]["Title"] , key2 :res.Search[input]["Poster"] , key3 : res.Search[input]["imdbID"]}) ;
    uniqueImdb.push(res.Search[input]["imdbID"]);
  }
} 
setData(data);
};


return (
<View style={{alignContent: "center", padding: 100}}>
  <TextInput style={{color: "black"}} onChangeText={(t) => setSearchQuery(t)}></TextInput>
  <Button
  style={{}}
    placeholder="Type here "
    onPress={() => sayHello(searchQuery )}
    defaultValue={searchQuery}
    title="Search">
  </Button>

<FlatList
data = {Data}
keyExtractor={item => item["key3"]}
renderItem = {({item}) => (
<View >
  <Image source = {{uri :(item["key2"])}}
  style = {{ width: 200, height: 200 }}
  />
  <View >
    <Text >{`${item["key"]} `} 
    </Text>
  </View>
</View>
)} 
/>
</View>
);
}
export default MovieSearch;