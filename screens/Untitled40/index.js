import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const OtherUserProfileScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{
        uri: 'https://dummyimage.com/150x150/000/fff'
      }} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.username}>John Doe</Text>
          <Text style={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add Friend</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Photos</Text>
        <View style={styles.photosContainer}>
          <Image source={{
          uri: 'https://dummyimage.com/150x150/000/fff'
        }} style={styles.photo} />
          <Image source={{
          uri: 'https://dummyimage.com/150x150/000/fff'
        }} style={styles.photo} />
          <Image source={{
          uri: 'https://dummyimage.com/150x150/000/fff'
        }} style={styles.photo} />
        </View>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.aboutText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien.</Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20
  },
  userInfo: {
    flex: 1
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5
  },
  bio: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10
  },
  button: {
    backgroundColor: '#007aff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    padding: 20
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  photosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24
  }
});
export default OtherUserProfileScreen;