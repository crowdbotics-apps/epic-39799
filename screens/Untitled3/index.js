import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();
  return <ImageBackground source={{
    uri: 'https://dummyimage.com/600x900/000/fff'
  }} style={styles.backgroundImage}>
      <Pressable onPress={() => {
      navigation.navigate("Untitled5");
    }}><View style={styles.container}>
        <Text style={styles.title}>My App</Text>
        <Text style={styles.subtitle}>Loading...</Text>
      </View></Pressable>
    </ImageBackground>;
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 20,
    color: '#fff'
  }
});
export default SplashScreen;