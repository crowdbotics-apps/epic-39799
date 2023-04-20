import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const GameScreen = () => {
  const navigation = useNavigation();
  const [boardSize, setBoardSize] = useState('');
  const [gameType, setGameType] = useState('');
  const [vsComputer, setVsComputer] = useState(false);

  const handleStartGame = () => {// handle starting the game
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Chess Game</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Game Type:</Text>
        <TouchableOpacity style={styles.button} onPress={() => setGameType('1 vs 1')}>
          <Text style={styles.buttonText}>1 vs 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setGameType('2 vs 2')}>
          <Text style={styles.buttonText}>2 vs 2</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Set Board Size:</Text>
        <TextInput style={styles.input} placeholder="Number of rows and columns" value={boardSize} onChangeText={setBoardSize} keyboardType="numeric" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Vs Computer:</Text>
        <TouchableOpacity style={styles.button} onPress={() => setVsComputer(true)}>
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setVsComputer(false)}>
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.startButton} onPress={handleStartGame}>
        <Pressable onPress={() => {
        navigation.navigate("Untitled28");
      }}><Text style={styles.startButtonText}>Start Game</Text></Pressable>
      </TouchableOpacity>
      <Image source={require('./assets/chess-board.png')} style={styles.image} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  label: {
    fontSize: 18,
    marginRight: 16
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    flex: 1
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 8
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  },
  startButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginTop: 32
  },
  startButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginTop: 32
  }
});
export default GameScreen;