import React, { useState } from 'react';
import { TextInput, View, Button } from 'react-native';
import performQuery from './api-client';

const sayHello = async (t) =>{
  const res = await performQuery(t);
  alert("Movie " + t + " has " + res.Response + " " + res.totalResults);
};


const MovieSearch = () => {
const [searchQuery, setSearchQuery] = useState('');

return (
<View style={{alignContent: "center", padding: 100}}>
  <TextInput style={{color: "black"}} onChangeText={(t) => setSearchQuery(t)}></TextInput>
<Button
style={{}}
  placeholder="Type here "
  onPress={() => sayHello(searchQuery)}
  defaultValue={searchQuery}
  title="Search">
  </Button>
</View>
);
}

export default MovieSearch;