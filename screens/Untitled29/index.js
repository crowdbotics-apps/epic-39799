import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ChessScreen = () => {
  const [boardSize, setBoardSize] = useState('8x8');
  const [characters, setCharacters] = useState(['King', 'Queen', 'Bishop', 'Knight', 'Rook', 'Pawn']);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterSelection = character => {
    setSelectedCharacter(character);
  };

  const handleCharacterPlacement = event => {// handle character placement logic here
  };

  return <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/profile-pic.png')} style={styles.profilePic} />
        <Text style={styles.username}>@username</Text>
      </View>
      <View style={styles.boardContainer}>
        <View style={styles.board}>
          {
          /* render chess board here */
        }
        </View>
        <View style={styles.characters}>
          {characters.map((character, index) => <TouchableOpacity key={index} style={styles.character} onPress={() => handleCharacterSelection(character)}>
              <Pressable><Text style={styles.characterText}>{character}</Text></Pressable>
            </TouchableOpacity>)}
        </View>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  boardContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  board: {
    flex: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 10,
    aspectRatio: 1,
    borderRadius: 10,
    overflow: 'hidden'
  },
  characters: {
    width: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10
  },
  character: {
    backgroundColor: '#eee',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  characterText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
export default ChessScreen;