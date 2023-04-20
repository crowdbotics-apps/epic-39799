import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const LandingPage = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <ImageBackground source={{
      uri: 'https://dummyimage.com/600x400/000/fff'
    }} style={styles.backgroundImage}>
        <Pressable onPress={() => {
        navigation.navigate("Untitled6");
      }}><View style={styles.overlay}>
          <Pressable onPress={() => {
            navigation.navigate("Untitled7");
          }}><Text style={styles.title}>Welcome to Our Website</Text></Pressable>
          <Text style={styles.subtitle}>Discover the Best Deals Online</Text>
        </View></Pressable>
      </ImageBackground>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  }
});
export default LandingPage;