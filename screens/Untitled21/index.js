import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
const games = [{
  id: 1,
  name: 'Player 1',
  date: '2022-01-01',
  time: '10:00'
}, {
  id: 2,
  name: 'Player 2',
  date: '2022-01-02',
  time: '11:00'
}, {
  id: 3,
  name: 'Player 3',
  date: '2022-01-03',
  time: '12:00'
}, {
  id: 4,
  name: 'Player 4',
  date: '2022-01-04',
  time: '13:00'
}, {
  id: 5,
  name: 'Player 5',
  date: '2022-01-05',
  time: '14:00'
}];

const GameScreen = () => {
  return <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Previous Games</Text>
        {games.map(game => <View key={game.id} style={styles.game}>
            <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.profileImage} />
            <Text style={styles.gameText}>{game.name}</Text>
            <Text style={styles.gameText}>{game.date}</Text>
            <Text style={styles.gameText}>{game.time}</Text>
          </View>)}
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
        <Text style={styles.title}>How to Play</Text>
        <Video source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} rate={1.0} volume={1.0} isMuted={false} resizeMode="cover" shouldPlay isLooping style={styles.video} />
        <Text style={styles.description}>
          This is a textual description of how to play the game.
        </Text>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.buttonText}>Start a New Game</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>;
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
    marginTop: 20
  },
  game: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  gameText: {
    fontSize: 16
  },
  shareButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center'
  },
  startButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  video: {
    width: '100%',
    height: 200,
    marginTop: 20
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 20
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#333',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  navButton: {
    padding: 5
  }
});
export default GameScreen;