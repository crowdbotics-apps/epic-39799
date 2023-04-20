import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const FriendRequestsScreen = () => {
  const [friendRequests, setFriendRequests] = useState([{
    id: 1,
    name: 'John Doe',
    image: require('../assets/profile1.jpg')
  }, {
    id: 2,
    name: 'Jane Smith',
    image: require('../assets/profile2.jpg')
  }, {
    id: 3,
    name: 'Bob Johnson',
    image: require('../assets/profile3.jpg')
  }]);

  const handleAccept = id => {
    setFriendRequests(friendRequests.filter(request => request.id !== id)); // Add friend to friends list
  };

  const handleReject = id => {
    setFriendRequests(friendRequests.filter(request => request.id !== id));
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Friend Requests</Text>
      {friendRequests.map(request => <View key={request.id} style={styles.requestContainer}>
          <Image source={request.image} style={styles.profileImage} />
          <Text style={styles.name}>{request.name}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.acceptButton]} onPress={() => handleAccept(request.id)}>
              <Text style={styles.buttonText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.rejectButton]} onPress={() => handleReject(request.id)}>
              <Text style={styles.buttonText}>Reject</Text>
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
    paddingVertical: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  requestContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5
  },
  acceptButton: {
    backgroundColor: '#4CAF50'
  },
  rejectButton: {
    backgroundColor: '#F44336'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
export default FriendRequestsScreen;