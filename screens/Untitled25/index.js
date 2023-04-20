import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ShareScreen = () => {
  return <View style={styles.container}>
      <Text style={styles.title}>Share on Social Media</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/facebook.png')} style={styles.socialIcon} />
          <Text style={styles.socialText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/linkedin.png')} style={styles.socialIcon} />
          <Text style={styles.socialText}>LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/instagram.png')} style={styles.socialIcon} />
          <Text style={styles.socialText}>Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/twitter.png')} style={styles.socialIcon} />
          <Text style={styles.socialText}>Twitter</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%'
  },
  socialButton: {
    alignItems: 'center'
  },
  socialIcon: {
    width: 50,
    height: 50,
    marginBottom: 10
  },
  socialText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default ShareScreen;