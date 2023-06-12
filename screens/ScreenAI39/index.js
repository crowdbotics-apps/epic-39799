import { Pressable } from "react-native";
import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Video } from 'expo-av';
const games = [{
  id: '1',
  name: 'Player 1',
  profilePicture: 'https://tinyurl.com/42evm3m3',
  date: '2022-01-01',
  time: '12:00'
}, {
  id: '2',
  name: 'Player 2',
  profilePicture: 'https://tinyurl.com/42evm3m3',
  date: '2022-01-02',
  time: '14:00'
}, {
  id: '3',
  name: 'Player 3',
  profilePicture: 'https://tinyurl.com/42evm3m3',
  date: '2022-01-03',
  time: '16:00'
}, {
  id: '4',
  name: 'Player 4',
  profilePicture: 'https://tinyurl.com/42evm3m3',
  date: '2022-01-04',
  time: '18:00'
}, {
  id: '5',
  name: 'Player 5',
  profilePicture: 'https://tinyurl.com/42evm3m3',
  date: '2022-01-05',
  time: '20:00'
}];

const GameScreen = () => {
  const renderItem = ({
    item
  }) => <View style={styles.gameItem}>
      <Image source={{
      uri: item.profilePicture
    }} style={styles.profilePicture} />
      <View style={styles.gameInfo}>
        <Pressable><Text style={styles.gameName}>{item.name}</Text></Pressable>
        <Pressable><Text style={styles.gameDate}>{item.date} {item.time}</Text></Pressable>
      </View>
    </View>;

  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Previous Games</Text>
        <FlatList data={games} renderItem={renderItem} keyExtractor={item => item.id} />
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareButtonText}>Share</Text>
        </TouchableOpacity>
        <Text style={styles.title}>How to Play</Text>
        <Video source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} rate={1.0} volume={1.0} isMuted={false} resizeMode="cover" shouldPlay isLooping style={styles.video} />
        <Text style={styles.description}>
          This is a textual description of how to play the game.
        </Text>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Start a New Game</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10
  },
  gameItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  gameInfo: {
    marginLeft: 10
  },
  gameName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  gameDate: {
    fontSize: 14,
    color: '#777'
  },
  shareButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    margin: 10
  },
  shareButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  video: {
    width: '100%',
    height: 200
  },
  description: {
    fontSize: 16,
    paddingHorizontal: 10,
    textAlign: 'justify'
  },
  startButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    margin: 10
  },
  startButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#333',
    paddingVertical: 5
  },
  navButton: {
    padding: 5
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16
  }
});
export default GameScreen;