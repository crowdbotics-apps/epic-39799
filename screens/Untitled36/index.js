import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
const friends = [{
  id: 1,
  name: 'John Doe',
  image: require('../assets/friend1.jpg')
}, {
  id: 2,
  name: 'Jane Smith',
  image: require('../assets/friend2.jpg')
}, {
  id: 3,
  name: 'Bob Johnson',
  image: require('../assets/friend3.jpg')
}, {
  id: 4,
  name: 'Sarah Lee',
  image: require('../assets/friend4.jpg')
}, {
  id: 5,
  name: 'Mike Brown',
  image: require('../assets/friend5.jpg')
}];

const FriendsScreen = () => {
  return <View style={styles.container}>
      {friends.map(friend => <View key={friend.id} style={styles.friendContainer}>
          <Image source={friend.image} style={styles.friendImage} />
          <Text style={styles.friendName}>{friend.name}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.unfriendButton}>
              <Text style={styles.buttonText}>Unfriend</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chatButton}>
              <Text style={styles.buttonText}>Chat</Text>
            </TouchableOpacity>
          </View>
        </View>)}
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  friendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  friendImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  friendName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  unfriendButton: {
    backgroundColor: '#ff0000',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10
  },
  chatButton: {
    backgroundColor: '#008000',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default FriendsScreen;