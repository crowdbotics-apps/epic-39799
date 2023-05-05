import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const SocialSignUpScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Sign up with</Text>
      </View>
      <Pressable onPress={() => {
      navigation.navigate("Untitled21");
    }}><View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../assets/google.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../assets/facebook.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../assets/apple.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Apple</Text>
        </TouchableOpacity>
      </View></Pressable>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 50
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    width: '80%'
  },
  buttonIcon: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  }
});
export default SocialSignUpScreen;