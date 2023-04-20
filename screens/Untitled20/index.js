import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ChessGameplayScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Chess Gameplay</Text>
      </View>
      <View style={styles.playersContainer}>
        <View style={styles.player}>
          <Image source={require('../assets/player1.png')} style={styles.playerImage} />
          <Text style={styles.playerName}>Player 1</Text>
        </View>
        <View style={styles.player}>
          <Image source={require('../assets/player2.png')} style={styles.playerImage} />
          <Text style={styles.playerName}>Player 2</Text>
        </View>
        <View style={styles.player}>
          <Image source={require('../assets/player3.png')} style={styles.playerImage} />
          <Text style={styles.playerName}>Player 3</Text>
        </View>
        <View style={styles.player}>
          <Image source={require('../assets/player4.png')} style={styles.playerImage} />
          <Text style={styles.playerName}>Player 4</Text>
        </View>
      </View>
      <View style={styles.boardContainer}>
        {
        /* Chess board component goes here */
      }
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  header: {
    alignItems: 'center',
    marginBottom: 20
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  playersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  player: {
    alignItems: 'center'
  },
  playerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10
  },
  playerName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  boardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default ChessGameplayScreen;