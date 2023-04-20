```
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ChessScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pieceContainer}>
        <Image source={require('../assets/king.png')} style={styles.pieceImage} />
        <Text style={styles.pieceName}>King</Text>
        <Text style={styles.pieceDescription}>The king is the most important piece in the game of chess. It can move one square in any direction.</Text>
      </View>
      <View style={styles.pieceContainer}>
        <Image source={require('../assets/queen.png')} style={styles.pieceImage} />
        <Text style={styles.pieceName}>Queen</Text>
        <Text style={styles.pieceDescription}>The queen is the most powerful piece in the game of chess. It can move any number of squares in any direction.</Text>
      </View>
      <View style={styles.pieceContainer}>
        <Image source={require('../assets/rook.png')} style={styles.pieceImage} />
        <Text style={styles.pieceName}>Rook</Text>
        <Text style={styles.pieceDescription}>The rook can move any number of squares horizontally or vertically.</Text>
      </View>
      <View style={styles.pieceContainer}>
        <Image source={require('../assets/bishop.png')} style={styles.pieceImage} />
        <Text style={styles.pieceName}>Bishop</Text>
        <Text style={styles.pieceDescription}>The bishop can move any number of squares diagonally.</Text>
      </View>
      <View style={styles.pieceContainer}>
        <Image source={require('../assets/knight.png')} style={styles.pieceImage} />
        <Text style={styles.pieceName}>Knight</Text>
        <Text style={styles.pieceDescription}>The knight moves to any of the squares immediately adjacent to it, then moves in an L-shape from that square.</Text>
      </View>
      <View style={styles.pieceContainer}>
        <Image source={require('../assets/pawn.png')} style={styles.pieceImage} />
        <Text style={styles.pieceName}>Pawn</Text>
        <Text style={styles.pieceDescription}>The pawn can move forward one square, but captures diagonally.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pieceContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  pieceImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  pieceName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  pieceDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default ChessScreen;
```;
export {};