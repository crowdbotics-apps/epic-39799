import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => {
        navigation.navigate("Untitled12");
      }}><Image style={styles.avatar} source={{
          uri: 'https://via.placeholder.com/150'
        }} /></Pressable>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.bio}>Software Engineer</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.info}>Email: john.doe@gmail.com</Text>
          <Text style={styles.info}>Phone: +1 123 456 7890</Text>
          <Pressable onPress={() => {
          navigation.navigate("Untitled17");
        }}><Text style={styles.info}>Address: 123 Main St, Anytown USA</Text></Pressable>
        </View>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#00BFFF',
    height: 200
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 80
  },
  bio: {
    fontSize: 16,
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 5
  },
  body: {
    marginTop: 40
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: '#696969'
  }
});
export default ProfileScreen;