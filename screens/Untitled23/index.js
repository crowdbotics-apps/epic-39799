import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Dummy data for search results
    const results = [{
      id: 1,
      name: 'John Doe',
      username: 'johndoe',
      profilePic: require('../assets/profile1.jpg')
    }, {
      id: 2,
      name: 'Jane Smith',
      username: 'janesmith',
      profilePic: require('../assets/profile2.jpg')
    }, {
      id: 3,
      name: 'Bob Johnson',
      username: 'bobjohnson',
      profilePic: require('../assets/profile3.jpg')
    }, {
      id: 4,
      name: 'Sarah Lee',
      username: 'sarahlee',
      profilePic: require('../assets/profile4.jpg')
    }, {
      id: 5,
      name: 'Mike Brown',
      username: 'mikebrown',
      profilePic: require('../assets/profile5.jpg')
    }]; // Filter results based on search text

    const filteredResults = results.filter(result => result.name.toLowerCase().includes(searchText.toLowerCase()));
    setSearchResults(filteredResults);
  };

  const renderSearchResult = ({
    item
  }) => <TouchableOpacity style={_styles.BIMGjOSP}>
      <Image source={item.profilePic} style={_styles.fHefapcX} />
      <View>
        <Text style={_styles.dNcJohms}>{item.name}</Text>
        <Text style={_styles.GCiQsckW}>@{item.username}</Text>
      </View>
    </TouchableOpacity>;

  return <View style={_styles.rHIRifNa}>
      <TextInput placeholder="Search for users" value={searchText} onChangeText={text => setSearchText(text)} onSubmitEditing={handleSearch} style={_styles.sqaDcQyX} />
      {searchResults.length > 0 ? <FlatList data={searchResults} renderItem={renderSearchResult} keyExtractor={item => item.id.toString()} style={_styles.ELuJAHhY} /> : <View style={_styles.EnKlbncG}>
          <Text style={_styles.UDCcINNs}>No results found</Text>
          <Image source={require('../assets/no_results.png')} style={_styles.gSexhyNk} />
        </View>}
    </View>;
};

export default SearchScreen;

const _styles = StyleSheet.create({
  BIMGjOSP: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10
  },
  fHefapcX: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  dNcJohms: {
    fontSize: 18,
    fontWeight: "bold"
  },
  GCiQsckW: {
    fontSize: 16,
    color: "gray"
  },
  rHIRifNa: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20
  },
  sqaDcQyX: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20
  },
  ELuJAHhY: {
    flex: 1
  },
  EnKlbncG: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  UDCcINNs: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  gSexhyNk: {
    width: 200,
    height: 200
  }
});