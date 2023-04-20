import { Pressable } from "react-native";
import { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet } from 'react-native';
const friendsData = [{
  id: '1',
  name: 'John Doe',
  image: require('../assets/friend1.jpg')
}, {
  id: '2',
  name: 'Jane Smith',
  image: require('../assets/friend2.jpg')
}, {
  id: '3',
  name: 'Bob Johnson',
  image: require('../assets/friend3.jpg')
}, {
  id: '4',
  name: 'Alice Brown',
  image: require('../assets/friend4.jpg')
}, {
  id: '5',
  name: 'Mike Davis',
  image: require('../assets/friend5.jpg')
}];

const SearchFriendsScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredFriends, setFilteredFriends] = useState(friendsData);

  const handleSearch = text => {
    setSearchText(text);
    const filtered = friendsData.filter(friend => friend.name.toLowerCase().includes(text.toLowerCase()));
    setFilteredFriends(filtered);
  };

  const renderFriend = ({
    item
  }) => <View style={styles.friendContainer}>
      <Image source={item.image} style={styles.friendImage} />
      <Pressable><Text style={styles.friendName}>{item.name}</Text></Pressable>
    </View>;

  return <View style={styles.container}>
      <TextInput style={styles.searchInput} placeholder="Search friends" value={searchText} onChangeText={handleSearch} />
      <FlatList data={filteredFriends} renderItem={renderFriend} keyExtractor={item => item.id} contentContainerStyle={styles.friendsList} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 20,
    marginBottom: 20
  },
  friendsList: {
    flexGrow: 1
  },
  friendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  friendImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  friendName: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default SearchFriendsScreen;