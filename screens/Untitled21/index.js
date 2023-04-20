import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PreviousGames = () => {
  const navigation = useNavigation();
  const games = [{
    id: 1,
    name: 'Game 1',
    date: 'June 1, 2021',
    time: '3:00 PM',
    players: [{
      id: 1,
      name: 'Player 1',
      profilePic: require('../assets/player1.png')
    }, {
      id: 2,
      name: 'Player 2',
      profilePic: require('../assets/player2.png')
    }, {
      id: 3,
      name: 'Player 3',
      profilePic: require('../assets/player3.png')
    }]
  }, {
    id: 2,
    name: 'Game 2',
    date: 'June 2, 2021',
    time: '5:00 PM',
    players: [{
      id: 1,
      name: 'Player 1',
      profilePic: require('../assets/player1.png')
    }, {
      id: 2,
      name: 'Player 2',
      profilePic: require('../assets/player2.png')
    }, {
      id: 4,
      name: 'Player 4',
      profilePic: require('../assets/player4.png')
    }]
  }, {
    id: 3,
    name: 'Game 3',
    date: 'June 3, 2021',
    time: '7:00 PM',
    players: [{
      id: 1,
      name: 'Player 1',
      profilePic: require('../assets/player1.png')
    }, {
      id: 3,
      name: 'Player 3',
      profilePic: require('../assets/player3.png')
    }, {
      id: 4,
      name: 'Player 4',
      profilePic: require('../assets/player4.png')
    }]
  }, {
    id: 4,
    name: 'Game 4',
    date: 'June 4, 2021',
    time: '2:00 PM',
    players: [{
      id: 2,
      name: 'Player 2',
      profilePic: require('../assets/player2.png')
    }, {
      id: 3,
      name: 'Player 3',
      profilePic: require('../assets/player3.png')
    }, {
      id: 4,
      name: 'Player 4',
      profilePic: require('../assets/player4.png')
    }]
  }, {
    id: 5,
    name: 'Game 5',
    date: 'June 5, 2021',
    time: '4:00 PM',
    players: [{
      id: 1,
      name: 'Player 1',
      profilePic: require('../assets/player1.png')
    }, {
      id: 2,
      name: 'Player 2',
      profilePic: require('../assets/player2.png')
    }, {
      id: 3,
      name: 'Player 3',
      profilePic: require('../assets/player3.png')
    }]
  }];
  return <Pressable onPress={() => {
    navigation.navigate("Untitled24");
  }}><View style={styles.container}>
      <View style={styles.gamesContainer}>
        <Pressable onPress={() => {
          navigation.navigate("Untitled39");
        }}><Text style={styles.gamesTitle}>My profile </Text></Pressable>
        {games.map(game => <View key={game.id} style={styles.gameContainer}>
            <View style={styles.playersContainer}>
              {game.players.map(player => <Pressable onPress={() => {
              navigation.navigate("Untitled35");
            }}><Image key={player.id} source={player.profilePic} style={styles.playerProfilePic} /></Pressable>)}
            </View>
            <View style={styles.gameDetailsContainer}>
              <Text style={styles.gameName}>{game.name}</Text>
              <Pressable onPress={() => {
              navigation.navigate("Untitled34");
            }}><Text style={styles.gameDateTime}>{`${game.date} at ${game.time}`}</Text></Pressable>
            </View>
          </View>)}
      </View>
      <TouchableOpacity style={styles.shareButton}>
        <Pressable onPress={() => {
          navigation.navigate("Untitled25");
        }}><Text style={styles.shareButtonText}>Share</Text></Pressable>
      </TouchableOpacity>
      <View style={styles.howToPlayContainer}>
        
        
        
      </View>
      <TouchableOpacity style={styles.newGameButton}>
        <Pressable onPress={() => {
          navigation.navigate("Untitled27");
        }}><Text style={styles.newGameButtonText}>Start a New Game</Text></Pressable>
      </TouchableOpacity>
      <View style={styles.bottomNavBar}>
        {
          /* Bottom nav bar component */
        }
      <Pressable onPress={() => {
          navigation.navigate("Untitled23");
        }}><Text style={styles.AKwYuMol}>Search Screen</Text></Pressable></View>
    <Pressable onPress={() => {
        navigation.navigate("Untitled34");
      }}><Text style={styles.hoobPeFd}>View Characters Screen</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("Untitled41");
      }}><Text style={styles.BqJmiZdm}>Lorem ipsum…</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("Untitled31");
      }}><Text style={styles.FgYWoxpw}>Chat
      </Text></Pressable></View></Pressable>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  gamesContainer: {
    marginBottom: 20
  },
  gamesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  gameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  playersContainer: {
    flexDirection: 'row',
    marginRight: 10
  },
  playerProfilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: -10,
    borderWidth: 2,
    borderColor: '#fff'
  },
  gameDetailsContainer: {
    flex: 1
  },
  gameName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  gameDateTime: {
    fontSize: 14,
    color: '#666',
    width: 234,
    height: 16
  },
  shareButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 20
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  howToPlayContainer: {
    marginBottom: 20
  },
  newGameButton: {
    backgroundColor: '#34C759',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 20
  },
  newGameButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 90,
    height: 23
  },
  hoobPeFd: {
    width: 120,
    height: 24,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "right",
    position: "relative",
    top: 0,
    left: 118
  },
  AKwYuMol: {
    width: 98,
    height: 26,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  BqJmiZdm: {
    width: 100,
    height: 97,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  FgYWoxpw: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default PreviousGames;