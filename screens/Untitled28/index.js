import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
const players = [{
  username: 'player1',
  profilePic: require('./assets/player1.jpg')
}, {
  username: 'player2',
  profilePic: require('./assets/player2.jpg')
}, {
  username: 'player3',
  profilePic: require('./assets/player3.jpg')
}, {
  username: 'player4',
  profilePic: require('./assets/player4.jpg')
}];
const characters = [{
  name: 'Character 1',
  image: require('./assets/character1.jpg')
}, {
  name: 'Character 2',
  image: require('./assets/character2.jpg')
}, {
  name: 'Character 3',
  image: require('./assets/character3.jpg')
}, {
  name: 'Character 4',
  image: require('./assets/character4.jpg')
}];

const ListOfPlayersScreen = () => {
  const navigation = useNavigation();
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleRandomSelection = () => {
    const randomPlayer = players[Math.floor(Math.random() * players.length)];
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    setSelectedPlayer(randomPlayer);
    setSelectedCharacter(randomCharacter);
  };

  return <View style={styles.container}>
      <View style={styles.playersContainer}>
        {players.map((player, index) => <TouchableOpacity key={index} style={styles.player} onPress={() => setSelectedPlayer(player)}>
            <Image source={player.profilePic} style={styles.profilePic} />
            <Text style={styles.username}>{player.username}</Text>
          </TouchableOpacity>)}
      </View>
      <TouchableOpacity style={styles.randomButton} onPress={handleRandomSelection}>
        <Pressable onPress={() => {
        navigation.navigate("Untitled29");
      }}><Text style={styles.randomButtonText}>Choose Randomly</Text></Pressable>
      </TouchableOpacity>
      {selectedPlayer && <View style={styles.selectedPlayerContainer}>
          <Image source={selectedPlayer.profilePic} style={styles.selectedPlayerProfilePic} />
          <Text style={styles.selectedPlayerUsername}>{selectedPlayer.username}</Text>
        </View>}
      {selectedCharacter && <View style={styles.selectedCharacterContainer}>
          <Image source={selectedCharacter.image} style={styles.selectedCharacterImage} />
          <Text style={styles.selectedCharacterName}>{selectedCharacter.name}</Text>
        </View>}
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  playersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20
  },
  player: {
    alignItems: 'center',
    margin: 10
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  username: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold'
  },
  randomButton: {
    backgroundColor: '#f4511e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20
  },
  randomButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  selectedPlayerContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  selectedPlayerProfilePic: {
    width: 150,
    height: 150,
    borderRadius: 75
  },
  selectedPlayerUsername: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold'
  },
  selectedCharacterContainer: {
    alignItems: 'center'
  },
  selectedCharacterImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10
  },
  selectedCharacterName: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
export default ListOfPlayersScreen;