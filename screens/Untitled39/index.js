import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{
        uri: 'https://dummyimage.com/150x150/000/fff'
      }} style={styles.avatar} />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>johndoe@example.com</Text>
      </View>
      <View style={styles.body}>
        <Pressable onPress={() => {
        navigation.navigate("Untitled42");
      }}><Text style={styles.bodyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien.</Text></Pressable>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#3f51b5',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10
  },
  name: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold'
  },
  email: {
    fontSize: 16,
    color: '#fff'
  },
  body: {
    padding: 20
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify'
  }
});
export default ProfileScreen;