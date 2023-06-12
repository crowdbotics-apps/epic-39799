import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const SubscriptionScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <Image source={require('../assets/subscription.png')} style={styles.image} />
      <Pressable onPress={() => {
      navigation.navigate("ScreenAI39");
    }}><Text style={styles.title}>Subscribe to Premium</Text></Pressable>
      <Text style={styles.description}>
        Get access to exclusive content and features by subscribing to our
        premium plan.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("Untitled22");
      }}><Text style={styles.buttonText}>Subscribe Now</Text></Pressable>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20
  },
  button: {
    backgroundColor: '#ff5c5c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default SubscriptionScreen;